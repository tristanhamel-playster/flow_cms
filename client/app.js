import Vue from 'vue'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import store from './store'
import lodashHelper from './helpers/lodash'
import uuidHelper from './helpers/uuid'
import membershipPlansService from './services/membership-plans'
import membershipPlanTabsService from './services/membership-plan-tabs'
import membershipPlanSegmentsService from './services/membership-plan-segments'
import membershipBlocksService from './services/membership-blocks'
import membershipsService from './services/memberships'
import segmentFiltersService from './services/segment-filters'

// ====================================
// Load Vue Components
// ====================================

import draggable from 'vuedraggable'
import multiselect from 'vue-multiselect'
import AlertComponent from './components/modules/common/alert.vue'
import LayoutComponent from './components/layout.vue'
import MainNavComponent from './components/modules/navigation/main-nav.vue'
import PageNavComponent from './components/modules/navigation/page-nav.vue'
import MainHeaderComponent from './components/modules/common/main-header.vue'
import ContextMenu from './components/modules/common/context-menu.vue'
import ModalComponent from './components/modules/common/modal.vue'
import LoadingBarComponent from './components/modules/common/loading-bar.vue'
import TabBuilderComponent from './components/modules/segmentation/tab-builder.vue'
import SegmentFilterComponent from './components/modules/segmentation/segment-filter.vue'
import PreviewComponent from './components/modules/segmentation/preview.vue'
import MembershipPlansPageComponent from './components/pages/membership-plans.vue'
import MembershipBlocksPageComponent from './components/pages/membership-blocks.vue'
import SingleMembershipPlanPageComponent from './components/pages/single-membership-plan.vue'
import SingleMembershipBlockPageComponent from './components/pages/single-membership-block.vue'

// ====================================
// Initialize Services
// ====================================

window.plServices = {
  'memberships': membershipsService,
  'membershipPlans': membershipPlansService,
  'membershipPlanTabs': membershipPlanTabsService,
  'membershipPlanSegments': membershipPlanSegmentsService,
  'membershipBlocks': membershipBlocksService,
  'segmentFilters': segmentFiltersService
}

// ====================================
// Initialize Vue Modules
// ====================================

Vue.use(VueRouter)
Vue.use(lodashHelper)
Vue.use(uuidHelper)
Vue.use(VeeValidate, {
  classes: true
})

// ====================================
// Register Vue Components
// ====================================

Vue.component('modal', ModalComponent)
Vue.component('draggable', draggable)
Vue.component('multiselect', multiselect)
Vue.component('contextMenu', ContextMenu)
Vue.component('alertComponent', AlertComponent)
Vue.component('loadingBarComponent', LoadingBarComponent)
Vue.component('layoutComponent', LayoutComponent)
Vue.component('mainNavComponent', MainNavComponent)
Vue.component('pageNavComponent', PageNavComponent)
Vue.component('mainHeaderComponent', MainHeaderComponent)
Vue.component('tabBuilderComponent', TabBuilderComponent)
Vue.component('segmentFilterComponent', SegmentFilterComponent)
Vue.component('previewComponent', PreviewComponent)

// ====================================
// Setup Vue Routes
// ====================================

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/admin/', redirect: '/admin/management/membership-plans' },
    { path: '/admin/management', redirect: '/admin/management/membership-plans' },
    { path: '/admin/management/membership-plans', component: MembershipPlansPageComponent },
    { path: '/admin/management/membership-plans/:id', component: SingleMembershipPlanPageComponent },
    { path: '/admin/management/membership-blocks', component: MembershipBlocksPageComponent },
    { path: '/admin/management/membership-blocks/:id', component: SingleMembershipBlockPageComponent }
  ]
})

// ====================================
// Bootstrap Vue
// ====================================
window.Vue = Vue
window.pl = new Vue({
  el: '#root',
  store,
  router
})
