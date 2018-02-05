/* global Vue, plServices */

import uuid from 'uuid/v4'
import _isPlainObject from 'lodash/isPlainObject'
import _isUndefined from 'lodash/isUndefined'
import _findIndex from 'lodash/findIndex'
import _toString from 'lodash/toString'

export default {
  namespaced: true,
  state: {
    tabs: []
  },
  getters: {
    tabs: state => state.tabs,
    tabsCount: (state, getters) => {
      if (!_isPlainObject(this.tabs)) return 0
      return Object.keys(this.tabs).length
    }
  },
  mutations: {
    set (state, { tabs, tab }) {
      const setTab = (tab) => {
        const index = _findIndex(state.tabs, t => t.id === _toString(tab.id))

        const newTab = {
          id: _toString(tab.id),
          title: tab.name || '',
          blocks: [],
          modified: false,
          saved: true,
          createAt: new Date(tab.created_at).getTime() / 1000,
          updatedAt: new Date(tab.updated_at).getTime() / 1000
        }

        if (index === -1) {
          state.tabs.push(newTab)
        } else {
          Vue.set(state.tabs, index, newTab)
        }
      }

      if (!_isUndefined(tabs)) {
        return tabs.forEach(tab => setTab(tab))
      }

      setTab(tab)
    },

    create (state, { tabId }) {
      state.tabs.push({
        id: _toString(tabId),
        title: '',
        blocks: [],
        modified: false,
        saved: false,
        createdAt: Math.floor(Date.now() / 1000),
        updatedAt: Math.floor(Date.now() / 1000)
      })
    },

    delete (state, { tabId }) {
      const index = _findIndex(state.tabs, t => t.id === tabId)

      state.tabs.splice(index, 1)
    },

    reset (state) {
      state.tabs = []
    },

    updateTitle (state, { tabId, title }) {
      const index = _findIndex(state.tabs, t => t.id === _toString(tabId))

      state.tabs[index].modified = true
      state.tabs[index].title = title
    },

    insertBlock (state, { tabId, blockId }) {
      const id = uuid()
      const index = _findIndex(state.tabs, t => t.id === _toString(tabId))

      state.tabs[index].modified = true
      state.tabs[index].blocks.push({
        id: _toString(id),
        blockId: _toString(blockId)
      })
    },

    removeBlock (state, { tabId, blockId }) {
      const tI = _findIndex(state.tabs, t => t.id === _toString(tabId))
      const bI = _findIndex(state.tabs[tI].blocks, b => b.blockId === _toString(blockId))

      state.tabs[tI].modified = true
      state.tabs[tI].blocks.splice(bI, 1)
    }
  },
  actions: {
    set ({ commit, getters }, { tabs, tab }) {
      commit('set', { tabs, tab })
    },

    create ({ commit, getters }) {
      const tabId = uuid()

      commit('create', { tabId })

      const index = _findIndex(getters.tabs, t => t.id === tabId)

      return Promise.resolve({ tab: getters.tabs[index] })
    },

    delete ({ commit, getters }, { segmentId, tabId }) {
      return plServices.membershipPlanTabs.delete({ segmentId, tabId })
        .then(() => commit('delete', { tabId }))
    },

    store (context, { segmentId, tab, position }) {
      return plServices.membershipPlanTabs.store({ segmentId, tab, position })
    },

    update ({ dispatch }, { segmentId, tab, position }) {
      if (!tab.saved) { return dispatch('store', { segmentId, tab, position }) }
      return plServices.membershipPlanTabs.update({ segmentId, tab })
    },

    insertBlock ({ commit, getters }, { tabId, blockId }) {
      commit('insertBlock', { tabId, blockId })
    },

    removeBlock ({ commit, getters }, { tabId, blockId }) {
      commit('removeBlock', { tabId, blockId })
    }
  }
}
