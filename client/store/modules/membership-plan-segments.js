/* global Vue, plServices */

import uuid from 'uuid/v4'
import _isUndefined from 'lodash/isUndefined'
import _findIndex from 'lodash/findIndex'
import _toString from 'lodash/toString'

export default {
  namespaced: true,
  state: {
    segments: []
  },
  getters: {
    segments: state => state.segments
  },
  mutations: {
    set (state, { segments, segment }) {
      const setSegment = (segment) => {
        const index = _findIndex(state.segments, s => s.id === _toString(segment.id))

        const newSegment = {
          id: _toString(segment.id),
          title: segment.title || '',
          tabs: [],
          filters: [],
          modified: false,
          saved: true,
          createAt: new Date(segment.created_at).getTime() / 1000,
          updatedAt: new Date(segment.updated_at).getTime() / 1000
        }


        if (index === -1) {
          state.segments.push(newSegment)
        } else {
          Vue.set(state.segments, index, newSegment)
        }
      }

      if (!_isUndefined(segments)) {
        return segments.forEach(segment => setSegment(segment))
      }

      setSegment(segment)
    },

    create (state, { segmentId }) {
      state.segments.push({
        id: _toString(segmentId),
        title: '',
        tabs: [],
        filters: [],
        modified: false,
        saved: false,
        createdAt: Math.floor(Date.now() / 1000),
        updatedAt: Math.floor(Date.now() / 1000)
      })
    },

    delete (state, { segmentId }) {
      const index = _findIndex(state.segments, s => s.id = segmentId)

      state.segments.splice(index, 1)
    },

    reset (state) {
      state.segments = []
    },

    updateTitle (state, { segmentId, title }) {

    },

    insertTab (state, { segmentId, tab }) {
      const id = uuid()
      const index = _findIndex(state.segments, s => s.id === _toString(segmentId))

      state.segments[index].modified = true
      state.segments[index].tabs.push({
        id: _toString(id),
        tabId: _toString(tab.id)
      })
    },

    removeTab (state, { segmentId, tabId }) {
      const sI = _findIndex(state.segments, s => s.id === _toString(segmentId))
      const tI = _findIndex(state.segments[sI].tabs, t => t.tabId === _toString(tabId))

      state.segments[sI].modified = true
      state.segments[sI].tabs.splice(tI, 1)
    },

    insertFilter (state, { segmentId, filter }) {
      const id = uuid()
      const index = _findIndex(state.segments, s => s.id === _toString(segmentId))

      state.segments[index].modified = true
      state.segments[index].filters.push({
        id: _toString(id),
        filterId: _toString(filter.id)
      })
    },

    removeFilter (state, { segmentId, filterId }) {
      const sI = _findIndex(state.segments, s => s.id === _toString(segmentId))
      const fI = _findIndex(state.segments[sI].filters, f => f.filterId === _toString(filterId))

      state.segments[sI].modified = true
      state.segments[sI].filters.splice(tI, 1)
    }
  },
  actions: {
    set ({ commit, getters }, { segment, segments }) {
      commit('set', { segment, segments })
    },

    create ({ commit, getters }) {
      const segmentId = uuid()
      commit('create', { segmentId })
      const index = _findIndex(getters.segments, s => s.id === _toString(segmentId))
      return Promise.resolve({ segment: getters.segments[index] })
    },

    store ({ commit, getters }, { segmentId, planId, position }) {
      return plServices.membershipPlanSegments.store({ planId, segmentId, position })
    },

    update ({ dispatch, commit, getters }, { segment, planId, position }) {
      if (!segment.saved) {
        return dispatch('store', { segmentId: segment.id, planId, position })
      }
      return plServices.membershipPlanSegments.update({ segment })
    },

    createTab ({ dispatch }, { segmentId }) {
      return dispatch('membershipPlanTabs/create', null, { root: true })
        .then(({ tab }) => dispatch('insertTab', { segmentId, tab }))
    },

    insertTab ({ commit, getters }, { segmentId, tab }) {
      const index = _findIndex(getters.segments, s => s.id === _toString(segmentId))
      commit('insertTab', { segmentId, tab })
      return Promise.resolve({ segment: getters.segments[index] })
    },

    removeTab ({ commit, getters }, { segmentId, tabId }) {
      const index = _findIndex(getters.segments, s => s.id === _toString(segmentId))
      commit('removeTab', { segmentId, tabId })
    },

    deleteTab ({ dispatch }, { segmentId, tabId }) {
      return dispatch('membershipPlanTabs/delete', { segmentId, tabId }, { root: true })
        .then(() => dispatch('removeTab', { segmentId, tabId }))
    },

    insertFilter ({ commit, getters }, { segmentId, filter }) {
      const index = _findIndex(getters.segments, s => s.id === _toString(segmentId))
      commit('insertFilter', { segmentId, filter })
      return Promise.resolve({ segment: getters.segments[index] })
    },

    removeFilter ({ commit, getters }, { segmentId, filterId }) {
      const index = _findIndex(getters.segments, s => s.id === _toString(segmentId))
      commit('removeFilter', { segmentId, filterId })
    }
  }
}
