(function(FuseBox){FuseBox.$fuse$=FuseBox;
var __process_env__ = {"NODE_ENV":"development"};
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("app.js", function(exports, require, module, __filename, __dirname){

'use strict';

var _vue = require("vue/dist/vue.js");

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _veeValidate = require('vee-validate');

var _veeValidate2 = _interopRequireDefault(_veeValidate);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _lodash = require('./helpers/lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _uuid = require('./helpers/uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _membershipPlans = require('./services/membership-plans');

var _membershipPlans2 = _interopRequireDefault(_membershipPlans);

var _membershipPlanTabs = require('./services/membership-plan-tabs');

var _membershipPlanTabs2 = _interopRequireDefault(_membershipPlanTabs);

var _membershipPlanSegments = require('./services/membership-plan-segments');

var _membershipPlanSegments2 = _interopRequireDefault(_membershipPlanSegments);

var _membershipBlocks = require('./services/membership-blocks');

var _membershipBlocks2 = _interopRequireDefault(_membershipBlocks);

var _memberships = require('./services/memberships');

var _memberships2 = _interopRequireDefault(_memberships);

var _segmentFilters = require('./services/segment-filters');

var _segmentFilters2 = _interopRequireDefault(_segmentFilters);

var _vuedraggable = require('vuedraggable');

var _vuedraggable2 = _interopRequireDefault(_vuedraggable);

var _vueMultiselect = require('vue-multiselect');

var _vueMultiselect2 = _interopRequireDefault(_vueMultiselect);

var _alert = require('./components/modules/common/alert.vue');

var _alert2 = _interopRequireDefault(_alert);

var _layout = require('./components/layout.vue');

var _layout2 = _interopRequireDefault(_layout);

var _mainNav = require('./components/modules/navigation/main-nav.vue');

var _mainNav2 = _interopRequireDefault(_mainNav);

var _pageNav = require('./components/modules/navigation/page-nav.vue');

var _pageNav2 = _interopRequireDefault(_pageNav);

var _mainHeader = require('./components/modules/common/main-header.vue');

var _mainHeader2 = _interopRequireDefault(_mainHeader);

var _contextMenu = require('./components/modules/common/context-menu.vue');

var _contextMenu2 = _interopRequireDefault(_contextMenu);

var _modal = require('./components/modules/common/modal.vue');

var _modal2 = _interopRequireDefault(_modal);

var _loadingBar = require('./components/modules/common/loading-bar.vue');

var _loadingBar2 = _interopRequireDefault(_loadingBar);

var _tabBuilder = require('./components/modules/segmentation/tab-builder.vue');

var _tabBuilder2 = _interopRequireDefault(_tabBuilder);

var _segmentFilter = require('./components/modules/segmentation/segment-filter.vue');

var _segmentFilter2 = _interopRequireDefault(_segmentFilter);

var _preview = require('./components/modules/segmentation/preview.vue');

var _preview2 = _interopRequireDefault(_preview);

var _membershipPlans3 = require('./components/pages/membership-plans.vue');

var _membershipPlans4 = _interopRequireDefault(_membershipPlans3);

var _membershipBlocks3 = require('./components/pages/membership-blocks.vue');

var _membershipBlocks4 = _interopRequireDefault(_membershipBlocks3);

var _singleMembershipPlan = require('./components/pages/single-membership-plan.vue');

var _singleMembershipPlan2 = _interopRequireDefault(_singleMembershipPlan);

var _singleMembershipBlock = require('./components/pages/single-membership-block.vue');

var _singleMembershipBlock2 = _interopRequireDefault(_singleMembershipBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.plServices = {
  'memberships': _memberships2.default,
  'membershipPlans': _membershipPlans2.default,
  'membershipPlanTabs': _membershipPlanTabs2.default,
  'membershipPlanSegments': _membershipPlanSegments2.default,
  'membershipBlocks': _membershipBlocks2.default,
  'segmentFilters': _segmentFilters2.default
};

_vue2.default.use(_vueRouter2.default);
_vue2.default.use(_lodash2.default);
_vue2.default.use(_uuid2.default);
_vue2.default.use(_veeValidate2.default, {
  classes: true
});

_vue2.default.component('modal', _modal2.default);
_vue2.default.component('draggable', _vuedraggable2.default);
_vue2.default.component('multiselect', _vueMultiselect2.default);
_vue2.default.component('contextMenu', _contextMenu2.default);
_vue2.default.component('alertComponent', _alert2.default);
_vue2.default.component('loadingBarComponent', _loadingBar2.default);
_vue2.default.component('layoutComponent', _layout2.default);
_vue2.default.component('mainNavComponent', _mainNav2.default);
_vue2.default.component('pageNavComponent', _pageNav2.default);
_vue2.default.component('mainHeaderComponent', _mainHeader2.default);
_vue2.default.component('tabBuilderComponent', _tabBuilder2.default);
_vue2.default.component('segmentFilterComponent', _segmentFilter2.default);
_vue2.default.component('previewComponent', _preview2.default);

var router = new _vueRouter2.default({
  mode: 'history',
  routes: [{ path: '/admin/', redirect: '/admin/management/membership-plans' }, { path: '/admin/management', redirect: '/admin/management/membership-plans' }, { path: '/admin/management/membership-plans', component: _membershipPlans4.default }, { path: '/admin/management/membership-plans/:id', component: _singleMembershipPlan2.default }, { path: '/admin/management/membership-blocks', component: _membershipBlocks4.default }, { path: '/admin/management/membership-blocks/:id', component: _singleMembershipBlock2.default }]
});

window.Vue = _vue2.default;
window.pl = new _vue2.default({
  el: '#root',
  store: _store2.default,
  router: router
});
});
___scope___.file("store/index.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require("vue/dist/vue.js");

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _alert = require('./modules/alert');

var _alert2 = _interopRequireDefault(_alert);

var _pageNav = require('./modules/page-nav');

var _pageNav2 = _interopRequireDefault(_pageNav);

var _loading = require('./modules/loading');

var _loading2 = _interopRequireDefault(_loading);

var _segmentFilters = require('./modules/segment-filters');

var _segmentFilters2 = _interopRequireDefault(_segmentFilters);

var _memberships = require('./modules/memberships');

var _memberships2 = _interopRequireDefault(_memberships);

var _membershipPlans = require('./modules/membership-plans');

var _membershipPlans2 = _interopRequireDefault(_membershipPlans);

var _membershipPlanSegments = require('./modules/membership-plan-segments');

var _membershipPlanSegments2 = _interopRequireDefault(_membershipPlanSegments);

var _membershipPlanTabs = require('./modules/membership-plan-tabs');

var _membershipPlanTabs2 = _interopRequireDefault(_membershipPlanTabs);

var _membershipBlocks = require('./modules/membership-blocks');

var _membershipBlocks2 = _interopRequireDefault(_membershipBlocks);

var _vuexPersistedstate = require('vuex-persistedstate');

var _vuexPersistedstate2 = _interopRequireDefault(_vuexPersistedstate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

exports.default = new _vuex2.default.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    alert: _alert2.default,
    pageNav: _pageNav2.default,
    loading: _loading2.default,
    segmentFilters: _segmentFilters2.default,
    memberships: _memberships2.default,
    membershipPlans: _membershipPlans2.default,
    membershipPlanSegments: _membershipPlanSegments2.default,
    membershipPlanTabs: _membershipPlanTabs2.default,
    membershipBlocks: _membershipBlocks2.default
  },
  plugins: [(0, _vuexPersistedstate2.default)({
    'paths': ['pageNav']
  })]
});
});
___scope___.file("store/modules/alert.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  state: {
    shown: false,
    style: 'green',
    icon: 'check',
    msg: ''
  },
  getters: {},
  mutations: {
    alertChange: function alertChange(state, opts) {
      state.shown = opts.shown === true;
      state.style = opts.style || 'green';
      state.icon = opts.icon || 'check';
      state.msg = opts.msg || '';
    }
  },
  actions: {
    alert: function alert(_ref, opts) {
      var commit = _ref.commit,
          dispatch = _ref.dispatch;

      opts.shown = true;
      commit('alertChange', opts);
      dispatch('alertDismiss');
    },

    alertDismiss: (0, _debounce2.default)(function (_ref2) {
      var commit = _ref2.commit;

      var opts = { shown: false };
      commit('alertChange', opts);
    }, 6000)
  }
};
});
___scope___.file("store/modules/page-nav.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isPlainObject = require('lodash/isPlainObject');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespaced: true,
  state: {
    empty: true,
    title: '',
    description: '',
    navigation: []
  },
  mutations: {
    reset: function reset(state) {
      state.empty = true;
      state.title = '';
      state.description = '';
      state.navigation = [];
    },
    updateTitle: function updateTitle(state, value) {
      state.title = value;
      state.empty = state.empty && !(0, _isEmpty2.default)(value) ? false : state.empty;
    },
    updateDescription: function updateDescription(state, value) {
      state.description = value;
      state.empty = state.empty && !(0, _isEmpty2.default)(value) ? false : state.empty;
    },
    updateNavigation: function updateNavigation(state, value) {
      if (!(0, _isArray2.default)(value)) {
        throw new Error('Navigation format is not valid!');
      }

      for (var i = 0; i < value.length; i++) {
        if (!(0, _isString2.default)(value[i].label) || !(0, _isString2.default)(value[i].href)) {
          throw new Error('Navigation format is not valid!');
        }
      }

      state.navigation = value;
      state.empty = state.empty && !(0, _isEmpty2.default)(value) ? false : state.empty;
    }
  }
};
});
___scope___.file("store/modules/loading.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  state: {
    shown: false
  },
  mutations: {
    showLoadingBar: function showLoadingBar(state) {
      state.shown = true;
    },
    hideLoadingBar: function hideLoadingBar(state) {
      state.shown = false;
    }
  },
  actions: {
    showLoadingBar: function showLoadingBar(_ref) {
      var commit = _ref.commit;
      commit('showLoadingBar');
    },
    hideLoadingBar: function hideLoadingBar(_ref2) {
      var commit = _ref2.commit;
      commit('hideLoadingBar');
    }
  }
};
});
___scope___.file("store/modules/segment-filters.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _isUndefined2 = require('lodash/isUndefined');

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _findIndex2 = require('lodash/findIndex');

var _findIndex3 = _interopRequireDefault(_findIndex2);

var _toString2 = require('lodash/toString');

var _toString3 = _interopRequireDefault(_toString2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespaced: true,
  state: {
    filters: [],
    inclusions: [{ 'value': true, 'label': 'Include' }, { 'value': false, 'label': 'Exclude' }],
    keys: [{ 'value': 1, 'label': 'Country' }],
    operations: [{ 'value': 'exact', 'label': 'Exact match' }, { 'value': 'regex', 'label': 'Matching regex' }, { 'value': 'begin', 'label': 'Begins with' }, { 'value': 'end', 'label': 'End with' }, { 'value': 'contain', 'label': 'Contains' }, { 'value': 'in', 'label': 'In' }, { 'value': 'lower', 'label': 'Lower' }, { 'value': 'lower-equal', 'label': 'Lower or equal' }, { 'value': 'greater', 'label': 'Greater' }, { 'value': 'greater-equal', 'label': 'Greater or equal' }]
  },
  getters: {
    filters: function filters(state) {
      return state.filters;
    }
  },
  mutations: {
    set: function set(state, _ref) {
      var filter = _ref.filter,
          filters = _ref.filters;

      var setFilter = function setFilter(filter) {
        var index = (0, _findIndex3.default)(state.filters, function (f) {
          return f.id === filter.id;
        });

        var newFilter = {
          id: filter.id,
          and: [],
          saved: true,
          modified: false
        };

        if (index === -1) {
          state.filters[index].push(newFilter);
        } else {
          Vue.set(state.filters, index, newFilter);
        }
      };

      if (!(0, _isUndefined3.default)(filters)) {
        return filters.forEach(function (f) {
          return setFilter(f);
        });
      }

      setFilter(filter);
    },
    create: function create(state, _ref2) {
      var filterId = _ref2.filterId;

      state.filters.push({
        id: filterId,
        and: [],
        saved: true,
        modified: false
      });
    },
    setAnd: function setAnd(state, _ref3) {
      var filterId = _ref3.filterId,
          andFilter = _ref3.andFilter,
          andFilters = _ref3.andFilters;

      var fI = (0, _findIndex3.default)(state.filters, function (f) {
        return f.id === filterId;
      });
      var setFilter = function setFilter(andFilter) {
        var aI = (0, _findIndex3.default)(state.filters[fI].and, function (aF) {
          return aF.id === andFilter.id;
        });

        var newFilter = {
          id: andFilter.id,
          or: [],
          saved: true,
          modified: false
        };

        if (aI === -1) {
          state.filters[fI].and.push(newFilter);
        } else {
          Vue.set(state.filters[fI].and, aI, newFilter);
        }
      };

      if (!(0, _isUndefined3.default)(andFilters)) {
        return andFilters.forEach(function (andFilter) {
          return setFilter(andFilter);
        });
      }

      setFilter(andFilter);
    },
    createAnd: function createAnd(state, _ref4) {
      var filterId = _ref4.filterId,
          andFilterId = _ref4.andFilterId;

      var fI = (0, _findIndex3.default)(state.filters, function (f) {
        return f.id === filterId;
      });

      state.filters[fI].and.push({
        id: andFilterId,
        or: [],
        saved: false,
        modified: false
      });
    },
    deleteAnd: function deleteAnd(state, _ref5) {
      var filterId = _ref5.filterId,
          andFilterId = _ref5.andFilterId;

      var fI = (0, _findIndex3.default)(state.filters, function (f) {
        return f.id === filterId;
      });
      var afI = (0, _findIndex3.default)(state.filters[fI].and, function (af) {
        return af.id === andFilterId;
      });

      state.filters[fI].and.splice(afI, 1);
    },
    setOr: function setOr(state, _ref6) {
      var filterId = _ref6.filterId,
          andFilterId = _ref6.andFilterId,
          orFilter = _ref6.orFilter,
          orFilters = _ref6.orFilters;

      var fI = (0, _findIndex3.default)(state.filters, function (f) {
        return f.id === filterId;
      });
      var afI = (0, _findIndex3.default)(state.filters[fI].and, function (aF) {
        return aF.id === andFilterId;
      });

      var setFilter = function setFilter(orFilter) {
        var ofI = (0, _findIndex3.default)(state.filters[fI].and[afI].or, function (f) {
          return f.id === orFilter.id;
        });

        var newFilter = {
          id: orFilter.id,
          include: true,
          key: orFilter.filter_type_id,
          operation: orFilter.value.op,
          value: orFilter.value.value,
          saved: false,
          modified: false
        };

        if (ofI === -1) {
          state.filters[fI].and[afI].or.push(newFilter);
        } else {
          Vue.set(state.filters[fI].and[afI].or, ofI, newFilter);
        }
      };

      if (!(0, _isUndefined3.default)(orFilters)) {
        return orFilters.forEach(function (orFilter) {
          return setFilter(orFilter);
        });
      }

      setFilter(orFilter);
    },
    createOr: function createOr(state, _ref7) {
      var filterId = _ref7.filterId,
          andFilterId = _ref7.andFilterId,
          orFilterId = _ref7.orFilterId;

      var fI = (0, _findIndex3.default)(state.filters, function (f) {
        return f.id === filterId;
      });
      var afI = (0, _findIndex3.default)(state.filters[fI].and, function (af) {
        return af.id === andFilterId;
      });

      state.filters[fI].and[afI].or.push({
        id: orFilterId,
        include: state.inclusions[0].value,
        key: state.keys[0].value,
        operation: state.operations[0].value,
        value: '',
        saved: false,
        modified: false
      });
    },
    deleteOr: function deleteOr(state, _ref8) {
      var filterId = _ref8.filterId,
          andFilterId = _ref8.andFilterId,
          orFilterId = _ref8.orFilterId;

      var fI = (0, _findIndex3.default)(state.filters, function (f) {
        return f.id === filterId;
      });
      var afI = (0, _findIndex3.default)(state.filters[fI].and, function (aF) {
        return aF.id === andFilterId;
      });
      var ofI = (0, _findIndex3.default)(state.filters[fI].and[afI].or, function (oF) {
        return oF.id === orFilterId;
      });

      state.filters[fI].and[afI].or.splice(ofI, 1);
    },
    updateFilterOperation: function updateFilterOperation(state, _ref9) {
      var filterId = _ref9.filterId,
          andFilterId = _ref9.andFilterId,
          orFilterId = _ref9.orFilterId,
          operation = _ref9.operation,
          _ref9$modified = _ref9.modified,
          modified = _ref9$modified === undefined ? true : _ref9$modified;

      var fI = (0, _findIndex3.default)(state.filters, function (f) {
        return f.id === (0, _toString3.default)(filterId);
      });
      var afI = (0, _findIndex3.default)(state.filters[fI].and, function (aF) {
        return aF.id === (0, _toString3.default)(andFilterId);
      });
      var ofI = (0, _findIndex3.default)(state.filters[fI].and[afI].or, function (oF) {
        return oF.id === (0, _toString3.default)(orFilterId);
      });

      state.filters[fI].and[afI].or[ofI].modified = modified;
      state.filters[fI].and[afI].or[ofI].operation = operation;
    },
    updateFilterKey: function updateFilterKey(state, _ref10) {
      var filterId = _ref10.filterId,
          andFilterId = _ref10.andFilterId,
          orFilterId = _ref10.orFilterId,
          key = _ref10.key,
          _ref10$modified = _ref10.modified,
          modified = _ref10$modified === undefined ? true : _ref10$modified;

      var fI = (0, _findIndex3.default)(state.filters, function (f) {
        return f.id === filterId;
      });
      var afI = (0, _findIndex3.default)(state.filters[fI].and, function (aF) {
        return aF.id === andFilterId;
      });
      var ofI = (0, _findIndex3.default)(state.filters[fI].and[afI].or, function (oF) {
        return oF.id === orFilterId;
      });

      state.filters[fI].and[afI].or[ofI].modified = modified;
      state.filters[fI].and[afI].or[ofI].key = key;
    },
    updateFilterValue: function updateFilterValue(state, _ref11) {
      var filterId = _ref11.filterId,
          andFilterId = _ref11.andFilterId,
          orFilterId = _ref11.orFilterId,
          value = _ref11.value,
          _ref11$modified = _ref11.modified,
          modified = _ref11$modified === undefined ? true : _ref11$modified;

      var fI = (0, _findIndex3.default)(state.filters, function (f) {
        return f.id === filterId;
      });
      var afI = (0, _findIndex3.default)(state.filters[fI].and, function (aF) {
        return aF.id === andFilterId;
      });
      var ofI = (0, _findIndex3.default)(state.filters[fI].and[afI].or, function (oF) {
        return oF.id === orFilterId;
      });

      state.filters[fI].and[afI].or[ofI].modified = modified;
      state.filters[fI].and[afI].or[ofI].value = value;
    },
    updateFilterInclusion: function updateFilterInclusion(state, _ref12) {
      var filterId = _ref12.filterId,
          andFilterId = _ref12.andFilterId,
          orFilterId = _ref12.orFilterId,
          include = _ref12.include,
          _ref12$modified = _ref12.modified,
          modified = _ref12$modified === undefined ? true : _ref12$modified;

      var fI = (0, _findIndex3.default)(state.filters, function (f) {
        return f.id === filterId;
      });
      var afI = (0, _findIndex3.default)(state.filters[fI].and, function (aF) {
        return aF.id === andFilterId;
      });
      var ofI = (0, _findIndex3.default)(state.filters[fI].and[afI].or, function (oF) {
        return oF.id === orFilterId;
      });

      state.filters[fI].and[afI].or[ofI].modified = modified;
      state.filters[fI].and[afI].or[ofI].include = include;
    }
  },
  actions: {
    set: function set(_ref13, _ref14) {
      var commit = _ref13.commit,
          getters = _ref13.getters;
      var filters = _ref14.filters;
    },
    create: function create(_ref15) {
      var commit = _ref15.commit,
          getters = _ref15.getters;

      var filterId = (0, _v2.default)();
      commit('create', { filterId: filterId });
      var index = (0, _findIndex3.default)(getters.filters, function (f) {
        return f.id === filterId;
      });
      return Promise.resolve({ filter: getters.filters[index] });
    },
    delete: function _delete(_ref16, _ref17) {
      var commit = _ref16.commit,
          getters = _ref16.getters;
      var filterId = _ref17.filterId;

      commit('delete', { filterId: filterId });
    },
    store: function store(_ref18, _ref19) {
      var commit = _ref18.commit,
          getters = _ref18.getters;
      var segmentId = _ref19.segmentId,
          filter = _ref19.filter;

      return plServices.segmentFilters.store({ segmentId: segmentId, filter: filter });
    },
    update: function update(_ref20, _ref21) {
      var dispatch = _ref20.dispatch,
          commit = _ref20.commit,
          getters = _ref20.getters;
      var segmentId = _ref21.segmentId,
          filter = _ref21.filter;

      if (!filter.saved) {
        return dispatch('store', { segmentId: segmentId, filter: filter });
      }
      return plServices.segmentFilters.update({ segmentId: segmentId, filter: filter });
    },
    createAnd: function createAnd(_ref22, _ref23) {
      var commit = _ref22.commit,
          getters = _ref22.getters;
      var filterId = _ref23.filterId;

      var andFilterId = (0, _v2.default)();
      var fI = (0, _findIndex3.default)(getters.filters, function (f) {
        return f.id === filterId;
      });
      commit('createAnd', { filterId: filterId, andFilterId: andFilterId });
      var index = (0, _findIndex3.default)(getters.filters[fI].and, function (aF) {
        return aF.id === andFilterId;
      });
      return Promise.resolve({ andFilter: getters.filters[fI].and[index] });
    },
    deleteAnd: function deleteAnd(_ref24, _ref25) {
      var commit = _ref24.commit,
          getters = _ref24.getters;
      var filterId = _ref25.filterId,
          andFilterId = _ref25.andFilterId;

      commit('deleteAnd', { andFilterId: andFilterId });
    },
    createOr: function createOr(_ref26, _ref27) {
      var commit = _ref26.commit,
          getters = _ref26.getters;
      var filterId = _ref27.filterId,
          andFilterId = _ref27.andFilterId;

      var orFilterId = (0, _v2.default)();
      var fI = (0, _findIndex3.default)(getters.filters, function (f) {
        return f.id === filterId;
      });
      var aI = (0, _findIndex3.default)(getters.filters[fI].and, function (f) {
        return f.id === andFilterId;
      });
      commit('createOr', { filterId: filterId, andFilterId: andFilterId, orFilterId: orFilterId });
      var oI = (0, _findIndex3.default)(getters.filters[fI].and[aI].or, function (f) {
        return f.id === orFilterId;
      });
      return Promise.resolve({ orFilter: getters.filters[fI].and[aI].or[oI] });
    },
    setOr: function setOr(_ref28, _ref29) {
      var commit = _ref28.commit,
          getters = _ref28.getters;
      var filterId = _ref29.filterId,
          andFilterId = _ref29.andFilterId,
          orFilter = _ref29.orFilter,
          orFilters = _ref29.orFilters;

      commit('setOr', { filterId: filterId, andFilterId: andFilterId, orFilter: orFilter, orFilters: orFilters });
    },
    deleteOr: function deleteOr(_ref30, _ref31) {
      var commit = _ref30.commit,
          getters = _ref30.getters;
      var filterId = _ref31.filterId,
          andFilterId = _ref31.andFilterId,
          orFilterId = _ref31.orFilterId;

      commit('deleteOr', { andFilterId: andFilterId, orFilterId: orFilterId });
    }
  }
};
});
___scope___.file("store/modules/memberships.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isUndefined2 = require('lodash/isUndefined');

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _findIndex2 = require('lodash/findIndex');

var _findIndex3 = _interopRequireDefault(_findIndex2);

var _toString2 = require('lodash/toString');

var _toString3 = _interopRequireDefault(_toString2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespaced: true,
  state: {
    memberships: []
  },
  getters: {
    memberships: function memberships(state) {
      return state.memberships;
    }
  },
  mutations: {
    set: function set(state, _ref) {
      var memberships = _ref.memberships,
          membership = _ref.membership;


      var setMembership = function setMembership(membership) {
        var index = (0, _findIndex3.default)(state.memberships, function (m) {
          return m.id === (0, _toString3.default)(membership.id);
        });
        if (index === -1) {
          state.memberships.push(membership);
        } else {
          state.memberships[index] = membership;
        }
      };

      if (!(0, _isUndefined3.default)(memberships)) {
        return memberships.forEach(function (membership) {
          return setMembership(membership);
        });
      }

      setMembership(membership);
    }
  },
  actions: {
    pull: function pull(_ref2, _ref3) {
      var commit = _ref2.commit;
      var params = _ref3.params;

      return plServices.memberships.getAll({ params: params }).then(function (_ref4) {
        var memberships = _ref4.data;
        return commit('set', { memberships: memberships });
      });
    }
  }
};
});
___scope___.file("store/modules/membership-plans.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _isPlainObject2 = require('lodash/isPlainObject');

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _orderBy2 = require('lodash/orderBy');

var _orderBy3 = _interopRequireDefault(_orderBy2);

var _findIndex2 = require('lodash/findIndex');

var _findIndex3 = _interopRequireDefault(_findIndex2);

var _isUndefined2 = require('lodash/isUndefined');

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _toString2 = require('lodash/toString');

var _toString3 = _interopRequireDefault(_toString2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespaced: true,
  state: {
    plans: [],
    currentPlanId: null
  },
  getters: {
    plans: function plans(state) {
      return state.plans;
    },
    currentPlanId: function currentPlanId(state) {
      return state.currentPlanId;
    },
    currentPlan: function currentPlan(state) {
      var index = (0, _findIndex3.default)(state.plans, function (p) {
        return p.id === state.currentPlanId;
      });
      return state.plans[index] || {};
    },
    isPreviewOpen: function isPreviewOpen(state, getters) {
      return getters.currentPlan.isPreviewOpen || false;
    },
    currentPlanSegmentCount: function currentPlanSegmentCount(state) {
      var index = (0, _findIndex3.default)(state.plans, function (p) {
        return p.id === state.currentPlanId;
      });
      if (!(0, _isPlainObject3.default)(state.plans[index])) {
        return 0;
      }
      return Object.keys(state.plans[index].segments).length;
    }
  },
  mutations: {
    order: function order(state) {
      state.plans = (0, _orderBy3.default)(state.plans, ['saved', 'id']);
    },
    set: function set(state, _ref) {
      var plans = _ref.plans,
          plan = _ref.plan;

      var setPlan = function setPlan(plan) {
        var index = (0, _findIndex3.default)(state.plans, function (p) {
          return p.id === (0, _toString3.default)(plan.id);
        });

        var newPlan = {
          id: (0, _toString3.default)(plan.id),
          title: plan.name,
          segments: [],
          saved: true,
          modified: false,
          isPreviewOpen: false,
          createAt: new Date(plan.created_at).getTime() / 1000,
          updatedAt: new Date(plan.updated_at).getTime() / 1000
        };

        if (index === -1) {
          state.plans.push(newPlan);
        } else {
          Vue.set(state.plans, index, newPlan);
        }
      };

      if (!(0, _isUndefined3.default)(plans)) {
        return plans.forEach(function (plan) {
          return setPlan(plan);
        });
      }

      setPlan(plan);
    },
    use: function use(state, _ref2) {
      var planId = _ref2.planId;
      state.currentPlanId = planId;
    },
    create: function create(state, _ref3) {
      var planId = _ref3.planId;

      state.plans.push({
        id: (0, _toString3.default)(planId),
        title: '',
        segments: [],
        saved: false,
        modified: false,
        isPreviewOpen: false,
        createdAt: Math.floor(Date.now() / 1000),
        updatedAt: Math.floor(Date.now() / 1000)
      });
    },
    remove: function remove(state, _ref4) {
      var planId = _ref4.planId;

      var index = (0, _findIndex3.default)(state.plans, function (p) {
        return p.id === (0, _toString3.default)(planId);
      });
      state.plans.splice(index, 1);
    },
    updateTitle: function updateTitle(state, _ref5) {
      var planId = _ref5.planId,
          title = _ref5.title;

      var index = (0, _findIndex3.default)(state.plans, function (p) {
        return p.id === planId;
      });
      state.plans[index].modified = true;
      state.plans[index].title = title;
    },
    insertSegment: function insertSegment(state, _ref6) {
      var segmentId = _ref6.segmentId,
          planId = _ref6.planId,
          _ref6$position = _ref6.position,
          position = _ref6$position === undefined ? 0 : _ref6$position;

      var id = (0, _v2.default)();
      var index = (0, _findIndex3.default)(state.plans, function (p) {
        return p.id === planId;
      });

      state.plans[index].modified = true;

      state.plans[index].segments.push({
        id: (0, _toString3.default)(id),
        segmentId: (0, _toString3.default)(segmentId),
        position: position
      });
    },
    removeSegment: function removeSegment(state, _ref7) {
      var segmentId = _ref7.segmentId,
          planId = _ref7.planId;

      var pI = (0, _findIndex3.default)(state.plans, function (p) {
        return p.id === planId;
      });
      var sI = (0, _findIndex3.default)(state.plans[planId].segments, function (s) {
        return s.segmentId === segmentId;
      });

      state.plans[pI].modified = true;

      state.plans[pI].segments.splice(sI, 1);
    },
    openPreview: function openPreview(state) {
      var index = (0, _findIndex3.default)(state.plans, function (p) {
        return p.id === state.currentPlanId;
      });
      state.plans[index].isPreviewOpen = true;
    },
    closePreview: function closePreview(state) {
      var index = (0, _findIndex3.default)(state.plans, function (p) {
        return p.id === state.currentPlanId;
      });
      state.plans[index].isPreviewOpen = false;
    },
    togglePreview: function togglePreview(state) {
      var index = (0, _findIndex3.default)(state.plans, function (p) {
        return p.id === state.currentPlanId;
      });
      var isOpen = state.plans[index].isPreviewOpen;
      state.plans[index].isPreviewOpen = !isOpen;
    }
  },
  actions: {
    use: function use(_ref8, _ref9) {
      var commit = _ref8.commit;
      var planId = _ref9.planId;

      commit('use', { planId: planId });
    },
    get: function get(_ref10, _ref11) {
      var dispatch = _ref10.dispatch,
          getters = _ref10.getters;
      var planId = _ref11.planId;


      return plServices.membershipPlans.get({ planId: planId }).then(function (_ref12) {
        var data = _ref12.data;
        return { plan: data };
      }).catch(function () {
        throw new Error('Plan not found!');
      });
    },
    pull: function pull(_ref13) {
      var dispatch = _ref13.dispatch,
          commit = _ref13.commit,
          getters = _ref13.getters;

      var _ref14 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          planId = _ref14.planId;

      if ((0, _isUndefined3.default)(planId)) {
        return plServices.membershipPlans.getAll().then(function (_ref15) {
          var plans = _ref15.data;
          return commit('set', { plans: plans });
        }).then(function () {
          return commit('order');
        });
      }

      return dispatch('get', { planId: planId }).then(function (_ref16) {
        var plan = _ref16.plan;

        commit('set', { plan: plan });

        return _bluebird2.default.map(plan.segments, function (segment, index) {
          commit('insertSegment', { segmentId: segment.id, planId: planId });
          dispatch('membershipPlanSegments/set', { segment: segment }, { root: true });

          segment.tabs.forEach(function (tab) {
            dispatch('membershipPlanSegments/insertTab', { segmentId: segment.id, tab: tab }, { root: true });
            dispatch('membershipPlanTabs/set', { tab: tab }, { root: true });
            tab.blocks.forEach(function (block) {
              dispatch('membershipPlanTabs/insertBlock', { tabId: tab.id, blockId: block.id }, { root: true });
              dispatch('membershipBlocks/set', { block: block }, { root: true });
            });
          });

          if (segment.filters.length > 0) {
            return dispatch('segmentFilters/create', null, { root: true }).then(function (_ref17) {
              var filter = _ref17.filter;

              dispatch('membershipPlanSegments/insertFilter', { segmentId: segment.id, filter: filter }, { root: true });
              return dispatch('segmentFilters/createAnd', { filterId: filter.id }, { root: true }).then(function (_ref18) {
                var andFilter = _ref18.andFilter;
                return dispatch('segmentFilters/setOr', {
                  filterId: filter.id,
                  andFilterId: andFilter.id,
                  orFilters: segment.filters
                }, { root: true });
              });
            });
          } else if (segment.filters.length === 0 && index > 0) {
            return dispatch('segmentFilters/create', null, { root: true }).then(function (_ref19) {
              var filter = _ref19.filter;

              dispatch('membershipPlanSegments/insertFilter', { segmentId: segment.id, filter: filter }, { root: true });
              return dispatch('segmentFilters/createAnd', { filterId: filter.id }, { root: true }).then(function (_ref20) {
                var andFilter = _ref20.andFilter;
                return dispatch('segmentFilters/createOr', {
                  filterId: filter.id,
                  andFilterId: andFilter.id
                }, { root: true });
              });
            });
          }
        }).then(function () {
          return getters.plans[planId];
        });
      }).catch(function (err) {
        throw err;
      });
    },
    load: function load(_ref21, _ref22) {
      var dispatch = _ref21.dispatch,
          commit = _ref21.commit;
      var planId = _ref22.planId;

      return dispatch('pull', { planId: planId }).then(function () {
        return commit('use', { planId: planId });
      });
    },
    store: function store(_ref23, _ref24) {
      var dispatch = _ref23.dispatch,
          commit = _ref23.commit,
          getters = _ref23.getters;
      var planId = _ref24.planId;

      var createdPlan = null;
      var pI = (0, _findIndex3.default)(getters.plans, function (p) {
        return p.id === planId;
      });
      var plan = getters.plans[pI];
      var segments = pl.$store.getters['membershipPlanSegments/segments'];
      var tabs = pl.$store.getters['membershipPlanTabs/tabs'];
      var filters = pl.$store.getters['segmentFilters/filters'];

      return plServices.membershipPlans.store({ title: plan.title }).then(function (_ref25) {
        var plan = _ref25.data;
        return _bluebird2.default.map(getters.currentPlan.segments, function (_ref26) {
          var segmentId = _ref26.segmentId,
              position = _ref26.position;

          createdPlan = plan;
          return dispatch('membershipPlanSegments/store', {
            planId: plan.id,
            segmentId: segmentId,
            position: position
          }, { root: true }).then(function (_ref27) {
            var segment = _ref27.data;

            var sI = (0, _findIndex3.default)(segments, function (s) {
              return s.id === segmentId;
            });
            return _bluebird2.default.all([_bluebird2.default.map(segments[sI].tabs, function (tRef) {
              var tI = (0, _findIndex3.default)(tabs, function (t) {
                return t.id === tRef.tabId;
              });
              return dispatch('membershipPlanTabs/store', {
                segmentId: segment.id,
                tab: tabs[tI]
              }, { root: true });
            }), _bluebird2.default.map(segments[sI].filters, function (fRef) {
              var fI = (0, _findIndex3.default)(filters, function (f) {
                return f.id === fRef.filterId;
              });

              return dispatch('segmentFilters/store', {
                planId: plan.id,
                segmentId: segment.id,
                filter: filters[fI]
              }, { root: true });
            })]);
          });
        });
      }).then(function () {
        return { plan: createdPlan };
      });
    },
    update: function update(_ref28, _ref29) {
      var dispatch = _ref28.dispatch,
          commit = _ref28.commit,
          getters = _ref28.getters;
      var planId = _ref29.planId;

      var pI = (0, _findIndex3.default)(getters.plans, function (p) {
        return p.id === planId;
      });
      var plan = getters.plans[pI];
      var segments = pl.$store.getters['membershipPlanSegments/segments'];
      var tabs = pl.$store.getters['membershipPlanTabs/tabs'];
      var filters = pl.$store.getters['segmentFilters/filters'];

      return plServices.membershipPlans.update(plan).then(function () {
        return _bluebird2.default.map(plan.segments, function (sRef) {
          var sI = (0, _findIndex3.default)(segments, function (s) {
            return s.id === sRef.segmentId;
          });
          return dispatch('membershipPlanSegments/update', { planId: plan.id, segment: segments[sI], position: sRef.position }, { root: true }).then(function (_ref30) {
            var segment = _ref30.data;
            return _bluebird2.default.all([_bluebird2.default.map(segments[sI].tabs, function (tRef) {
              var tI = (0, _findIndex3.default)(tabs, function (t) {
                return t.id === tRef.tabId;
              });
              var tab = tabs[tI];
              return dispatch('membershipPlanTabs/update', { segmentId: segment.id, tab: tab, position: tRef.position }, { root: true });
            }), _bluebird2.default.map(segments[sI].filters, function (fRef) {
              var fI = (0, _findIndex3.default)(filters, function (f) {
                return f.id === fRef.filterId;
              });
              var filter = filters[fI];
              return dispatch('segmentFilters/update', { segmentId: segment.id, filter: filter, position: fRef.position }, { root: true });
            })]);
          });
        });
      });
    },
    create: function create(_ref31) {
      var commit = _ref31.commit,
          getters = _ref31.getters;

      var planId = (0, _v2.default)();
      commit('create', { planId: planId });
      var index = (0, _findIndex3.default)(getters.plans, function (p) {
        return p.id === planId;
      });
      return _bluebird2.default.resolve({ plan: getters.plans[index] });
    },
    delete: function _delete(_ref32, _ref33) {
      var commit = _ref32.commit,
          getters = _ref32.getters;
      var planId = _ref33.planId;

      var index = (0, _findIndex3.default)(getters.plans, function (p) {
        return p.id === (0, _toString3.default)(planId);
      });

      if (getters.plans[index].saved) {
        return plServices.membershipPlans.delete({ planId: planId }).then(function () {
          return commit('remove', { planId: planId });
        });
      }

      commit('remove', { planId: planId });
    },
    createSegment: function createSegment(_ref34) {
      var commit = _ref34.commit,
          getters = _ref34.getters,
          dispatch = _ref34.dispatch;

      return _bluebird2.default.all([dispatch('membershipPlanSegments/create', null, { root: true }), dispatch('membershipPlanTabs/create', null, { root: true }), dispatch('segmentFilters/create', null, { root: true })]).then(function (_ref35) {
        var _ref36 = _slicedToArray(_ref35, 3),
            segment = _ref36[0].segment,
            tab = _ref36[1].tab,
            filter = _ref36[2].filter;

        return _bluebird2.default.all([dispatch('membershipPlanSegments/insertTab', { segmentId: segment.id, tab: tab }, { root: true }), dispatch('membershipPlanSegments/insertFilter', { segmentId: segment.id, filter: filter }, { root: true }), dispatch('insertSegment', { segmentId: segment.id, position: getters.currentPlanSegmentCount })]);
      });
    },
    deleteSegment: function deleteSegment() {},
    removeSegment: function removeSegment(_ref37, _ref38) {
      var commit = _ref37.commit,
          getters = _ref37.getters;
      var segmentId = _ref38.segmentId,
          planId = _ref38.planId;

      commit('removeSegment', { segmentId: segmentId, planId: planId });
      commit('membershipPlanSegments/remove', { segmentId: segmentId }, { root: true });
    },
    insertSegment: function insertSegment(_ref39, _ref40) {
      var commit = _ref39.commit,
          getters = _ref39.getters;
      var segmentId = _ref40.segmentId,
          position = _ref40.position;

      commit('insertSegment', { segmentId: segmentId, planId: getters.currentPlan.id, position: position });
    }
  }
};
});
___scope___.file("store/modules/membership-plan-segments.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _isUndefined2 = require('lodash/isUndefined');

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _findIndex2 = require('lodash/findIndex');

var _findIndex3 = _interopRequireDefault(_findIndex2);

var _toString2 = require('lodash/toString');

var _toString3 = _interopRequireDefault(_toString2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespaced: true,
  state: {
    segments: []
  },
  getters: {
    segments: function segments(state) {
      return state.segments;
    }
  },
  mutations: {
    set: function set(state, _ref) {
      var segments = _ref.segments,
          segment = _ref.segment;

      var setSegment = function setSegment(segment) {
        var index = (0, _findIndex3.default)(state.segments, function (s) {
          return s.id === (0, _toString3.default)(segment.id);
        });

        var newSegment = {
          id: (0, _toString3.default)(segment.id),
          title: segment.title || '',
          tabs: [],
          filters: [],
          modified: false,
          saved: true,
          createAt: new Date(segment.created_at).getTime() / 1000,
          updatedAt: new Date(segment.updated_at).getTime() / 1000
        };

        if (index === -1) {
          state.segments.push(newSegment);
        } else {
          Vue.set(state.segments, index, newSegment);
        }
      };

      if (!(0, _isUndefined3.default)(segments)) {
        return segments.forEach(function (segment) {
          return setSegment(segment);
        });
      }

      setSegment(segment);
    },
    create: function create(state, _ref2) {
      var segmentId = _ref2.segmentId;

      state.segments.push({
        id: (0, _toString3.default)(segmentId),
        title: '',
        tabs: [],
        filters: [],
        modified: false,
        saved: false,
        createdAt: Math.floor(Date.now() / 1000),
        updatedAt: Math.floor(Date.now() / 1000)
      });
    },
    delete: function _delete(state, _ref3) {
      var segmentId = _ref3.segmentId;

      var index = (0, _findIndex3.default)(state.segments, function (s) {
        return s.id = segmentId;
      });

      state.segments.splice(index, 1);
    },
    reset: function reset(state) {
      state.segments = [];
    },
    updateTitle: function updateTitle(state, _ref4) {
      var segmentId = _ref4.segmentId,
          title = _ref4.title;
    },
    insertTab: function insertTab(state, _ref5) {
      var segmentId = _ref5.segmentId,
          tab = _ref5.tab;

      var id = (0, _v2.default)();
      var index = (0, _findIndex3.default)(state.segments, function (s) {
        return s.id === (0, _toString3.default)(segmentId);
      });

      state.segments[index].modified = true;
      state.segments[index].tabs.push({
        id: (0, _toString3.default)(id),
        tabId: (0, _toString3.default)(tab.id)
      });
    },
    removeTab: function removeTab(state, _ref6) {
      var segmentId = _ref6.segmentId,
          tabId = _ref6.tabId;

      var sI = (0, _findIndex3.default)(state.segments, function (s) {
        return s.id === (0, _toString3.default)(segmentId);
      });
      var tI = (0, _findIndex3.default)(state.segments[sI].tabs, function (t) {
        return t.tabId === (0, _toString3.default)(tabId);
      });

      state.segments[sI].modified = true;
      state.segments[sI].tabs.splice(tI, 1);
    },
    insertFilter: function insertFilter(state, _ref7) {
      var segmentId = _ref7.segmentId,
          filter = _ref7.filter;

      var id = (0, _v2.default)();
      var index = (0, _findIndex3.default)(state.segments, function (s) {
        return s.id === (0, _toString3.default)(segmentId);
      });

      state.segments[index].modified = true;
      state.segments[index].filters.push({
        id: (0, _toString3.default)(id),
        filterId: (0, _toString3.default)(filter.id)
      });
    },
    removeFilter: function removeFilter(state, _ref8) {
      var segmentId = _ref8.segmentId,
          filterId = _ref8.filterId;

      var sI = (0, _findIndex3.default)(state.segments, function (s) {
        return s.id === (0, _toString3.default)(segmentId);
      });
      var fI = (0, _findIndex3.default)(state.segments[sI].filters, function (f) {
        return f.filterId === (0, _toString3.default)(filterId);
      });

      state.segments[sI].modified = true;
      state.segments[sI].filters.splice(tI, 1);
    }
  },
  actions: {
    set: function set(_ref9, _ref10) {
      var commit = _ref9.commit,
          getters = _ref9.getters;
      var segment = _ref10.segment,
          segments = _ref10.segments;

      commit('set', { segment: segment, segments: segments });
    },
    create: function create(_ref11) {
      var commit = _ref11.commit,
          getters = _ref11.getters;

      var segmentId = (0, _v2.default)();
      commit('create', { segmentId: segmentId });
      var index = (0, _findIndex3.default)(getters.segments, function (s) {
        return s.id === (0, _toString3.default)(segmentId);
      });
      return Promise.resolve({ segment: getters.segments[index] });
    },
    store: function store(_ref12, _ref13) {
      var commit = _ref12.commit,
          getters = _ref12.getters;
      var segmentId = _ref13.segmentId,
          planId = _ref13.planId,
          position = _ref13.position;

      return plServices.membershipPlanSegments.store({ planId: planId, segmentId: segmentId, position: position });
    },
    update: function update(_ref14, _ref15) {
      var dispatch = _ref14.dispatch,
          commit = _ref14.commit,
          getters = _ref14.getters;
      var segment = _ref15.segment,
          planId = _ref15.planId,
          position = _ref15.position;

      if (!segment.saved) {
        return dispatch('store', { segmentId: segment.id, planId: planId, position: position });
      }
      return plServices.membershipPlanSegments.update({ segment: segment });
    },
    createTab: function createTab(_ref16, _ref17) {
      var dispatch = _ref16.dispatch;
      var segmentId = _ref17.segmentId;

      return dispatch('membershipPlanTabs/create', null, { root: true }).then(function (_ref18) {
        var tab = _ref18.tab;
        return dispatch('insertTab', { segmentId: segmentId, tab: tab });
      });
    },
    insertTab: function insertTab(_ref19, _ref20) {
      var commit = _ref19.commit,
          getters = _ref19.getters;
      var segmentId = _ref20.segmentId,
          tab = _ref20.tab;

      var index = (0, _findIndex3.default)(getters.segments, function (s) {
        return s.id === (0, _toString3.default)(segmentId);
      });
      commit('insertTab', { segmentId: segmentId, tab: tab });
      return Promise.resolve({ segment: getters.segments[index] });
    },
    removeTab: function removeTab(_ref21, _ref22) {
      var commit = _ref21.commit,
          getters = _ref21.getters;
      var segmentId = _ref22.segmentId,
          tabId = _ref22.tabId;

      var index = (0, _findIndex3.default)(getters.segments, function (s) {
        return s.id === (0, _toString3.default)(segmentId);
      });
      commit('removeTab', { segmentId: segmentId, tabId: tabId });
    },
    deleteTab: function deleteTab(_ref23, _ref24) {
      var dispatch = _ref23.dispatch;
      var segmentId = _ref24.segmentId,
          tabId = _ref24.tabId;

      return dispatch('membershipPlanTabs/delete', { segmentId: segmentId, tabId: tabId }, { root: true }).then(function () {
        return dispatch('removeTab', { segmentId: segmentId, tabId: tabId });
      });
    },
    insertFilter: function insertFilter(_ref25, _ref26) {
      var commit = _ref25.commit,
          getters = _ref25.getters;
      var segmentId = _ref26.segmentId,
          filter = _ref26.filter;

      var index = (0, _findIndex3.default)(getters.segments, function (s) {
        return s.id === (0, _toString3.default)(segmentId);
      });
      commit('insertFilter', { segmentId: segmentId, filter: filter });
      return Promise.resolve({ segment: getters.segments[index] });
    },
    removeFilter: function removeFilter(_ref27, _ref28) {
      var commit = _ref27.commit,
          getters = _ref27.getters;
      var segmentId = _ref28.segmentId,
          filterId = _ref28.filterId;

      var index = (0, _findIndex3.default)(getters.segments, function (s) {
        return s.id === (0, _toString3.default)(segmentId);
      });
      commit('removeFilter', { segmentId: segmentId, filterId: filterId });
    }
  }
};
});
___scope___.file("store/modules/membership-plan-tabs.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _isPlainObject2 = require('lodash/isPlainObject');

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _isUndefined2 = require('lodash/isUndefined');

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _findIndex2 = require('lodash/findIndex');

var _findIndex3 = _interopRequireDefault(_findIndex2);

var _toString2 = require('lodash/toString');

var _toString3 = _interopRequireDefault(_toString2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespaced: true,
  state: {
    tabs: []
  },
  getters: {
    tabs: function tabs(state) {
      return state.tabs;
    },
    tabsCount: function tabsCount(state, getters) {
      if (!(0, _isPlainObject3.default)(undefined.tabs)) return 0;
      return Object.keys(undefined.tabs).length;
    }
  },
  mutations: {
    set: function set(state, _ref) {
      var tabs = _ref.tabs,
          tab = _ref.tab;

      var setTab = function setTab(tab) {
        var index = (0, _findIndex3.default)(state.tabs, function (t) {
          return t.id === (0, _toString3.default)(tab.id);
        });

        var newTab = {
          id: (0, _toString3.default)(tab.id),
          title: tab.name || '',
          blocks: [],
          modified: false,
          saved: true,
          createAt: new Date(tab.created_at).getTime() / 1000,
          updatedAt: new Date(tab.updated_at).getTime() / 1000
        };

        if (index === -1) {
          state.tabs.push(newTab);
        } else {
          Vue.set(state.tabs, index, newTab);
        }
      };

      if (!(0, _isUndefined3.default)(tabs)) {
        return tabs.forEach(function (tab) {
          return setTab(tab);
        });
      }

      setTab(tab);
    },
    create: function create(state, _ref2) {
      var tabId = _ref2.tabId;

      state.tabs.push({
        id: (0, _toString3.default)(tabId),
        title: '',
        blocks: [],
        modified: false,
        saved: false,
        createdAt: Math.floor(Date.now() / 1000),
        updatedAt: Math.floor(Date.now() / 1000)
      });
    },
    delete: function _delete(state, _ref3) {
      var tabId = _ref3.tabId;

      var index = (0, _findIndex3.default)(state.tabs, function (t) {
        return t.id === tabId;
      });

      state.tabs.splice(index, 1);
    },
    reset: function reset(state) {
      state.tabs = [];
    },
    updateTitle: function updateTitle(state, _ref4) {
      var tabId = _ref4.tabId,
          title = _ref4.title;

      var index = (0, _findIndex3.default)(state.tabs, function (t) {
        return t.id === (0, _toString3.default)(tabId);
      });

      state.tabs[index].modified = true;
      state.tabs[index].title = title;
    },
    insertBlock: function insertBlock(state, _ref5) {
      var tabId = _ref5.tabId,
          blockId = _ref5.blockId;

      var id = (0, _v2.default)();
      var index = (0, _findIndex3.default)(state.tabs, function (t) {
        return t.id === (0, _toString3.default)(tabId);
      });

      state.tabs[index].modified = true;
      state.tabs[index].blocks.push({
        id: (0, _toString3.default)(id),
        blockId: (0, _toString3.default)(blockId)
      });
    },
    removeBlock: function removeBlock(state, _ref6) {
      var tabId = _ref6.tabId,
          blockId = _ref6.blockId;

      var tI = (0, _findIndex3.default)(state.tabs, function (t) {
        return t.id === (0, _toString3.default)(tabId);
      });
      var bI = (0, _findIndex3.default)(state.tabs[tI].blocks, function (b) {
        return b.blockId === (0, _toString3.default)(blockId);
      });

      state.tabs[tI].modified = true;
      state.tabs[tI].blocks.splice(bI, 1);
    }
  },
  actions: {
    set: function set(_ref7, _ref8) {
      var commit = _ref7.commit,
          getters = _ref7.getters;
      var tabs = _ref8.tabs,
          tab = _ref8.tab;

      commit('set', { tabs: tabs, tab: tab });
    },
    create: function create(_ref9) {
      var commit = _ref9.commit,
          getters = _ref9.getters;

      var tabId = (0, _v2.default)();

      commit('create', { tabId: tabId });

      var index = (0, _findIndex3.default)(getters.tabs, function (t) {
        return t.id === tabId;
      });

      return Promise.resolve({ tab: getters.tabs[index] });
    },
    delete: function _delete(_ref10, _ref11) {
      var commit = _ref10.commit,
          getters = _ref10.getters;
      var segmentId = _ref11.segmentId,
          tabId = _ref11.tabId;

      return plServices.membershipPlanTabs.delete({ segmentId: segmentId, tabId: tabId }).then(function () {
        return commit('delete', { tabId: tabId });
      });
    },
    store: function store(context, _ref12) {
      var segmentId = _ref12.segmentId,
          tab = _ref12.tab,
          position = _ref12.position;

      return plServices.membershipPlanTabs.store({ segmentId: segmentId, tab: tab, position: position });
    },
    update: function update(_ref13, _ref14) {
      var dispatch = _ref13.dispatch;
      var segmentId = _ref14.segmentId,
          tab = _ref14.tab,
          position = _ref14.position;

      if (!tab.saved) {
        return dispatch('store', { segmentId: segmentId, tab: tab, position: position });
      }
      return plServices.membershipPlanTabs.update({ segmentId: segmentId, tab: tab });
    },
    insertBlock: function insertBlock(_ref15, _ref16) {
      var commit = _ref15.commit,
          getters = _ref15.getters;
      var tabId = _ref16.tabId,
          blockId = _ref16.blockId;

      commit('insertBlock', { tabId: tabId, blockId: blockId });
    },
    removeBlock: function removeBlock(_ref17, _ref18) {
      var commit = _ref17.commit,
          getters = _ref17.getters;
      var tabId = _ref18.tabId,
          blockId = _ref18.blockId;

      commit('removeBlock', { tabId: tabId, blockId: blockId });
    }
  }
};
});
___scope___.file("store/modules/membership-blocks.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _isUndefined2 = require('lodash/isUndefined');

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _findIndex2 = require('lodash/findIndex');

var _findIndex3 = _interopRequireDefault(_findIndex2);

var _toString2 = require('lodash/toString');

var _toString3 = _interopRequireDefault(_toString2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findIndex(state, blockId) {
  return (0, _findIndex3.default)(state.blocks, function (b) {
    return b.id == blockId;
  });
}

exports.default = {
  namespaced: true,
  state: {
    blocks: [],
    currentBlockId: null
  },
  getters: {
    blocks: function blocks(state) {
      return state.blocks;
    },
    currentBlock: function currentBlock(state) {
      var index = findIndex(state, state.currentBlockId);
      return state.blocks[index] || {};
    }
  },
  mutations: {
    use: function use(state, _ref) {
      var blockId = _ref.blockId;
      state.currentBlockId = blockId;
    },
    set: function set(state, _ref2) {
      var blocks = _ref2.blocks,
          block = _ref2.block;

      var setBlock = function setBlock(block) {
        var index = findIndex(state, block.id);
        var newBlock = {
          id: (0, _toString3.default)(block.id),
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
        };

        if (index === -1) {
          state.blocks.push(newBlock);
        } else {
          Vue.set(state.blocks, index, newBlock);
        }
      };

      if (!(0, _isUndefined3.default)(blocks)) {
        return blocks.forEach(function (block) {
          return setBlock(block);
        });
      }

      setBlock(block);
    },
    create: function create(state) {
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          blockId = _ref3.blockId;

      state.blocks.push({
        id: (0, _toString3.default)(blockId),
        title: '',
        memberships: [],
        status: 0,
        saved: false,
        modified: false,
        createdAt: Math.floor(Date.now() / 1000),
        updatedAt: Math.floor(Date.now() / 1000)
      });
    },
    remove: function remove(state, _ref4) {
      var blockId = _ref4.blockId;

      var index = (0, _findIndex3.default)(state.blocks, function (b) {
        return b.id === (0, _toString3.default)(blockId);
      });
      state.blocks.splice(index, 1);
    },
    updateTitle: function updateTitle(state, _ref5) {
      var title = _ref5.title,
          blockId = _ref5.blockId;

      var index = findIndex(state, blockId);
      state.blocks[index].modified = true;
      state.blocks[index].title = title;
    },
    updateStatus: function updateStatus(state, _ref6) {
      var status = _ref6.status,
          blockId = _ref6.blockId;

      var index = findIndex(state, blockId);
      state.blocks[index].modified = true;
      state.blocks[index].status = status;
    },
    insertMembership: function insertMembership(state, _ref7) {
      var membership = _ref7.membership,
          blockId = _ref7.blockId,
          membershipId = _ref7.membershipId;

      var id = membershipId || membership.id;
      var index = findIndex(state, blockId);

      if (state.blocks[index].memberships.indexOf(id) === -1) {
        state.blocks[index].segmentModified = true;
        state.blocks[index].memberships.push(id);
      }
    },
    insertMemberships: function insertMemberships(state, _ref8) {
      var memberships = _ref8.memberships,
          blockId = _ref8.blockId;

      var index = findIndex(state, blockId);

      memberships.forEach(function (membership) {
        state.blocks[index].memberships.push(membership.id);
      });
    },
    removeMembership: function removeMembership(state, _ref9) {
      var membershipId = _ref9.membershipId,
          blockId = _ref9.blockId;

      var index = findIndex(state, blockId);

      state.blocks[index].segmentModified = true;
      state.blocks[index].memberships = state.blocks[index].memberships.filter(function (m) {
        return m !== membershipId;
      });
    },
    resetMemberships: function resetMemberships(state, _ref10) {
      var blockId = _ref10.blockId;

      var index = findIndex(state, blockId);
      state.blocks[index].memberships = [];
    },
    reorderMemberships: function reorderMemberships(state, _ref11) {
      var memberships = _ref11.memberships,
          blockId = _ref11.blockId;

      var index = findIndex(state, blockId);
      Object.assign(state.blocks[index], { memberships: memberships, segmentModified: true });
    },
    resetModified: function resetModified(state, _ref12) {
      var blockId = _ref12.blockId;

      var index = findIndex(state, blockId);
      Object.assign(state.blocks[index], { modified: false, segmentModified: false });
    }
  },
  actions: {
    use: function use(_ref13, _ref14) {
      var commit = _ref13.commit;
      var blockId = _ref14.blockId;

      commit('use', { blockId: blockId });
    },
    set: function set(_ref15, _ref16) {
      var commit = _ref15.commit;
      var blocks = _ref16.blocks,
          block = _ref16.block;

      commit('set', { blocks: blocks, block: block });
    },
    pull: function pull(_ref17) {
      var commit = _ref17.commit;

      var _ref18 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          blockId = _ref18.blockId;

      if ((0, _isUndefined3.default)(blockId)) {
        return plServices.membershipBlocks.getAll().then(function (_ref19) {
          var blocks = _ref19.data;
          return commit('set', { blocks: blocks });
        });
      }

      return plServices.membershipBlocks.get({ blockId: blockId }).then(function (_ref20) {
        var block = _ref20.data;

        var memberships = (0, _get3.default)(block, 'segments[0].memberships');
        commit('set', { block: block });

        if (memberships) {
          commit('insertMemberships', { memberships: memberships, blockId: blockId });
        }
      });
    },
    load: function load(_ref21, _ref22) {
      var dispatch = _ref21.dispatch,
          commit = _ref21.commit;
      var blockId = _ref22.blockId;

      return dispatch('pull', { blockId: blockId }).then(function () {
        return commit('use', { blockId: blockId });
      });
    },
    create: function create(_ref23) {
      var commit = _ref23.commit,
          getters = _ref23.getters;

      var blockId = (0, _v2.default)();
      commit('create', { blockId: blockId });
      var index = findIndex(getters, blockId);
      return Promise.resolve({ block: getters.blocks[index] });
    },
    store: function store(_ref24, _ref25) {
      var commit = _ref24.commit,
          getters = _ref24.getters;
      var blockId = _ref25.blockId;

      var index = findIndex(getters, blockId);
      var title = getters.blocks[index].title;
      var status = getters.blocks[index].status;
      var membershipIds = getters.blocks[index].memberships;
      return plServices.membershipBlocks.store({ title: title, membershipIds: membershipIds, status: status });
    },
    update: function update(_ref26, _ref27) {
      var commit = _ref26.commit,
          getters = _ref26.getters,
          dispatch = _ref26.dispatch;
      var blockId = _ref27.blockId;

      var index = findIndex(getters, blockId);
      return plServices.membershipBlocks.update(getters.blocks[index]).then(function () {
        commit('resetModified', { blockId: blockId });
        dispatch('alert', { msg: 'Block successfully saved.' }, { root: true });
      }).catch(function () {
        dispatch('alert', {
          style: 'red',
          icon: 'error',
          msg: 'An error occurred. Try again later.'
        }, { root: true });
      });
    },
    delete: function _delete(_ref28, _ref29) {
      var commit = _ref28.commit,
          getters = _ref28.getters;
      var blockId = _ref29.blockId;

      var index = findIndex(getters, blockId);

      if (getters.blocks[index].saved) {
        return plServices.membershipBlocks.delete({ blockId: blockId }).then(function () {
          return commit('remove', { blockId: blockId });
        });
      }

      commit('remove', { blockId: blockId });
    }
  }
};
});
___scope___.file("helpers/lodash.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chunk = require('lodash/chunk');

var _chunk2 = _interopRequireDefault(_chunk);

var _cloneDeep = require('lodash/cloneDeep');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _defaultsDeep = require('lodash/defaultsDeep');

var _defaultsDeep2 = _interopRequireDefault(_defaultsDeep);

var _delay = require('lodash/delay');

var _delay2 = _interopRequireDefault(_delay);

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

var _findIndex = require('lodash/findIndex');

var _findIndex2 = _interopRequireDefault(_findIndex);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _keys = require('lodash/keys');

var _keys2 = _interopRequireDefault(_keys);

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _reduce = require('lodash/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _round = require('lodash/round');

var _round2 = _interopRequireDefault(_round);

var _times = require('lodash/times');

var _times2 = _interopRequireDefault(_times);

var _toString = require('lodash/toString');

var _toString2 = _interopRequireDefault(_toString);

var _values = require('lodash/values');

var _values2 = _interopRequireDefault(_values);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lodash = {
  chunk: _chunk2.default,
  cloneDeep: _cloneDeep2.default,
  debounce: _debounce2.default,
  defaultsDeep: _defaultsDeep2.default,
  delay: _delay2.default,
  find: _find2.default,
  findIndex: _findIndex2.default,
  get: _get2.default,
  isArray: _isArray2.default,
  keys: _keys2.default,
  map: _map2.default,
  reduce: _reduce2.default,
  round: _round2.default,
  times: _times2.default,
  toString: _toString2.default,
  values: _values2.default
};

exports.default = {
  install: function install(Vue) {
    Vue._ = lodash;
    Object.defineProperties(Vue.prototype, {
      _: {
        get: function get() {
          return lodash;
        }
      }
    });
  }
};
});
___scope___.file("helpers/uuid.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  install: function install(Vue) {
    Vue.uuid = _v2.default;
    Object.defineProperties(Vue.prototype, {
      uuid: {
        get: function get() {
          return _v2.default;
        }
      }
    });
  }
};
});
___scope___.file("services/membership-plans.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getAll: function getAll() {
    return _api2.default.get('membership_plans');
  },
  get: function get(_ref) {
    var planId = _ref.planId;
    return _api2.default.get('membership_plans/' + planId);
  },
  store: function store(_ref2) {
    var title = _ref2.title;

    return _api2.default.post('membership_plans', { name: title, status: 1 });
  },
  update: function update(_ref3) {
    var id = _ref3.id,
        title = _ref3.title;
    return _api2.default.put('membership_plans/' + id, { name: title });
  },
  delete: function _delete(_ref4) {
    var planId = _ref4.planId;
    return _api2.default.delete('membership_plans/' + planId);
  }
};
});
___scope___.file("services/api.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_axios2.default.defaults.promise = _bluebird2.default;

var instance = _axios2.default.create({
  baseURL: '/api/',
  timeout: 5000,
  responseType: 'json'
});

exports.default = instance;
});
___scope___.file("services/membership-plan-tabs.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  get: function get(_ref) {
    var segmentId = _ref.segmentId,
        tabId = _ref.tabId;
    return _api2.default.get('segment/' + segmentId + '/tabs/' + tabId);
  },
  store: function store(_ref2) {
    var segmentId = _ref2.segmentId,
        tab = _ref2.tab,
        _ref2$position = _ref2.position,
        position = _ref2$position === undefined ? 0 : _ref2$position;

    return _api2.default.post('segment/' + segmentId + '/tabs', {
      name: tab.title,
      position: position,
      batch: JSON.stringify(tab.blocks.map(function (e, i) {
        return {
          id: e.blockId,
          status: 0,
          position: i
        };
      }))
    });
  },
  update: function update(_ref3) {
    var segmentId = _ref3.segmentId,
        tab = _ref3.tab,
        _ref3$position = _ref3.position,
        position = _ref3$position === undefined ? 0 : _ref3$position;

    return _api2.default.put('segment/' + segmentId + '/tabs/' + tab.id, {
      name: tab.title,
      position: position,
      batch: JSON.stringify(tab.blocks.map(function (e, i) {
        return {
          id: e.blockId,
          status: 0,
          position: i
        };
      }))
    });
  },
  delete: function _delete(_ref4) {
    var segmentId = _ref4.segmentId,
        tabId = _ref4.tabId;

    return _api2.default.delete('segment/' + segmentId + '/tabs/' + tabId);
  }
};
});
___scope___.file("services/membership-plan-segments.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  get: function get(_ref) {
    var segmentId = _ref.segmentId;
    return _api2.default.get('segment/' + segmentId);
  },

  store: function store(_ref2) {
    var planId = _ref2.planId,
        segmentId = _ref2.segmentId,
        _ref2$position = _ref2.position,
        position = _ref2$position === undefined ? 0 : _ref2$position,
        _ref2$status = _ref2.status,
        status = _ref2$status === undefined ? 1 : _ref2$status;

    return _api2.default.post('membership_plans/' + planId + '/segment', {
      name: segmentId,
      membership_plan_id: planId,
      status: status,
      position: position
    });
  },

  update: function update(_ref3) {
    var segment = _ref3.segment;
    return Promise.resolve({ data: segment });
  },

  delete: function _delete() {}
};
});
___scope___.file("services/membership-blocks.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getAll: function getAll() {
    return _api2.default.get('membership_blocks');
  },
  get: function get(_ref) {
    var blockId = _ref.blockId;
    return _api2.default.get('membership_blocks/' + blockId);
  },
  store: function store(_ref2) {
    var title = _ref2.title,
        membershipIds = _ref2.membershipIds,
        status = _ref2.status;

    return _api2.default.post('membership_blocks', {
      name: title,
      status: status,
      batch: JSON.stringify({
        membership_ids: membershipIds.join(',')
      })
    });
  },
  update: function update(block) {
    return block.modified ? this.updateBlock(block) : this.updateBlockSegment(block);
  },
  updateBlock: function updateBlock(_ref3) {
    var id = _ref3.id,
        title = _ref3.title,
        status = _ref3.status,
        layoutId = _ref3.layoutId;

    return _api2.default.put('membership_blocks/' + id, {
      name: title,
      status: status,
      layout_id: layoutId
    });
  },
  updateBlockSegment: function updateBlockSegment(_ref4) {
    var memberships = _ref4.memberships,
        id = _ref4.id,
        segmentId = _ref4.segmentId,
        segmentModified = _ref4.segmentModified;

    return _api2.default.put('membership_blocks/' + id + '/blocks_segments/' + segmentId, {
      batch: JSON.stringify(memberships)
    });
  },


  delete: function _delete(_ref5) {
    var blockId = _ref5.blockId;
    return _api2.default.delete('membership_blocks/' + blockId);
  }
};
});
___scope___.file("services/memberships.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getAll: function getAll() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$params = _ref.params,
        params = _ref$params === undefined ? {} : _ref$params;

    return _api2.default.get('memberships', {
      params: _extends({
        limit: 1000
      }, params)
    });
  }
};
});
___scope___.file("services/segment-filters.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  get: function get(_ref) {
    var segmentId = _ref.segmentId;
    return _api2.default.get('/' + segmentId + '/filters/');
  },
  getTypes: function getTypes() {
    return _api2.default.get('/filter_types');
  },
  getOperations: function getOperations() {
    return _api2.default.get('/filter_operations');
  },
  store: function store(_ref2) {
    var segmentId = _ref2.segmentId,
        filter = _ref2.filter;

    var requestJson = (0, _map3.default)(filter.and[0].or, function (oF) {
      return {
        filter_type_id: parseInt(oF.key, 10),
        value: { op: oF.operation, value: oF.value },
        status: 0
      };
    });

    return _api2.default.post('segment/' + segmentId + '/filters/', {
      batch: JSON.stringify(requestJson)
    });
  },
  update: function update(_ref3) {
    var segmentId = _ref3.segmentId,
        filter = _ref3.filter;

    var requestJson = (0, _map3.default)(filter.and[0].or, function (oF) {
      return {
        filter_type_id: parseInt(oF.key, 10),
        value: { op: oF.operation, value: oF.value },
        status: 0
      };
    });

    return _api2.default.put('segment/' + segmentId + '/filters/', {
      batch: JSON.stringify(requestJson)
    });
  },
  delete: function _delete(_ref4) {
    var segmentId = _ref4.segmentId,
        filterId = _ref4.filterId;
    return _api2.default.delete('/' + segmentId + '/filters/' + filterId);
  }
};
});
___scope___.file("components/modules/common/alert.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-878cabc2'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"alert","enter-active-class":"animated slideInUp","leave-active-class":"animated fadeOutDown"}},[(_vm.shown)?_c('div',{staticClass:"alert",class:_vm.style},[_c('div',{staticClass:"alert-icon"},[_c('i',{staticClass:"animated flash material-icons"},[_vm._v(_vm._s(_vm.icon))])]),_c('div',{staticClass:"alert-msg",domProps:{"innerHTML":_vm._s(_vm.msg)}})]):_vm._e()])},
        staticRenderFns: []
      })
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var makeUl = function makeUl(arr) {
  var l = '';
  for (var i = 0; i < arr.length; i++) {
    l += '<li>' + arr[i] + '</li>';
  }
  return '<ul>' + l + '</ul>';
};

exports.default = {
  name: 'alert',
  data: function data() {
    return {};
  },

  computed: {
    shown: function shown() {
      return this.$store.state.alert.shown;
    },
    style: function style() {
      return 'is-' + this.$store.state.alert.style;
    },
    icon: function icon() {
      return this.$store.state.alert.icon;
    },
    msg: function msg() {
      var msg = this.$store.state.alert.msg;
      if (this._.isArray(msg)) {
        return makeUl(msg);
      }
      return msg;
    }
  }
};
Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-878cabc2']) {
            process.env.vueHMR['data-v-878cabc2'] = true;
            api.createRecord('data-v-878cabc2', module.exports.default);
          }
        }
      
});
___scope___.file("components/layout.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-f6908552'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"layout"},[_c('main-header-component'),_c('div',{staticClass:"layout__wrap"},[_c('div',{staticClass:"layout__main"},[_c('router-view')],1),_c('aside',{staticClass:"layout__aside"},[_c('main-nav-component'),_c('page-nav-component')],1)]),_c('alert-component')],1)},
        staticRenderFns: []
      })
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { name: 'layoutComponent' };
Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-f6908552']) {
            process.env.vueHMR['data-v-f6908552'] = true;
            api.createRecord('data-v-f6908552', module.exports.default);
          }
        }
      
});
___scope___.file("components/modules/navigation/main-nav.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-d5c14914'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main-nav"},[_c('nav',{staticClass:"main-nav__navigation"},[_c('router-link',{staticClass:"main-nav__button",class:{ 'main-nav__button--active': _vm.firstLevelRoute === 'management'},attrs:{"to":"/admin/management"}},[_c('i',{staticClass:"material-icons"},[_vm._v("dvr")])])],1)])},
        staticRenderFns: []
      })
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'mainNavComponent',
  data: function data() {
    return {
      firstLevelRoute: ''
    };
  },

  watch: {
    '$route': 'getFirstLevelRoute'
  },
  methods: {
    getFirstLevelRoute: function getFirstLevelRoute() {
      this.firstLevelRoute = this.$router.currentRoute.path.split('/')[2] || '';
    }
  },
  mounted: function mounted() {
    this.getFirstLevelRoute();
  }
};
Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-d5c14914']) {
            process.env.vueHMR['data-v-d5c14914'] = true;
            api.createRecord('data-v-d5c14914', module.exports.default);
          }
        }
      
});
___scope___.file("components/modules/navigation/page-nav.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-f1a89ac'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.empty)?_c('section',{staticClass:"page-nav"},[_c('h3',{staticClass:"page-nav__heading"},[_vm._v(_vm._s(_vm.title))]),(_vm.description)?_c('div',{staticClass:"page-nav__description"},[_c('p',[_vm._v(_vm._s(_vm.description))])]):_vm._e(),(_vm.navigation)?_c('ul',{staticClass:"page-nav__navigation"},_vm._l((_vm.navigation),function(item){return _c('li',{staticClass:"page-nav__navigation-item"},[_c('router-link',{attrs:{"to":item.href}},[_vm._v(_vm._s(item.label))])],1)})):_vm._e()]):_vm._e()},
        staticRenderFns: []
      })
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vuex = require('vuex');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _defineProperty({
  name: 'pageNavComponent',
  data: function data() {
    return {};
  },
  computed: (0, _vuex.mapState)('pageNav', ['empty', 'title', 'description', 'navigation'])
}, 'data', function data() {
  return {};
});
Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-f1a89ac']) {
            process.env.vueHMR['data-v-f1a89ac'] = true;
            api.createRecord('data-v-f1a89ac', module.exports.default);
          }
        }
      
});
___scope___.file("components/modules/common/main-header.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-d260a9f5'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"main-header"},[_vm._m(0),_c('loading-bar-component')],1)},
        staticRenderFns: [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h1',{staticClass:"main-header__logo"},[_c('span',{staticClass:"main-header__logo-text"},[_vm._v("Playster Plan CMS")])])}]
      })
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'mainHeaderComponent',
  methods: {}
};
Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-d260a9f5']) {
            process.env.vueHMR['data-v-d260a9f5'] = true;
            api.createRecord('data-v-d260a9f5', module.exports.default);
          }
        }
      
});
___scope___.file("components/modules/common/context-menu.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-f2094ecd'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"contextMenu",staticClass:"context-menu"},[_c('button',{staticClass:"btn btn--inline material-icons",on:{"click":function($event){$event.stopPropagation();_vm.toggle($event)}}},[_vm._v("more_horiz")]),(_vm.isOpen)?_c('div',{staticClass:"context-menu__container"},[_vm._t("items")],2):_vm._e()])},
        staticRenderFns: []
      })
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'contextMenu',
  data: function data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle: function toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    },
    open: function open() {
      document.addEventListener('click', this.clickAway, true);
      this.isOpen = true;
    },
    close: function close() {
      document.removeEventListener('click', this.clickAway);
      this.isOpen = false;
    },
    clickAway: function clickAway(ev) {
      if (this.$refs.contextMenu && !this.$refs.contextMenu.contains(ev.target) || this.$refs.contextMenu && this.$refs.contextMenu.contains(ev.target) && ['BUTTON', 'A', 'INPUT'].indexOf(ev.target.nodeName) !== -1 && !ev.target.disabled && !ev.target.draggable) {
        this.close();
      }
    }
  }
};
Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-f2094ecd']) {
            process.env.vueHMR['data-v-f2094ecd'] = true;
            api.createRecord('data-v-f2094ecd', module.exports.default);
          }
        }
      
});
___scope___.file("components/modules/common/modal.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-a59849c7'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal"},[_c('div',{staticClass:"modal__overlay",on:{"click":function($event){_vm.$emit('close')}}}),_c('div',{staticClass:"modal__container"},[_c('header',{staticClass:"modal__header"},[_vm._t("header")],2),_c('div',{staticClass:"modal__body"},[_vm._t("body")],2),_c('footer',{staticClass:"modal__footer"},[_vm._t("footer")],2)])])},
        staticRenderFns: []
      })
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'modalComponent',
  methods: {}
};
Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-a59849c7']) {
            process.env.vueHMR['data-v-a59849c7'] = true;
            api.createRecord('data-v-a59849c7', module.exports.default);
          }
        }
      
});
___scope___.file("components/modules/common/loading-bar.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-63c5bf36'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loading-bar",class:{ 'loading-bar--active': _vm.shown }})},
        staticRenderFns: []
      })
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vuex = require('vuex');

exports.default = {
  name: 'loadingBarComponent',
  computed: {
    shown: function shown() {
      return this.$store.state.loading.shown;
    }
  }
};
Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-63c5bf36']) {
            process.env.vueHMR['data-v-63c5bf36'] = true;
            api.createRecord('data-v-63c5bf36', module.exports.default);
          }
        }
      
});
___scope___.file("components/modules/segmentation/tab-builder.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-169a2024'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tab-builder"},[_c('div',{staticClass:"tab-builder__tabs"},[_vm._l((_vm.getSegmentById(_vm.segmentId).tabs),function(tRef){return _c('div',{staticClass:"tab-builder__tab"},[_c('header',{staticClass:"tab-builder__tab-header"},[_c('div',{staticClass:"ipt-wrap"},[_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],staticClass:"ipt ipt--invisible",attrs:{"id":'tab-title-' + tRef.tabId,"name":'tab-title-' + tRef.tabId,"data-vv-as":"Tab title","type":"text","placeholder":"Give a name to your tab"},domProps:{"value":_vm.getTabById(tRef.tabId).title},on:{"change":function($event){_vm.updateTabTitle({ tabId: tRef.tabId, title: $event.target.value })}}}),_c('label',{staticClass:"material-icons",attrs:{"for":'tab-title-' + tRef.tabId}},[_vm._v("mode_edit")])]),_c('button',{staticClass:"btn btn--rm",on:{"click":function($event){_vm.removeTab({ segmentId: _vm.segmentId, tabId: tRef.tabId })}}},[_vm._v("Remove tab")])]),_c('draggable',{staticClass:"tab-builder__tab-body",attrs:{"move":_vm.checkMove},on:{"start":function($event){_vm.drag=true},"end":function($event){_vm.drag=false}},model:{value:(_vm.getTabById(tRef.tabId).blocks),callback:function ($$v) {_vm.getTabById(tRef.tabId).blocks=$$v},expression:"getTabById(tRef.tabId).blocks"}},[_vm._l((_vm.getTabById(tRef.tabId).blocks),function(bRef){return _c('div',{staticClass:"tab-builder__block"},[(bRef)?_c('header',{staticClass:"tab-builder__block-header"},[_c('h3',{staticClass:"tab-builder__block-heading"},[_vm._v(_vm._s(_vm.getBlockById(bRef.blockId).title))]),_c('button',{staticClass:"btn btn--close btn--light",on:{"click":function($event){_vm.removeBlock({ tabId: tRef.tabId, blockId: bRef.blockId })}}})]):_vm._e()])}),_c('button',{staticClass:"btn btn--zone tab-builder__add-block",attrs:{"slot":"footer"},on:{"click":function($event){_vm.useTab(_vm.getTabById(tRef.tabId).id); _vm.openBlockModal()}},slot:"footer"},[_vm._v("Add a new block")])],2)],1)}),_c('button',{staticClass:"btn btn--zone",on:{"click":function($event){_vm.createTab({ segmentId: _vm.segmentId })}}},[_vm._v("Add a new tab")])],2),(_vm.isBlockModalOpen)?_c('modal',{on:{"close":_vm.closeBlockModal}},[_c('h3',{attrs:{"slot":"header"},slot:"header"},[_vm._v("Insert a block")]),_c('div',{attrs:{"slot":"body"},slot:"body"},[_c('multiselect',{attrs:{"options":_vm.blockSearch.options,"multiple":true,"close-on-select":false,"clear-on-select":false,"preserve-search":true,"placeholder":"Pick block","label":"name","trackBy":"name"},model:{value:(_vm.blockSearch.selected),callback:function ($$v) {_vm.blockSearch.selected=$$v},expression:"blockSearch.selected"}})],1),_c('button',{staticClass:"btn btn--primary",attrs:{"slot":"footer"},on:{"click":function($event){_vm.insertSelectedBlocks(); _vm.closeBlockModal();}},slot:"footer"},[_vm._v("Insert block")])]):_vm._e()],1)},
        staticRenderFns: []
      })
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vuex = require('vuex');

exports.default = {
  name: 'tabBuilderComponent',
  props: ['segmentId'],

  data: function data() {
    return {
      currentTab: 0,
      blockSearch: {
        selected: [],
        options: []
      },
      isBlockModalOpen: false,
      currentTabId: null
    };
  },


  computed: _extends({}, (0, _vuex.mapGetters)('membershipBlocks', ['blocks']), (0, _vuex.mapGetters)('membershipPlanSegments', ['segments']), (0, _vuex.mapGetters)('membershipPlanTabs', ['tabs']), {
    segmentIndex: function segmentIndex() {
      var _this = this;

      return this._.findIndex(this.segments, function (s) {
        return s.id === _this.segmentId;
      });
    },
    segment: function segment() {
      return this.segments[this.segmentIndex] || {};
    }
  }),

  methods: _extends({}, (0, _vuex.mapActions)('membershipPlanTabs', {
    removeBlock: 'removeBlock'
  }), (0, _vuex.mapMutations)('membershipPlanTabs', {
    updateTabTitle: 'updateTitle'
  }), (0, _vuex.mapActions)('membershipPlanSegments', {
    createTab: 'createTab',
    removeTab: 'removeTab'
  }), {
    useTab: function useTab(tabId) {
      this.currentTabId = tabId;
    },
    getTabById: function getTabById(id) {
      var index = this._.findIndex(this.tabs, function (t) {
        return t.id === id;
      });
      return this.tabs[index];
    },
    getSegmentById: function getSegmentById(id) {
      var index = this._.findIndex(this.segments, function (s) {
        return s.id === id;
      });
      return this.segments[index];
    },
    getBlockById: function getBlockById(id) {
      var index = this._.findIndex(this.blocks, function (b) {
        return b.id === id;
      });
      return this.blocks[index];
    },
    addBlockToCurrentTab: function addBlockToCurrentTab(block) {
      this.$store.commit('membershipPlanTabs/insertBlock', {
        tabId: this.currentTabId,
        blockId: block.id
      });
    },
    insertSelectedBlocks: function insertSelectedBlocks() {
      var _this2 = this;

      this._.map(this.blockSearch.selected, function (n) {
        return _this2.addBlockToCurrentTab(n);
      });
      this.blockSearch.selected = [];
    },
    insertOptionBlocks: function insertOptionBlocks() {
      var _this3 = this;

      this.blockSearch.options = [];
      this._.map(this.blocks, function (m) {
        return _this3.blockSearch.options.push({
          id: m.id,
          name: m.title,
          label: m.id + ' - ' + m.title
        });
      });
    },
    checkMove: function checkMove(event) {
      if (event.dragged.nodeName === 'BUTTON') {
        return false;
      }
      if (event.draggedContext.element) {}
    },
    openBlockModal: function openBlockModal() {
      this.isBlockModalOpen = true;
    },
    closeBlockModal: function closeBlockModal() {
      this.isBlockModalOpen = false;
    }
  }),

  mounted: function mounted() {
    var _this4 = this;

    this.$store.dispatch('membershipBlocks/pull').then(function () {
      return _this4.insertOptionBlocks();
    });

    if (this.segment.tabs.length <= 0) {
      this.$store.dispatch('membershipPlanSegments/createTab', { segmentId: this.segmentId });
    }
  }
};
Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-169a2024']) {
            process.env.vueHMR['data-v-169a2024'] = true;
            api.createRecord('data-v-169a2024', module.exports.default);
          }
        }
      
});
___scope___.file("components/modules/segmentation/segment-filter.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-489f60f1'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"segment-filter"},[_vm._l((_vm.filter.and),function(andFilter){return _c('div',{staticClass:"segment-filter__and"},[_vm._l((andFilter.or),function(orFilter){return _c('div',{staticClass:"segment-filter__or"},[_c('div',{staticClass:"segment-filter__field-wrap"},[_c('select',{on:{"change":function($event){_vm.updateFilterInclusion(andFilter.id, orFilter.id, ($event.target.value === 'true'))}}},_vm._l((_vm.inclusions),function(inclusion){return _c('option',{domProps:{"value":inclusion.value,"selected":orFilter.include === inclusion.value}},[_vm._v(_vm._s(inclusion.label))])}))]),_c('div',{staticClass:"segment-filter__field-wrap"},[_c('select',{on:{"change":function($event){_vm.updateFilterKey(andFilter.id, orFilter.id, $event.target.value)}}},_vm._l((_vm.keys),function(key){return _c('option',{domProps:{"value":key.value,"selected":orFilter.key === key.value}},[_vm._v(_vm._s(key.label))])}))]),_c('div',{staticClass:"segment-filter__field-wrap"},[_c('select',{on:{"change":function($event){_vm.updateFilterOperation(andFilter.id, orFilter.id, $event.target.value)}}},_vm._l((_vm.operations),function(operation){return _c('option',{domProps:{"value":operation.value,"selected":orFilter.operation === operation.value}},[_vm._v(_vm._s(operation.label))])}))]),_c('div',{staticClass:"segment-filter__field-wrap"},[_c('input',{domProps:{"value":orFilter.value},on:{"change":function($event){_vm.updateFilterValue(andFilter.id, orFilter.id, $event.target.value)}}})]),_c('button',{staticClass:"btn segment-filter__rm-btn",attrs:{"disabled":!andFilter || andFilter.or.length <= 1},on:{"click":function($event){_vm.removeOrFilter(andFilter.id, orFilter.id)}}})])}),_c('div',{staticClass:"segment-filter__or-btn-wrap"},[_c('button',{staticClass:"btn segment-filter__btn",on:{"click":function($event){_vm.addOrFilter(andFilter.id, $event)}}},[_vm._v("Add \"OR\" statement")])])],2)}),_c('div',{staticClass:"segment-filter__and-btn-wrap"},[_c('button',{staticClass:"btn segment-filter__btn",on:{"click":_vm.addAndFilter}},[_vm._v("Add \"AND\" statement")])])],2)},
        staticRenderFns: []
      })
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vuex = require('vuex');

exports.default = {
  name: 'segmentFilterComponent',
  props: ['segmentId', 'filterId'],
  data: function data() {
    return {};
  },

  computed: _extends({}, (0, _vuex.mapGetters)('segmentFilters', ['filters']), (0, _vuex.mapState)('segmentFilters', ['operations', 'inclusions', 'keys']), (0, _vuex.mapGetters)('membershipPlanSegments', ['segments']), {
    filterIndex: function filterIndex() {
      var _this = this;

      return this._.findIndex(this.filters, function (f) {
        return f.id === _this.filterId;
      });
    },
    filter: function filter() {
      return this.filters[this.filterIndex] || {};
    },
    segmentIndex: function segmentIndex() {
      var _this2 = this;

      return this._.findIndex(this.segments, function (s) {
        return s.id === _this2.segmentId;
      });
    },
    segment: function segment() {
      return this.segments[this.segmentIndex] || {};
    }
  }),
  methods: {
    addOrFilter: function addOrFilter(andFilterId) {
      return this.$store.dispatch('segmentFilters/createOr', { filterId: this.filterId, andFilterId: andFilterId });
    },
    removeOrFilter: function removeOrFilter(andFilterId, orFilterId) {
      return this.$store.dispatch('segmentFilters/deleteOr', { andFilterId: andFilterId, orFilterId: orFilterId });
    },
    addAndFilter: function addAndFilter() {
      return this.$store.dispatch('segmentFilters/createAnd', { filterId: this.filterId });
    },
    removeAndFilter: function removeAndFilter(andFilterId) {
      return this.$store.dispatch('segmentFilters/removeAnd', { andFilterId: andFilterId });
    },
    updateFilterKey: function updateFilterKey(andFilterId, orFilterId, key) {
      this.$store.commit('segmentFilters/updateFilterKey', {
        filterId: this.filterId,
        andFilterId: andFilterId,
        orFilterId: orFilterId,
        key: key
      });
    },
    updateFilterValue: function updateFilterValue(andFilterId, orFilterId, value) {
      this.$store.commit('segmentFilters/updateFilterValue', {
        filterId: this.filterId,
        andFilterId: andFilterId,
        orFilterId: orFilterId,
        value: value
      });
    },
    updateFilterOperation: function updateFilterOperation(andFilterId, orFilterId, operation) {
      this.$store.commit('segmentFilters/updateFilterOperation', {
        filterId: this.filterId,
        andFilterId: andFilterId,
        orFilterId: orFilterId,
        operation: operation
      });
    },
    updateFilterInclusion: function updateFilterInclusion(andFilterId, orFilterId, include) {
      this.$store.commit('segmentFilters/updateFilterInclusion', {
        filterId: this.filterId,
        andFilterId: andFilterId,
        orFilterId: orFilterId,
        include: include
      });
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    if (this.filter.and.length <= 0) {
      this.$store.dispatch('segmentFilters/createAnd', { filterId: this.filter.id }).then(function (_ref) {
        var andFilter = _ref.andFilter;
        return _this3.$store.dispatch('segmentFilters/createOr', {
          filterId: _this3.filter.id,
          andFilterId: andFilter.id
        });
      });
    }
  }
};
Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-489f60f1']) {
            process.env.vueHMR['data-v-489f60f1'] = true;
            api.createRecord('data-v-489f60f1', module.exports.default);
          }
        }
      
});
___scope___.file("components/modules/segmentation/preview.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-7b05f455'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"preview",class:{ 'preview--open': _vm.isOpen }},[_c('div',{staticClass:"preview__head",on:{"click":_vm.togglePreview}},[_c('h3',[_vm._v("Preview")]),_c('i',{staticClass:"material-icons"},[_vm._v(_vm._s((_vm.isOpen) ? 'keyboard_arrow_down' : 'keyboard_arrow_up'))])]),_c('div',{staticClass:"preview__content"})])},
        staticRenderFns: []
      })
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'previewComponent',
  data: function data() {
    return {
      'isOpen': false
    };
  },
  methods: {
    togglePreview: function togglePreview() {
      this.$emit(!this.isOpen ? 'open' : 'close');this.isOpen = !this.isOpen;
    }
  }
};
Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-7b05f455']) {
            process.env.vueHMR['data-v-7b05f455'] = true;
            api.createRecord('data-v-7b05f455', module.exports.default);
          }
        }
      
});
___scope___.file("components/pages/membership-plans.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-11c93018'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page membership-plans"},[_c('div',{staticClass:"page__scrollable"},[_c('header',{staticClass:"page__header"},[_c('h2',{staticClass:"page__heading"},[_vm._v("Membership Plans")]),_c('router-link',{staticClass:"btn btn--add",attrs:{"to":"/admin/management/membership-plans/new"}},[_vm._v("Add a membership plan")])],1),_c('div',{staticClass:"page__content"},[_c('table',{staticClass:"tbl"},[_vm._m(0),_vm._l((_vm.plans),function(plan){return _c('tr',[_c('td',[_c('router-link',{attrs:{"to":{ path: ("/admin/management/membership-plans/" + (plan.id)) }}},[_vm._v(_vm._s(plan.id))])],1),_c('td',[_c('router-link',{attrs:{"to":{ path: ("/admin/management/membership-plans/" + (plan.id)) }}},[_vm._v(_vm._s(plan.title || 'No Title'))])],1),_c('td',{staticClass:"tbl-text-right"},[_c('context-menu',[_c('button',{attrs:{"slot":"items"},on:{"click":function($event){_vm.deletePlan(plan.id)}},slot:"items"},[_vm._v("Delete"),_c('i',{staticClass:"material-icons"},[_vm._v("delete")])]),_c('router-link',{attrs:{"slot":"items","to":{ path: ("/admin/management/membership-plans/" + (plan.id)) }},slot:"items"},[_vm._v("Edit"),_c('i',{staticClass:"material-icons"},[_vm._v("edit")])])],1)],1)])})],2)])])])},
        staticRenderFns: [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('th',[_vm._v("id")]),_c('th',{attrs:{"colspan":"2"}},[_vm._v("Title")])])}]
      })
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _management = require('./management.vue');

var _management2 = _interopRequireDefault(_management);

var _vuex = require('vuex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'membershipPlansComponent',
  extends: _management2.default,
  data: function data() {
    return {};
  },
  computed: _extends({}, (0, _vuex.mapState)('membershipPlans', ['plans'])),
  methods: {
    deletePlan: function deletePlan(planId) {
      this.$store.dispatch('membershipPlans/delete', { planId: planId });
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('membershipPlans/pull');
  }
};
Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-11c93018']) {
            process.env.vueHMR['data-v-11c93018'] = true;
            api.createRecord('data-v-11c93018', module.exports.default);
          }
        }
      
});
___scope___.file("components/pages/management.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-392865b4'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")},
        staticRenderFns: []
      })
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'managementComponent',
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.$store.commit('pageNav/reset');
    this.$store.commit('pageNav/updateTitle', 'Management');
    this.$store.commit('pageNav/updateNavigation', [{ label: 'Membership Blocks', href: '/admin/management/membership-blocks' }, { label: 'Membership Plans', href: '/admin/management/membership-plans' }]);
  }
};
Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-392865b4']) {
            process.env.vueHMR['data-v-392865b4'] = true;
            api.createRecord('data-v-392865b4', module.exports.default);
          }
        }
      
});
___scope___.file("components/pages/membership-blocks.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-164d7302'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page membership-blocks"},[_c('div',{staticClass:"page__scrollable"},[_c('header',{staticClass:"page__header"},[_c('h2',{staticClass:"page__heading"},[_vm._v("Membership Blocks")]),_c('router-link',{staticClass:"btn btn--add",attrs:{"to":"/admin/management/membership-blocks/new"}},[_vm._v("Add a membership block")])],1),_c('div',{staticClass:"page__content"},[_c('table',{staticClass:"tbl"},[_vm._m(0),_vm._l((_vm.blocks),function(block){return _c('tr',[_c('td',[_c('router-link',{attrs:{"to":{ path: ("/admin/management/membership-blocks/" + (block.id)) }}},[_vm._v(_vm._s(block.id))])],1),_c('td',[_c('router-link',{attrs:{"to":{ path: ("/admin/management/membership-blocks/" + (block.id)) }}},[_vm._v(_vm._s(block.title || 'No Title'))])],1),_c('td',{staticClass:"tbl-text-right"},[_c('context-menu',[_c('button',{attrs:{"slot":"items"},on:{"click":function($event){_vm.deleteBlock(block.id)}},slot:"items"},[_vm._v("Delete"),_c('i',{staticClass:"material-icons"},[_vm._v("delete")])]),_c('router-link',{attrs:{"slot":"items","to":{ path: ("/admin/management/membership-blocks/" + (block.id)) }},slot:"items"},[_vm._v("Edit"),_c('i',{staticClass:"material-icons"},[_vm._v("edit")])])],1)],1)])})],2)])])])},
        staticRenderFns: [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('th',[_vm._v("id")]),_c('th',{attrs:{"colspan":"2"}},[_vm._v("Title")])])}]
      })
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _management = require('./management.vue');

var _management2 = _interopRequireDefault(_management);

var _vuex = require('vuex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'membershipBlocksComponent',
  extends: _management2.default,
  data: function data() {
    return {};
  },
  methods: {
    deleteBlock: function deleteBlock(blockId) {
      this.$store.dispatch('membershipBlocks/delete', { blockId: blockId });
    }
  },
  computed: _extends({}, (0, _vuex.mapState)('membershipBlocks', ['blocks'])),
  mounted: function mounted() {
    this.$store.dispatch('membershipBlocks/pull');
  }
};
Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-164d7302']) {
            process.env.vueHMR['data-v-164d7302'] = true;
            api.createRecord('data-v-164d7302', module.exports.default);
          }
        }
      
});
___scope___.file("components/pages/single-membership-plan.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-2368b39c'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page page--inner-scroll single-membership-plan"},[_c('div',{staticClass:"page__scrollable",class:{ 'page__scrollable--folded': _vm.isPreviewOpen }},[_c('header',{staticClass:"page__header"},[_c('div',{staticClass:"ipt-wrap page__heading"},[_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],staticClass:"ipt ipt--invisible",attrs:{"id":"plan-title-input","name":"plan-title-input","data-vv-as":"Plan title","placeholder":"Give a name to your plan","type":"text"},domProps:{"value":_vm.currentPlan.title},on:{"change":function($event){_vm.updatePlanTitle({ title: $event.target.value, planId: _vm.currentPlan.id })}}}),_c('label',{staticClass:"material-icons",attrs:{"for":"plan-title-input"}},[_vm._v("mode_edit")])]),_c('small',{staticClass:"page__id"},[_vm._v("id:"),_c('strong',[_vm._v(_vm._s(_vm.currentPlan.id))])])]),_c('div',{staticClass:"page__nav"},[_c('button',{staticClass:"btn btn--add",on:{"click":_vm.createSegment}},[_vm._v("Add a segment")])]),_c('div',{staticClass:"page__content"},[_c('div',{staticClass:"panels"},[_c('div',{staticClass:"panels__tabs"},_vm._l((_vm.currentPlan.segments),function(ref,index){return _c('div',{staticClass:"panels__tab",class:{ 'panels__tab--active': _vm.segmentTabVisibleIndex === index }},[(index <= 0)?_c('button',{staticClass:"panels__tab-btn",on:{"click":function($event){_vm.changeTabVisibleIndex(index)}}},[_vm._v("Main segment")]):_c('button',{staticClass:"panels__tab-btn",on:{"click":function($event){_vm.changeTabVisibleIndex(index)}}},[_vm._v("Segment "+_vm._s(index + 1))])])})),_vm._l((_vm.currentPlan.segments),function(sRef,index){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.segmentTabVisibleIndex === index),expression:"segmentTabVisibleIndex === index"}],staticClass:"panel"},[_c('div',{staticClass:"panel__header"},[(index <= 0)?_c('h3',{staticClass:"panel__heading"},[_vm._v("Main segment")]):_c('h3',{staticClass:"panel__heading"},[_vm._v("Segment "+_vm._s(index + 1))]),_c('button',{staticClass:"btn btn--rm",attrs:{"disabled":_vm.currentPlanSegmentCount <= 1},on:{"click":function($event){_vm.removeSegment({ planId: _vm.currentPlan.id, segmentId: sRef.segmentId })}}},[_vm._v("Remove segment")])]),_c('div',{staticClass:"panel__content"},[_c('tab-builder-component',{attrs:{"segmentId":sRef.segmentId}}),(index > 0)?_c('segment-filter-component',{attrs:{"segmentId":sRef.segmentId,"filterId":_vm.getSegmentById(sRef.segmentId).filters[0].filterId}}):_vm._e()],1)])})],2),_c('footer',[(!_vm.currentPlan.saved)?_c('button',{staticClass:"btn btn--primary",attrs:{"disabled":!_vm.currentPlan.modified},on:{"click":_vm.save}},[_vm._v("Save Membership Plan")]):_vm._e(),(_vm.currentPlan.saved)?_c('button',{staticClass:"btn btn--primary",attrs:{"disabled":!_vm.currentPlan.modified},on:{"click":_vm.update}},[_vm._v("Update Membership Plan")]):_vm._e()])])]),_c('div',{staticClass:"page__fixed",class:{ 'page__fixed--expended': _vm.isPreviewOpen }},[_c('preview-component',{on:{"open":_vm.openPreview,"close":_vm.closePreview}})],1)])},
        staticRenderFns: []
      })
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _validationError = require('../../errors/validationError.js');

var _validationError2 = _interopRequireDefault(_validationError);

var _management = require('./management.vue');

var _management2 = _interopRequireDefault(_management);

var _vuex = require('vuex');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'singleMembershipPlanComponent',
  extends: _management2.default,
  data: function data() {
    return {
      id: null,
      segmentTabVisibleIndex: 0
    };
  },

  computed: _extends({}, (0, _vuex.mapGetters)('membershipPlans', ['currentPlan', 'currentPlanSegmentCount', 'isPreviewOpen']), (0, _vuex.mapGetters)('membershipPlanSegments', ['segments'])),

  methods: _extends({}, (0, _vuex.mapActions)('membershipPlans', {
    createSegment: 'createSegment',
    removeSegment: 'removeSegment'
  }), (0, _vuex.mapMutations)('membershipPlans', {
    updatePlanTitle: 'updateTitle',
    openPreview: 'openPreview',
    closePreview: 'closePreview'
  }), {
    loadSavedPlan: function loadSavedPlan(plan) {
      var _this = this;

      var oldId = this.$route.params.id;
      var newPath = this.$route.fullPath.replace(oldId, plan.id);
      return this.$store.dispatch('membershipPlans/delete', { planId: oldId }).then(function () {
        return _this.$store.dispatch('membershipPlans/use', { planId: plan.id });
      }).then(function () {
        _this.id = plan.id;
        _this.$root.$router.push(newPath);
      });
    },
    init: function init() {
      var _this2 = this;

      this.id = this.$route.params.id;

      if (this.id === 'new') {
        return this.$store.dispatch('membershipPlans/create', { planId: this.id }).then(function (_ref) {
          var plan = _ref.plan;

          _this2.id = plan.id;
          var newPath = _this2.$route.fullPath.replace('new', _this2.id);
          _this2.$root.$router.push(newPath);
        }).then(function () {
          return _this2.$store.dispatch('membershipPlans/use', { planId: _this2.id });
        }).then(function () {
          return _this2.$store.dispatch('membershipPlanSegments/create');
        }).then(function (_ref2) {
          var segment = _ref2.segment;
          return _this2.$store.dispatch('membershipPlans/insertSegment', { segmentId: segment.id });
        });
      }

      return this.$store.dispatch('membershipPlans/load', { planId: this.id }).catch(function (error) {
        _this2.errorHandler(error);
        _this2.$router.push('/admin/management/membership-plans/');
      });
    },
    validate: function validate() {
      var _this3 = this;

      var errors = [];
      return this.$validator.validateAll().then(function () {
        return _this3.errors.items.forEach(function (i) {
          return errors.push(i);
        });
      }).then(function () {
        return _bluebird2.default.map(_this3.$children, function (child) {
          return child.$validator.validateAll().then(function (result) {
            return child.errors.items.forEach(function (i) {
              return errors.push(i);
            });
          });
        });
      }).then(function () {
        if (errors.length > 0) {
          throw new _validationError2.default('Validation error', { errors: errors });
        }
      });
    },
    save: function save() {
      var _this4 = this;

      return this.validate().then(function () {
        return _this4.$store.dispatch('showLoadingBar');
      }).then(function () {
        return _this4.$store.dispatch('membershipPlans/store', { planId: _this4.currentPlan.id });
      }).then(function (_ref3) {
        var plan = _ref3.plan;
        return _this4.loadSavedPlan(plan);
      }).then(function () {
        return _this4.init();
      }).then(function () {
        return _this4.$store.dispatch('alert', {
          msg: 'Plan successfully saved.'
        });
      }).catch(function (error) {
        return _this4.errorHandler(error);
      }).then(function () {
        return _this4.$store.dispatch('hideLoadingBar');
      });
    },
    update: function update() {
      var _this5 = this;

      this.validate().then(function () {
        return _this5.$store.dispatch('showLoadingBar');
      }).then(function () {
        return _this5.$store.dispatch('membershipPlans/update', { planId: _this5.currentPlan.id });
      }).then(function () {
        return _this5.$store.dispatch('alert', {
          msg: 'Plan successfully updated.'
        });
      }).catch(function (error) {
        return _this5.errorHandler(error);
      }).then(function () {
        return _this5.$store.dispatch('hideLoadingBar');
      });
    },
    getSegmentById: function getSegmentById(id) {
      var index = this._.findIndex(this.segments, function (s) {
        return s.id === id;
      });
      return this.segments[index];
    },
    changeTabVisibleIndex: function changeTabVisibleIndex(index) {
      this.segmentTabVisibleIndex = index;
    },
    errorHandler: function errorHandler(error) {
      console.warn('Warning: Error caught!', error);
      return this.$store.dispatch('alert', {
        style: 'red',
        icon: 'error',
        msg: error.errors && error.errors.length ? error.errors.map(function (e) {
          return e.msg;
        }) : error.message
      });
    }
  }),

  mounted: function mounted() {
    this.init();
  }
};
Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-2368b39c']) {
            process.env.vueHMR['data-v-2368b39c'] = true;
            api.createRecord('data-v-2368b39c', module.exports.default);
          }
        }
      
});
___scope___.file("errors/validationError.js", function(exports, require, module, __filename, __dirname){

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValidationError = function (_Error) {
  _inherits(ValidationError, _Error);

  function ValidationError(msg, _ref) {
    var errors = _ref.errors;

    _classCallCheck(this, ValidationError);

    var _this = _possibleConstructorReturn(this, (ValidationError.__proto__ || Object.getPrototypeOf(ValidationError)).call(this, msg));

    Error.captureStackTrace(_this, ValidationError);

    _this.errors = errors;
    _this.date = new Date();
    return _this;
  }

  return ValidationError;
}(Error);

exports.default = ValidationError;
});
___scope___.file("components/pages/single-membership-block.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-ba5a70e6'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page single-membership-block"},[_c('header',{staticClass:"page__header"},[_c('div',{staticClass:"ipt-wrap page__heading"},[_c('input',{staticClass:"ipt ipt--invisible",attrs:{"id":"title-input","type":"text","placeholder":"Give a name to your block"},domProps:{"value":_vm.currentBlock.title},on:{"change":_vm.updateTitle}}),_c('label',{staticClass:"material-icons",attrs:{"for":"title-input"}},[_vm._v("mode_edit")])]),_c('small',{staticClass:"page__id"},[_vm._v("id:"),_c('strong',[_vm._v(_vm._s(_vm.currentBlock.id))])])]),_c('div',{staticClass:"page__content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block__section"},[_c('h3',{staticClass:"block__section-heading"},[_vm._v("Memberships")]),(_vm.currentBlock && _vm.currentBlock.memberships)?_c('draggable',{staticClass:"block__memberships",on:{"end":_vm.draggend},model:{value:(_vm.currentBlock.memberships),callback:function ($$v) {_vm.currentBlock.memberships=$$v},expression:"currentBlock.memberships"}},_vm._l((_vm.currentBlock.memberships),function(id){return _c('div',{staticClass:"block__membership"},[_c('button',{staticClass:"btn block__membership-delete-btn",on:{"click":function($event){_vm.removeMembership(id)}}}),_c('div',{staticClass:"block__membership-id"},[_vm._v(_vm._s(id))]),_c('div',{staticClass:"block__membership-name"},[_vm._v(_vm._s(_vm.getMembershipById(id) && _vm.getMembershipById(id).name))])])})):_vm._e(),_c('button',{staticClass:"btn btn--add",on:{"click":_vm.openMembershipModal}},[_vm._v("Add a membership")]),_c('h3',{staticClass:"block__section-heading"},[_vm._v("Options")]),_c('label',[_vm._v("Disabled:")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.status),expression:"status"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.status)?_vm._i(_vm.status,null)>-1:(_vm.status)},on:{"__c":function($event){var $$a=_vm.status,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.status=$$a.concat([$$v]))}else{$$i>-1&&(_vm.status=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.status=$$c}}}})],1)]),_c('footer',[(!_vm.currentBlock.saved)?_c('button',{staticClass:"btn btn--primary",attrs:{"disabled":!_vm.currentBlock.modified && !_vm.currentBlock.segmentModified},on:{"click":_vm.save}},[_vm._v("Save Membership Block")]):_vm._e(),(_vm.currentBlock.saved)?_c('button',{staticClass:"btn btn--primary",attrs:{"disabled":!_vm.currentBlock.modified && !_vm.currentBlock.segmentModified},on:{"click":_vm.update}},[_vm._v("Update Membership Block")]):_vm._e()])]),(_vm.isMembershipModalOpen)?_c('modal',{on:{"close":_vm.closeMembershipModal}},[_c('h3',{attrs:{"slot":"header"},slot:"header"},[_vm._v("Insert a membership")]),_c('div',{attrs:{"slot":"body"},slot:"body"},[_c('multiselect',{attrs:{"options":_vm.membershipSearch.options,"multiple":true,"close-on-select":false,"clear-on-select":false,"preserve-search":true,"placeholder":"Pick memberships","label":"label","trackBy":"label"},model:{value:(_vm.membershipSearch.selected),callback:function ($$v) {_vm.membershipSearch.selected=$$v},expression:"membershipSearch.selected"}})],1),_c('button',{staticClass:"btn btn--primary",attrs:{"slot":"footer"},on:{"click":function($event){_vm.insertSelectedMemberships(); _vm.closeMembershipModal();}},slot:"footer"},[_vm._v("Insert Membership")])]):_vm._e()],1)},
        staticRenderFns: []
      })
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _management = require('./management.vue');

var _management2 = _interopRequireDefault(_management);

var _vuex = require('vuex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'singleMembershipBlockComponent',
  extends: _management2.default,
  data: function data() {
    return {
      isMembershipModalOpen: false,
      membershipSearch: {
        selected: [],
        options: []
      }
    };
  },
  computed: _extends({}, (0, _vuex.mapGetters)('membershipBlocks', ['currentBlock']), (0, _vuex.mapGetters)('memberships', ['memberships']), {
    status: {
      get: function get() {
        return this.currentBlock.status === 1;
      },
      set: function set(value) {
        this.$store.commit('membershipBlocks/updateStatus', { status: !value ? 0 : 1, blockId: this.currentBlock.id });
      }
    }
  }),
  methods: {
    init: function init() {
      var _this = this;

      this.id = this.$route.params.id;

      this.$store.dispatch('memberships/pull', { params: {} }).then(function () {
        return _this.insertOptionMemberships();
      });

      if (this.id === 'new') {
        return this.$store.dispatch('membershipBlocks/create', { blockId: this.id }).then(function (_ref) {
          var block = _ref.block;

          _this.id = block.id;
          var newPath = _this.$route.fullPath.replace('new', _this.id);
          _this.$root.$router.push(newPath);
        }).then(function () {
          return _this.$store.dispatch('membershipBlocks/use', { blockId: _this.id });
        });
      }

      return this.$store.dispatch('membershipBlocks/load', { blockId: this.id });
    },
    save: function save() {
      var _this2 = this;

      this.$store.dispatch('membershipBlocks/store', { blockId: this.currentBlock.id }).then(function (_ref2) {
        var block = _ref2.data;

        var oldId = _this2.$route.params.id;
        var newPath = _this2.$route.fullPath.replace(oldId, block.id);

        _this2.$store.dispatch('membershipBlocks/delete', { blockId: oldId });
        _this2.$store.dispatch('membershipBlocks/use', { blockId: block.id });

        _this2.id = block.id;
        _this2.$root.$router.push(newPath);

        return _this2.init();
      }).then();
    },
    update: function update() {
      this.$store.dispatch('membershipBlocks/update', { blockId: this.id });
    },
    getMembershipById: function getMembershipById(id) {
      var index = this._.findIndex(this.memberships, function (m) {
        return m.id === id;
      });
      return this.memberships[index];
    },
    draggend: function draggend() {
      this.$store.commit('membershipBlocks/reorderMemberships', { memberships: this.currentBlock.memberships, blockId: this.currentBlock.id });
    },
    updateTitle: function updateTitle(event) {
      var title = event.target.value;
      this.$store.commit('membershipBlocks/updateTitle', { title: title, blockId: this.currentBlock.id });
    },
    openMembershipModal: function openMembershipModal() {
      this.isMembershipModalOpen = true;
    },
    closeMembershipModal: function closeMembershipModal() {
      this.isMembershipModalOpen = false;
    },
    addMembership: function addMembership(membershipId) {
      this.$store.commit('membershipBlocks/insertMembership', { membershipId: membershipId, blockId: this.currentBlock.id });
    },
    removeMembership: function removeMembership(membershipId) {
      this.$store.commit('membershipBlocks/removeMembership', { membershipId: membershipId, blockId: this.currentBlock.id });
    },
    insertSelectedMemberships: function insertSelectedMemberships() {
      var _this3 = this;

      this._.map(this.membershipSearch.selected, function (n) {
        return _this3.addMembership(n.id);
      });
      this.membershipSearch.selected = [];
    },
    insertOptionMemberships: function insertOptionMemberships() {
      var _this4 = this;

      this.membershipSearch.options = [];
      this._.map(this.memberships, function (m) {
        var index = _this4._.findIndex(_this4.membershipSearch.options, function (o) {
          return o.id === m.id;
        });

        if (index === -1) {
          _this4.membershipSearch.options.push({
            id: m.id,
            name: m.name,
            label: m.id + ' - ' + m.name
          });
        }
      });
    }
  },
  mounted: function mounted() {
    this.init();
  }
};
Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-ba5a70e6']) {
            process.env.vueHMR['data-v-ba5a70e6'] = true;
            api.createRecord('data-v-ba5a70e6', module.exports.default);
          }
        }
      
});
return ___scope___.entry = "app.js";
});
FuseBox.pkg("fusebox-hot-reload", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
/**
 * @module listens to `source-changed` socket events and actions hot reload
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Client = require('fusebox-websocket').SocketClient, bundleErrors = {}, outputElement = document.createElement('div'), styleElement = document.createElement('style'), minimizeToggleId = 'fuse-box-toggle-minimized', hideButtonId = 'fuse-box-hide', expandedOutputClass = 'fuse-box-expanded-output', localStoragePrefix = '__fuse-box_';
function storeSetting(key, value) {
    localStorage[localStoragePrefix + key] = value;
}
function getSetting(key) {
    return localStorage[localStoragePrefix + key] === 'true' ? true : false;
}
var outputInBody = false, outputMinimized = getSetting(minimizeToggleId), outputHidden = false;
outputElement.id = 'fuse-box-output';
styleElement.innerHTML = "\n    #" + outputElement.id + ", #" + outputElement.id + " * {\n        box-sizing: border-box;\n    }\n    #" + outputElement.id + " {\n        z-index: 999999999999;\n        position: fixed;\n        top: 10px;\n        right: 10px;\n        width: 400px;\n        overflow: auto;\n        background: #fdf3f1;\n        border: 1px solid #eca494;\n        border-radius: 5px;\n        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        box-shadow: 0px 3px 6px 1px rgba(0,0,0,.15);\n    }\n    #" + outputElement.id + "." + expandedOutputClass + " {\n        height: auto;\n        width: auto;\n        left: 10px;\n        max-height: calc(100vh - 50px);\n    }\n    #" + outputElement.id + " .fuse-box-errors {\n        display: none;\n    }\n    #" + outputElement.id + "." + expandedOutputClass + " .fuse-box-errors {\n        display: block;\n        border-top: 1px solid #eca494;\n        padding: 0 10px;\n    }\n    #" + outputElement.id + " button {\n        border: 1px solid #eca494;\n        padding: 5px 10px;\n        border-radius: 4px;\n        margin-left: 5px;\n        background-color: white;\n        color: black;\n        box-shadow: 0px 2px 2px 0px rgba(0,0,0,.05);\n    }\n    #" + outputElement.id + " .fuse-box-header {\n        padding: 10px;\n    }\n    #" + outputElement.id + " .fuse-box-header h4 {\n        display: inline-block;\n        margin: 4px;\n    }";
styleElement.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(styleElement);
function displayBundleErrors() {
    var errorMessages = Object.keys(bundleErrors).reduce(function (allMessages, bundleName) {
        var bundleMessages = bundleErrors[bundleName];
        return allMessages.concat(bundleMessages.map(function (message) {
            var messageOutput = message
                .replace(/\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbps;&npbs;&nbps;')
                .replace(/ /g, '&nbsp;');
            return "<pre>" + messageOutput + "</pre>";
        }));
    }, []), errorOutput = errorMessages.join('');
    if (errorOutput && !outputHidden) {
        outputElement.innerHTML = "\n        <div class=\"fuse-box-header\" style=\"\">\n            <h4 style=\"\">Fuse Box Bundle Errors (" + errorMessages.length + "):</h4>\n            <div style=\"float: right;\">\n                <button id=\"" + minimizeToggleId + "\">" + (outputMinimized ? 'Expand' : 'Minimize') + "</button>\n                <button id=\"" + hideButtonId + "\">Hide</button>\n            </div>\n        </div>\n        <div class=\"fuse-box-errors\">\n            " + errorOutput + "\n        </div>\n        ";
        document.body.appendChild(outputElement);
        outputElement.className = outputMinimized ? '' : expandedOutputClass;
        outputInBody = true;
        document.getElementById(minimizeToggleId).onclick = function () {
            outputMinimized = !outputMinimized;
            storeSetting(minimizeToggleId, outputMinimized);
            displayBundleErrors();
        };
        document.getElementById(hideButtonId).onclick = function () {
            outputHidden = true;
            displayBundleErrors();
        };
    }
    else if (outputInBody) {
        document.body.removeChild(outputElement);
        outputInBody = false;
    }
}
exports.connect = function (port, uri, reloadFullPage) {
    if (FuseBox.isServer) {
        return;
    }
    port = port || window.location.port;
    var client = new Client({
        port: port,
        uri: uri,
    });
    client.connect();
    client.on('page-reload', function (data) {
        return window.location.reload();
    });
    client.on('page-hmr', function (data) {
        FuseBox.flush();
        FuseBox.dynamic(data.path, data.content);
        if (FuseBox.mainFile) {
            try {
                FuseBox.import(FuseBox.mainFile);
            }
            catch (e) {
                if (typeof e === 'string') {
                    if (/not found/.test(e)) {
                        return window.location.reload();
                    }
                }
                console.error(e);
            }
        }
    });
    client.on('source-changed', function (data) {
        console.info("%cupdate \"" + data.path + "\"", 'color: #237abe');
        if (reloadFullPage) {
            return window.location.reload();
        }
        /**
         * If a plugin handles this request then we don't have to do anything
         **/
        for (var index = 0; index < FuseBox.plugins.length; index++) {
            var plugin = FuseBox.plugins[index];
            if (plugin.hmrUpdate && plugin.hmrUpdate(data)) {
                return;
            }
        }
        if (data.type === "hosted-css") {
            var fileId = data.path.replace(/^\//, '').replace(/[\.\/]+/g, '-');
            var existing = document.getElementById(fileId);
            if (existing) {
                existing.setAttribute("href", data.path + "?" + new Date().getTime());
            }
            else {
                var node = document.createElement('link');
                node.id = fileId;
                node.type = 'text/css';
                node.rel = 'stylesheet';
                node.href = data.path;
                document.getElementsByTagName('head')[0].appendChild(node);
            }
        }
        if (data.type === 'js' || data.type === "css") {
            FuseBox.flush();
            FuseBox.dynamic(data.path, data.content);
            if (FuseBox.mainFile) {
                try {
                    FuseBox.import(FuseBox.mainFile);
                }
                catch (e) {
                    if (typeof e === 'string') {
                        if (/not found/.test(e)) {
                            return window.location.reload();
                        }
                    }
                    console.error(e);
                }
            }
        }
    });
    client.on('error', function (error) {
        console.log(error);
    });
    client.on('bundle-error', function (_a) {
        var bundleName = _a.bundleName, message = _a.message;
        console.error("Bundle error in " + bundleName + ": " + message);
        var errorsForBundle = bundleErrors[bundleName] || [];
        errorsForBundle.push(message);
        bundleErrors[bundleName] = errorsForBundle;
        displayBundleErrors();
    });
    client.on('update-bundle-errors', function (_a) {
        var bundleName = _a.bundleName, messages = _a.messages;
        messages.forEach(function (message) { return console.error("Bundle error in " + bundleName + ": " + message); });
        bundleErrors[bundleName] = messages;
        displayBundleErrors();
    });
};

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("fusebox-websocket", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events = require('events');
var SocketClient = /** @class */ (function () {
    function SocketClient(opts) {
        opts = opts || {};
        var port = opts.port || window.location.port;
        var protocol = location.protocol === 'https:' ? 'wss://' : 'ws://';
        var domain = location.hostname || 'localhost';
        this.url = opts.host || "" + protocol + domain + ":" + port;
        if (opts.uri) {
            this.url = opts.uri;
        }
        this.authSent = false;
        this.emitter = new events.EventEmitter();
    }
    SocketClient.prototype.reconnect = function (fn) {
        var _this = this;
        setTimeout(function () {
            _this.emitter.emit('reconnect', { message: 'Trying to reconnect' });
            _this.connect(fn);
        }, 5000);
    };
    SocketClient.prototype.on = function (event, fn) {
        this.emitter.on(event, fn);
    };
    SocketClient.prototype.connect = function (fn) {
        var _this = this;
        console.log('%cConnecting to fusebox HMR at ' + this.url, 'color: #237abe');
        setTimeout(function () {
            _this.client = new WebSocket(_this.url);
            _this.bindEvents(fn);
        }, 0);
    };
    SocketClient.prototype.close = function () {
        this.client.close();
    };
    SocketClient.prototype.send = function (eventName, data) {
        if (this.client.readyState === 1) {
            this.client.send(JSON.stringify({ event: eventName, data: data || {} }));
        }
    };
    SocketClient.prototype.error = function (data) {
        this.emitter.emit('error', data);
    };
    /** Wires up the socket client messages to be emitted on our event emitter */
    SocketClient.prototype.bindEvents = function (fn) {
        var _this = this;
        this.client.onopen = function (event) {
            console.log('%cConnected', 'color: #237abe');
            if (fn) {
                fn(_this);
            }
        };
        this.client.onerror = function (event) {
            _this.error({ reason: event.reason, message: 'Socket error' });
        };
        this.client.onclose = function (event) {
            _this.emitter.emit('close', { message: 'Socket closed' });
            if (event.code !== 1011) {
                _this.reconnect(fn);
            }
        };
        this.client.onmessage = function (event) {
            var data = event.data;
            if (data) {
                var item = JSON.parse(data);
                _this.emitter.emit(item.type, item.data);
                _this.emitter.emit('*', item);
            }
        };
    };
    return SocketClient;
}());
exports.SocketClient = SocketClient;

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("events", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
if (FuseBox.isServer) {
    module.exports = global.require("events");
} else {
    function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
    }
    module.exports = EventEmitter;

    // Backwards-compat with node 0.10.x
    EventEmitter.EventEmitter = EventEmitter;

    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;

    // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.
    EventEmitter.defaultMaxListeners = 10;

    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!isNumber(n) || n < 0 || isNaN(n))
            throw TypeError("n must be a positive number");
        this._maxListeners = n;
        return this;
    };

    EventEmitter.prototype.emit = function(type) {
        var er, handler, len, args, i, listeners;

        if (!this._events)
            this._events = {};

        // If there is no 'error' event listener then throw.
        if (type === "error") {
            if (!this._events.error ||
                (isObject(this._events.error) && !this._events.error.length)) {
                er = arguments[1];
                if (er instanceof Error) {
                    throw er; // Unhandled 'error' event
                }
                throw TypeError("Uncaught, unspecified \"error\" event.");
            }
        }

        handler = this._events[type];

        if (isUndefined(handler))
            return false;

        if (isFunction(handler)) {
            switch (arguments.length) {
                // fast cases
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                    // slower
                default:
                    args = Array.prototype.slice.call(arguments, 1);
                    handler.apply(this, args);
            }
        } else if (isObject(handler)) {
            args = Array.prototype.slice.call(arguments, 1);
            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++)
                listeners[i].apply(this, args);
        }

        return true;
    };

    EventEmitter.prototype.addListener = function(type, listener) {
        var m;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events)
            this._events = {};

        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (this._events.newListener)
            this.emit("newListener", type,
                isFunction(listener.listener) ?
                listener.listener : listener);

        if (!this._events[type])
        // Optimize the case of one listener. Don't need the extra array object.
            this._events[type] = listener;
        else if (isObject(this._events[type]))
        // If we've already got an array, just append.
            this._events[type].push(listener);
        else
        // Adding the second element, need to change to array.
            this._events[type] = [this._events[type], listener];

        // Check for listener leak
        if (isObject(this._events[type]) && !this._events[type].warned) {
            if (!isUndefined(this._maxListeners)) {
                m = this._maxListeners;
            } else {
                m = EventEmitter.defaultMaxListeners;
            }

            if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " +
                    "leak detected. %d listeners added. " +
                    "Use emitter.setMaxListeners() to increase limit.",
                    this._events[type].length);
                if (typeof console.trace === "function") {
                    // not supported in IE 10
                    console.trace();
                }
            }
        }

        return this;
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener;

    EventEmitter.prototype.once = function(type, listener) {
        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        var fired = false;

        function g() {
            this.removeListener(type, g);

            if (!fired) {
                fired = true;
                listener.apply(this, arguments);
            }
        }

        g.listener = listener;
        this.on(type, g);

        return this;
    };

    // emits a 'removeListener' event iff the listener was removed
    EventEmitter.prototype.removeListener = function(type, listener) {
        var list, position, length, i;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events || !this._events[type])
            return this;

        list = this._events[type];
        length = list.length;
        position = -1;

        if (list === listener ||
            (isFunction(list.listener) && list.listener === listener)) {
            delete this._events[type];
            if (this._events.removeListener)
                this.emit("removeListener", type, listener);

        } else if (isObject(list)) {
            for (i = length; i-- > 0;) {
                if (list[i] === listener ||
                    (list[i].listener && list[i].listener === listener)) {
                    position = i;
                    break;
                }
            }

            if (position < 0)
                return this;

            if (list.length === 1) {
                list.length = 0;
                delete this._events[type];
            } else {
                list.splice(position, 1);
            }

            if (this._events.removeListener)
                this.emit("removeListener", type, listener);
        }

        return this;
    };

    EventEmitter.prototype.removeAllListeners = function(type) {
        var key, listeners;

        if (!this._events)
            return this;

        // not listening for removeListener, no need to emit
        if (!this._events.removeListener) {
            if (arguments.length === 0)
                this._events = {};
            else if (this._events[type])
                delete this._events[type];
            return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
            for (key in this._events) {
                if (key === "removeListener") continue;
                this.removeAllListeners(key);
            }
            this.removeAllListeners("removeListener");
            this._events = {};
            return this;
        }

        listeners = this._events[type];

        if (isFunction(listeners)) {
            this.removeListener(type, listeners);
        } else if (listeners) {
            // LIFO order
            while (listeners.length)
                this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];

        return this;
    };

    EventEmitter.prototype.listeners = function(type) {
        var ret;
        if (!this._events || !this._events[type])
            ret = [];
        else if (isFunction(this._events[type]))
            ret = [this._events[type]];
        else
            ret = this._events[type].slice();
        return ret;
    };

    EventEmitter.prototype.listenerCount = function(type) {
        if (this._events) {
            var evlistener = this._events[type];

            if (isFunction(evlistener))
                return 1;
            else if (evlistener)
                return evlistener.length;
        }
        return 0;
    };

    EventEmitter.listenerCount = function(emitter, type) {
        return emitter.listenerCount(type);
    };

    function isFunction(arg) {
        return typeof arg === "function";
    }

    function isNumber(arg) {
        return typeof arg === "number";
    }

    function isObject(arg) {
        return typeof arg === "object" && arg !== null;
    }

    function isUndefined(arg) {
        return arg === void 0;
    }
}

});
return ___scope___.entry = "index.js";
});

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = FuseBox.import('vue-hot-reload-api');
          var Vue = FuseBox.import('vue');

          api.install(Vue);

          FuseBox.addPlugin({
            hmrUpdate: function (data) {
              var componentWildcardPath = '~/' + data.path.substr(0, data.path.lastIndexOf('/') + 1) + '*.vue';
              var isComponentStyling = (data.type === "css" && !!FuseBox.import(componentWildcardPath));

              if (data.type === "js" && /.vue$/.test(data.path) || isComponentStyling) {
                var fusePath = '~/' + data.path;

                FuseBox.flush();

                FuseBox.flush(function (file) {
                  return file === data.path;
                });

                FuseBox.dynamic(data.path, data.content);

                if (!isComponentStyling) {
                  var component = FuseBox.import(fusePath).default;
                  api.reload(component._vueModuleId||component.options._vueModuleId, component);
                }

                return true;
              }
            }
          });
        }
        
FuseBox.import("fusebox-hot-reload").connect(5555, "", true)
FuseBox.target = "browser"

FuseBox.import("default/app.js");
FuseBox.main("default/app.js");
})
(FuseBox)