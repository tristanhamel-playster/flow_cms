/* global Vue, pl, plServices */

import uuid from 'uuid/v4'
import Promise from 'bluebird'
import _isPlainObject from 'lodash/isPlainObject'
import _orderBy from 'lodash/orderBy'
import _findIndex from 'lodash/findIndex'
import _isUndefined from 'lodash/isUndefined'
import _toString from 'lodash/toString'

export default {
  namespaced: true,
  state: {
    plans: [],
    currentPlanId: null
  },
  getters: {
    plans: state => state.plans,
    currentPlanId: state => state.currentPlanId,
    currentPlan: state => {
      const index = _findIndex(state.plans, p => p.id === state.currentPlanId)
      return state.plans[index] || {}
    },
    isPreviewOpen: (state, getters) => getters.currentPlan.isPreviewOpen || false,
    currentPlanSegmentCount: state => {
      const index = _findIndex(state.plans, p => p.id === state.currentPlanId)
      if (!_isPlainObject(state.plans[index])) { return 0 }
      return Object.keys(state.plans[index].segments).length
    }
  },
  mutations: {
    order (state) {
      state.plans = _orderBy(state.plans, ['saved', 'id'])
    },

    set (state, { plans, plan }) {
      const setPlan = (plan) => {
        const index = _findIndex(state.plans, p => p.id === _toString(plan.id))

        const newPlan = {
          id: _toString(plan.id),
          title: plan.name,
          segments: [],
          saved: true,
          modified: false,
          isPreviewOpen: false,
          createAt: new Date(plan.created_at).getTime() / 1000,
          updatedAt: new Date(plan.updated_at).getTime() / 1000
        }

        if (index === -1) {
          state.plans.push(newPlan)
        } else {
          Vue.set(state.plans, index, newPlan)
        }
      }

      if (!_isUndefined(plans)) {
        return plans.forEach(plan => setPlan(plan))
      }

      setPlan(plan)
    },

    use (state, { planId }) { state.currentPlanId = planId },

    create (state, { planId }) {
      state.plans.push({
        id: _toString(planId),
        title: '',
        segments: [],
        saved: false,
        modified: false,
        isPreviewOpen: false,
        createdAt: Math.floor(Date.now() / 1000),
        updatedAt: Math.floor(Date.now() / 1000)
      })
    },

    remove (state, { planId }) {
      const index = _findIndex(state.plans, p => p.id === _toString(planId))
      state.plans.splice(index, 1)
    },

    updateTitle (state, { planId, title }) {
      const index = _findIndex(state.plans, p => p.id === planId)
      state.plans[index].modified = true
      state.plans[index].title = title
    },

    insertSegment (state, { segmentId, planId, position = 0 }) {
      const id = uuid()
      const index = _findIndex(state.plans, p => p.id === planId)

      state.plans[index].modified = true

      state.plans[index].segments.push({
        id: _toString(id),
        segmentId: _toString(segmentId),
        position
      })
    },

    removeSegment (state, { segmentId, planId }) {
      const pI = _findIndex(state.plans, p => p.id === planId)
      const sI = _findIndex(state.plans[planId].segments, s => s.segmentId === segmentId)

      state.plans[pI].modified = true

      state.plans[pI].segments.splice(sI, 1)
    },

    openPreview (state) {
      const index = _findIndex(state.plans, p => p.id === state.currentPlanId)
      state.plans[index].isPreviewOpen = true
    },
    closePreview (state) {
      const index = _findIndex(state.plans, p => p.id === state.currentPlanId)
      state.plans[index].isPreviewOpen = false
    },
    togglePreview (state) {
      const index = _findIndex(state.plans, p => p.id === state.currentPlanId)
      const isOpen = state.plans[index].isPreviewOpen
      state.plans[index].isPreviewOpen = !isOpen
    }
  },
  actions: {
    use ({ commit }, { planId }) {
      commit('use', { planId })
    },

    get ({ dispatch, getters }, { planId }) {
      // TODO: Return the same format the db sends
      // const index = _findIndex(getters.plans, p => p.id === planId)
      // if (index !== -1) { return Promise.resolve({ plan: getters.plans[index] }) }

      return plServices.membershipPlans.get({ planId })
        .then(({ data }) => ({ plan: data }))
        .catch(() => { throw new Error('Plan not found!') })
    },

    pull ({ dispatch, commit, getters }, { planId } = {}) {
      if (_isUndefined(planId)) {
        return plServices.membershipPlans.getAll()
          .then(({ data: plans }) => commit('set', { plans }))
          .then(() => commit('order'))
      }

      return dispatch('get', { planId })
        .then(({ plan }) => {
          commit('set', { plan })

          return Promise.map(plan.segments, (segment, index) => {
            commit('insertSegment', { segmentId: segment.id, planId })
            dispatch('membershipPlanSegments/set', { segment }, { root: true })

            segment.tabs.forEach(tab => {
              dispatch('membershipPlanSegments/insertTab', { segmentId: segment.id, tab }, { root: true })
              dispatch('membershipPlanTabs/set', { tab }, { root: true })
              tab.blocks.forEach(block => {
                dispatch('membershipPlanTabs/insertBlock', { tabId: tab.id, blockId: block.id }, { root: true })
                dispatch('membershipBlocks/set', { block }, { root: true })
              })
            })

            if (segment.filters.length > 0) {
              return dispatch('segmentFilters/create', null, { root: true })
                .then(({ filter }) => {
                  dispatch('membershipPlanSegments/insertFilter', { segmentId: segment.id, filter }, { root: true })
                  return dispatch('segmentFilters/createAnd', { filterId: filter.id }, { root: true })
                    .then(({ andFilter }) => dispatch('segmentFilters/setOr', {
                      filterId: filter.id,
                      andFilterId: andFilter.id,
                      orFilters: segment.filters
                    }, { root: true }))
                })
            } else if (segment.filters.length === 0 && index > 0) {
              return dispatch('segmentFilters/create', null, { root: true })
                .then(({ filter }) => {
                  dispatch('membershipPlanSegments/insertFilter', { segmentId: segment.id, filter }, { root: true })
                  return dispatch('segmentFilters/createAnd', { filterId: filter.id }, { root: true })
                    .then(({ andFilter }) => dispatch('segmentFilters/createOr', {
                      filterId: filter.id,
                      andFilterId: andFilter.id
                    }, { root: true }))
                })
            }
          })
          .then(() => getters.plans[planId])
        }).catch(err => { throw err })
    },

    load ({ dispatch, commit }, { planId }) {
      return dispatch('pull', { planId })
        .then(() => commit('use', { planId }))
    },

    store ({ dispatch, commit, getters }, { planId }) {
      let createdPlan = null
      const pI = _findIndex(getters.plans, p => p.id === planId)
      const plan = getters.plans[pI]
      const segments = pl.$store.getters['membershipPlanSegments/segments']
      const tabs = pl.$store.getters['membershipPlanTabs/tabs']
      const filters = pl.$store.getters['segmentFilters/filters']

      return plServices.membershipPlans.store({ title: plan.title })
        .then(({ data: plan }) => Promise.map(getters.currentPlan.segments, ({ segmentId, position }) => {
          createdPlan = plan
          return dispatch('membershipPlanSegments/store', {
            planId: plan.id,
            segmentId,
            position
          }, { root: true })
            .then(({ data: segment }) => {
              const sI = _findIndex(segments, s => s.id === segmentId)
              return Promise.all([
                Promise.map(segments[sI].tabs, tRef => {
                  const tI = _findIndex(tabs, t => t.id === tRef.tabId)
                  return dispatch('membershipPlanTabs/store', {
                    segmentId: segment.id,
                    tab: tabs[tI]
                  }, { root: true })
                }),
                Promise.map(segments[sI].filters, fRef => {
                  const fI = _findIndex(filters, f => f.id === fRef.filterId)

                  return dispatch('segmentFilters/store', {
                    planId: plan.id,
                    segmentId: segment.id,
                    filter: filters[fI]
                  }, { root: true })
                })
              ])
            })
        }))
        .then(() => ({ plan: createdPlan }))
    },

    update ({ dispatch, commit, getters }, { planId }) {
      const pI = _findIndex(getters.plans, p => p.id === planId)
      const plan = getters.plans[pI]
      const segments = pl.$store.getters['membershipPlanSegments/segments']
      const tabs = pl.$store.getters['membershipPlanTabs/tabs']
      const filters = pl.$store.getters['segmentFilters/filters']

      return plServices.membershipPlans.update(plan)
        .then(() => Promise.map(plan.segments, sRef => {
          const sI = _findIndex(segments, s => s.id === sRef.segmentId)
          return dispatch('membershipPlanSegments/update', { planId: plan.id, segment: segments[sI], position: sRef.position }, { root: true })
            .then(({ data: segment }) => Promise.all([
              Promise.map(segments[sI].tabs, tRef => {
                const tI = _findIndex(tabs, t => t.id === tRef.tabId)
                const tab = tabs[tI]
                return dispatch('membershipPlanTabs/update', { segmentId: segment.id, tab, position: tRef.position }, { root: true })
              }),
              Promise.map(segments[sI].filters, fRef => {
                const fI = _findIndex(filters, f => f.id === fRef.filterId)
                const filter = filters[fI]
                return dispatch('segmentFilters/update', { segmentId: segment.id, filter, position: fRef.position }, { root: true })
              })
            ]))
        }))
    },

    create ({ commit, getters }) {
      const planId = uuid()
      commit('create', { planId })
      const index = _findIndex(getters.plans, p => p.id === planId)
      return Promise.resolve({ plan: getters.plans[index] })
    },

    delete ({ commit, getters }, { planId }) {
      const index = _findIndex(getters.plans, p => p.id === _toString(planId))

      if (getters.plans[index].saved) {
        return plServices.membershipPlans.delete({ planId })
          .then(() => commit('remove', { planId }))
      }

      commit('remove', { planId })
    },

    createSegment ({ commit, getters, dispatch }) {
      return Promise.all([
        dispatch('membershipPlanSegments/create', null, { root: true }),
        dispatch('membershipPlanTabs/create', null, { root: true }),
        dispatch('segmentFilters/create', null, { root: true })
      ]).then(([{ segment }, { tab }, { filter }]) => Promise.all([
        dispatch('membershipPlanSegments/insertTab', { segmentId: segment.id, tab }, { root: true }),
        dispatch('membershipPlanSegments/insertFilter', { segmentId: segment.id, filter }, { root: true }),
        dispatch('insertSegment', { segmentId: segment.id, position: getters.currentPlanSegmentCount })
      ]))
    },

    deleteSegment () {

    },

    removeSegment ({ commit, getters }, { segmentId, planId }) {
      commit('removeSegment', { segmentId, planId })
      commit('membershipPlanSegments/remove', { segmentId }, { root: true })
    },

    insertSegment ({ commit, getters }, { segmentId, position }) {
      commit('insertSegment', { segmentId, planId: getters.currentPlan.id, position })
    }
  }
}
