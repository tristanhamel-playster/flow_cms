import Vue from 'vue'
import Vuex from 'vuex'

import alert from './modules/alert'
import pageNav from './modules/page-nav'
import loading from './modules/loading'
import segmentFilters from './modules/segment-filters'
import memberships from './modules/memberships'
import membershipPlans from './modules/membership-plans'
import membershipPlanSegments from './modules/membership-plan-segments'
import membershipPlanTabs from './modules/membership-plan-tabs'
import membershipBlocks from './modules/membership-blocks'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    alert,
    pageNav,
    loading,
    segmentFilters,
    memberships,
    membershipPlans,
    membershipPlanSegments,
    membershipPlanTabs,
    membershipBlocks
  },
  plugins: [createPersistedState({
    'paths': [
      'pageNav'
    ]
  })]
})
