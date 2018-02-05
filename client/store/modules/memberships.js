/* global Vue, plServices */

import _isUndefined from 'lodash/isUndefined'
import _findIndex from 'lodash/findIndex'
import _toString from 'lodash/toString'

export default {
  namespaced: true,
  state: {
    memberships: []
  },
  getters: {
    memberships: (state) => state.memberships
  },
  mutations: {
    set (state, { memberships, membership }) {

      const setMembership = (membership) => {
        const index = _findIndex(state.memberships, m => m.id === _toString(membership.id))
        if (index === -1) {
          state.memberships.push(membership)
        } else {
          state.memberships[index] = membership
        }
      }

      if (!_isUndefined(memberships)) {
        return memberships.forEach(membership => setMembership(membership))
      }

      setMembership(membership)
    }
  },
  actions: {
    pull ({ commit }, { params }) {
      return plServices.memberships.getAll({ params })
        .then(({ data: memberships }) => commit('set', { memberships }))
    }
  }
}
