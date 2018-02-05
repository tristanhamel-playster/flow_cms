/* global Vue, plServices */

import uuid from 'uuid/v4'
import _get from 'lodash/get'
import _isUndefined from 'lodash/isUndefined'
import _findIndex from 'lodash/findIndex'
import _toString from 'lodash/toString'

function findIndex (state, blockId) {
  return _findIndex(state.blocks, b => b.id == blockId) // eslint-disable-line eqeqeq
}

export default {
  namespaced: true,
  state: {
    blocks: [],
    currentBlockId: null
  },
  getters: {
    blocks: state => state.blocks,
    currentBlock: state => {
      const index = findIndex(state, state.currentBlockId)
      return state.blocks[index] || {}
    }
  },
  mutations: {
    use (state, { blockId }) { state.currentBlockId = blockId },

    set (state, { blocks, block }) {
      const setBlock = (block) => {
        const index = findIndex(state, block.id)
        const newBlock = {
          id: _toString(block.id),
          segmentId: block.segments[0].id,
          layoutId: block.layout_id,
          title: block.name,
          memberships: [],
          status: block.status,
          saved: true,
          segmentModified: false,
          modified: false,
          createAt: new Date(block.created_at).getTime() / 1000,
          updatedAt: new Date(block.updated_at).getTime() / 1000
        }

        if (index === -1) {
          state.blocks.push(newBlock)
        } else {
          Vue.set(state.blocks, index, newBlock)
        }
      }

      if (!_isUndefined(blocks)) {
        return blocks.forEach(block => setBlock(block))
      }

      setBlock(block)
    },

    create (state, { blockId } = {}) {
      state.blocks.push({
        id: _toString(blockId),
        title: '',
        memberships: [],
        status: 0,
        saved: false,
        modified: false,
        createdAt: Math.floor(Date.now() / 1000),
        updatedAt: Math.floor(Date.now() / 1000)
      })
    },

    remove (state, { blockId }) {
      const index = _findIndex(state.blocks, b => b.id === _toString(blockId))
      state.blocks.splice(index, 1)
    },

    updateTitle (state, { title, blockId }) {
      const index = findIndex(state, blockId)
      state.blocks[index].modified = true
      state.blocks[index].title = title
    },

    updateStatus (state, { status, blockId }) {
      const index = findIndex(state, blockId)
      state.blocks[index].modified = true
      state.blocks[index].status = status
    },

    insertMembership (state, { membership, blockId, membershipId }) {
      const id = membershipId || membership.id
      const index = findIndex(state, blockId)

      if (state.blocks[index].memberships.indexOf(id) === -1) {
        state.blocks[index].segmentModified = true
        state.blocks[index].memberships.push(id)
      }
    },

    insertMemberships (state, { memberships, blockId }) {
      const index = findIndex(state, blockId)

      memberships.forEach(membership => {
        state.blocks[index].memberships.push(membership.id)
      })
    },

    removeMembership (state, { membershipId, blockId }) {
      const index = findIndex(state, blockId)

      state.blocks[index].segmentModified = true
      state.blocks[index].memberships = state.blocks[index].memberships
        .filter(m => m !== membershipId)
    },

    resetMemberships (state, { blockId }) {
      const index = findIndex(state, blockId)
      state.blocks[index].memberships = []
    },

    reorderMemberships (state, { memberships, blockId }) {
      const index = findIndex(state, blockId)
      Object.assign(state.blocks[index], { memberships, segmentModified: true })
    },

    resetModified (state, { blockId }) {
      const index = findIndex(state, blockId)
      Object.assign(state.blocks[index], {modified: false, segmentModified: false})
    }
  },
  actions: {
    use ({ commit }, { blockId }) {
      commit('use', { blockId })
    },

    set ({ commit }, { blocks, block }) {
      commit('set', { blocks, block })
    },

    pull ({ commit }, { blockId } = {}) {
      if (_isUndefined(blockId)) {
        return plServices.membershipBlocks.getAll()
          .then(({ data: blocks }) => commit('set', { blocks }))
      }

      return plServices.membershipBlocks.get({ blockId })
        .then(({ data: block }) => {
          const memberships = _get(block, 'segments[0].memberships')
          commit('set', { block })

          if (memberships) {
            commit('insertMemberships', { memberships, blockId })
          }
        })
    },

    load ({ dispatch, commit }, { blockId }) {
      return dispatch('pull', { blockId })
        .then(() => commit('use', { blockId }))
    },

    create ({ commit, getters }) {
      const blockId = uuid()
      commit('create', { blockId })
      const index = findIndex(getters, blockId)
      return Promise.resolve({ block: getters.blocks[index] })
    },

    store ({ commit, getters }, { blockId }) {
      const index = findIndex(getters, blockId)
      const title = getters.blocks[index].title
      const status = getters.blocks[index].status
      const membershipIds = getters.blocks[index].memberships
      return plServices.membershipBlocks.store({ title, membershipIds, status })
    },

    update ({ commit, getters, dispatch }, { blockId }) {
      const index = findIndex(getters, blockId)
      return plServices.membershipBlocks.update(getters.blocks[index])
        .then(() => {
          commit('resetModified', { blockId })
          dispatch('alert', {msg: 'Block successfully saved.'}, {root: true})
        })
        .catch(() => {
          dispatch('alert', {
            style: 'red',
            icon: 'error',
            msg: 'An error occurred. Try again later.'
          }, {root: true})
        })
    },

    delete ({ commit, getters }, { blockId }) {
      const index = findIndex(getters, blockId)

      if (getters.blocks[index].saved) {
        return plServices.membershipBlocks.delete({ blockId })
          .then(() => commit('remove', { blockId }))
      }

      commit('remove', { blockId })
    }
  }
}
