/* global Vue, plServices */

import uuid from 'uuid/v4'
import _isUndefined from 'lodash/isUndefined'
import _findIndex from 'lodash/findIndex'
import _toString from 'lodash/toString'

export default {
  namespaced: true,
  state: {
    filters: [],
    inclusions: [
      { 'value': true, 'label': 'Include' },
      { 'value': false, 'label': 'Exclude' },
    ],
    keys: [
      { 'value': 1, 'label': 'Country' }
    ],
    operations: [
      { 'value': 'exact', 'label': 'Exact match' },
      { 'value': 'regex', 'label': 'Matching regex' },
      { 'value': 'begin', 'label': 'Begins with' },
      { 'value': 'end', 'label': 'End with' },
      { 'value': 'contain', 'label': 'Contains' },
      { 'value': 'in', 'label': 'In' },
      { 'value': 'lower', 'label': 'Lower' },
      { 'value': 'lower-equal', 'label': 'Lower or equal' },
      { 'value': 'greater', 'label': 'Greater' },
      { 'value': 'greater-equal', 'label': 'Greater or equal' }
    ]
  },
  getters: {
    filters: state => state.filters
  },
  mutations: {
    set (state, { filter, filters }) {
      const setFilter = (filter) => {
        const index = _findIndex(state.filters, f => f.id === filter.id)

        const newFilter = {
          id: filter.id,
          and: [],
          saved: true,
          modified: false
        }

        if (index === -1) {
          state.filters[index].push(newFilter)
        } else {
          Vue.set(state.filters, index, newFilter)
        }
      }

      if (!_isUndefined(filters)) {
        return filters.forEach(f => setFilter(f))
      }

      setFilter(filter)
    },

    create (state, { filterId }) {
      state.filters.push({
        id: filterId,
        and: [],
        saved: true,
        modified: false
      })
    },

    setAnd (state, { filterId, andFilter, andFilters }) {
      const fI = _findIndex(state.filters, f => f.id === filterId)
      const setFilter = (andFilter) => {
        const aI = _findIndex(state.filters[fI].and, aF => aF.id === andFilter.id)

        const newFilter = {
          id: andFilter.id,
          or: [],
          saved: true,
          modified: false
        }

        if (aI === -1) {
          state.filters[fI].and.push(newFilter)
        } else {
          Vue.set(state.filters[fI].and, aI, newFilter)
        }
      }

      if (!_isUndefined(andFilters)) {
        return andFilters.forEach(andFilter => setFilter(andFilter))
      }

      setFilter(andFilter)
    },

    createAnd (state, { filterId, andFilterId }) {
      const fI = _findIndex(state.filters, f => f.id === filterId)

      state.filters[fI].and.push({
        id: andFilterId,
        or: [],
        saved: false,
        modified: false
      })
    },

    deleteAnd (state, { filterId, andFilterId }) {
      const fI = _findIndex(state.filters, f => f.id === filterId)
      const afI = _findIndex(state.filters[fI].and, af => af.id === andFilterId)

      state.filters[fI].and.splice(afI, 1)
    },

    setOr (state, { filterId, andFilterId, orFilter, orFilters }) {
      const fI = _findIndex(state.filters, f => f.id === filterId)
      const afI = _findIndex(state.filters[fI].and, aF => aF.id === andFilterId)

      const setFilter = (orFilter) => {
        const ofI = _findIndex(state.filters[fI].and[afI].or, f => f.id === orFilter.id)

        const newFilter = {
          id: orFilter.id,
          include: true,
          key: orFilter.filter_type_id,
          operation: orFilter.value.op,
          value: orFilter.value.value,
          saved: false,
          modified: false
        }

        if (ofI === -1) {
          state.filters[fI].and[afI].or.push(newFilter)
        } else {
          Vue.set(state.filters[fI].and[afI].or, ofI, newFilter)
        }
      }

      if (!_isUndefined(orFilters)) {
        return orFilters.forEach(orFilter => setFilter(orFilter))
      }

      setFilter(orFilter)
    },

    createOr (state, { filterId, andFilterId, orFilterId }) {
      const fI = _findIndex(state.filters, f => f.id === filterId)
      const afI = _findIndex(state.filters[fI].and, af => af.id === andFilterId)

      state.filters[fI].and[afI].or.push({
        id: orFilterId,
        include: state.inclusions[0].value,
        key: state.keys[0].value,
        operation: state.operations[0].value,
        value: '',
        saved: false,
        modified: false
      })
    },

    deleteOr (state, { filterId, andFilterId, orFilterId }) {
      const fI = _findIndex(state.filters, f => f.id === filterId)
      const afI = _findIndex(state.filters[fI].and, aF => aF.id === andFilterId)
      const ofI = _findIndex(state.filters[fI].and[afI].or, oF => oF.id === orFilterId)

      state.filters[fI].and[afI].or.splice(ofI, 1)
    },

    updateFilterOperation (state, { filterId, andFilterId, orFilterId, operation, modified = true }) {
      const fI = _findIndex(state.filters, f => f.id === _toString(filterId))
      const afI = _findIndex(state.filters[fI].and, aF => aF.id === _toString(andFilterId))
      const ofI = _findIndex(state.filters[fI].and[afI].or, oF => oF.id === _toString(orFilterId))

      state.filters[fI].and[afI].or[ofI].modified = modified
      state.filters[fI].and[afI].or[ofI].operation = operation
    },

    updateFilterKey (state, { filterId, andFilterId, orFilterId, key, modified = true }) {
      const fI = _findIndex(state.filters, f => f.id === filterId)
      const afI = _findIndex(state.filters[fI].and, aF => aF.id === andFilterId)
      const ofI = _findIndex(state.filters[fI].and[afI].or, oF => oF.id === orFilterId)

      state.filters[fI].and[afI].or[ofI].modified = modified
      state.filters[fI].and[afI].or[ofI].key = key
    },

    updateFilterValue (state, { filterId, andFilterId, orFilterId, value, modified = true }) {
      const fI = _findIndex(state.filters, f => f.id === filterId)
      const afI = _findIndex(state.filters[fI].and, aF => aF.id === andFilterId)
      const ofI = _findIndex(state.filters[fI].and[afI].or, oF => oF.id === orFilterId)

      state.filters[fI].and[afI].or[ofI].modified = modified
      state.filters[fI].and[afI].or[ofI].value = value
    },

    updateFilterInclusion (state, { filterId, andFilterId, orFilterId, include, modified = true }) {
      const fI = _findIndex(state.filters, f => f.id === filterId)
      const afI = _findIndex(state.filters[fI].and, aF => aF.id === andFilterId)
      const ofI = _findIndex(state.filters[fI].and[afI].or, oF => oF.id === orFilterId)

      state.filters[fI].and[afI].or[ofI].modified = modified
      state.filters[fI].and[afI].or[ofI].include = include
    }
  },
  actions: {
    set ({ commit, getters }, { filters }) {

    },
    create ({ commit, getters }) {
      const filterId = uuid()
      commit('create', { filterId })
      const index = _findIndex(getters.filters, f => f.id === filterId)
      return Promise.resolve({ filter: getters.filters[index] })
    },
    delete ({ commit, getters }, { filterId }) {
      commit('delete', { filterId })
    },
    store ({ commit, getters }, { segmentId, filter }) {
      return plServices.segmentFilters.store({ segmentId, filter })
    },
    update ({ dispatch, commit, getters }, { segmentId, filter }) {
      if (!filter.saved) { return dispatch('store', { segmentId, filter }) }
      return plServices.segmentFilters.update({ segmentId, filter })
    },
    createAnd ({ commit, getters }, { filterId }) {
      const andFilterId = uuid()
      const fI = _findIndex(getters.filters, f => f.id === filterId)
      commit('createAnd', { filterId, andFilterId })
      const index = _findIndex(getters.filters[fI].and, aF => aF.id === andFilterId)
      return Promise.resolve({ andFilter: getters.filters[fI].and[index] })
    },
    deleteAnd ({ commit, getters }, { filterId, andFilterId }) {
      commit('deleteAnd', { andFilterId })
    },
    createOr ({ commit, getters }, { filterId, andFilterId }) {
      const orFilterId = uuid()
      const fI = _findIndex(getters.filters, f => f.id === filterId)
      const aI = _findIndex(getters.filters[fI].and, f => f.id === andFilterId)
      commit('createOr', { filterId, andFilterId, orFilterId })
      const oI = _findIndex(getters.filters[fI].and[aI].or, f => f.id === orFilterId)
      return Promise.resolve({ orFilter: getters.filters[fI].and[aI].or[oI] })
    },
    setOr ({ commit, getters }, { filterId, andFilterId, orFilter, orFilters }) {
      commit('setOr', { filterId, andFilterId, orFilter, orFilters })
    },
    deleteOr ({ commit, getters }, { filterId, andFilterId, orFilterId }) {
      commit('deleteOr', { andFilterId, orFilterId })
    }
  }
}
