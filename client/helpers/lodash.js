'use strict'

import chunk from 'lodash/chunk'
import cloneDeep from 'lodash/cloneDeep'
import debounce from 'lodash/debounce'
import defaultsDeep from 'lodash/defaultsDeep'
import delay from 'lodash/delay'
import find from 'lodash/find'
import findIndex from 'lodash/findIndex'
import get from 'lodash/get'
import isArray from 'lodash/isArray'
import keys from 'lodash/keys'
import map from 'lodash/map'
import reduce from 'lodash/reduce'
import round from 'lodash/round'
import times from 'lodash/times'
import toString from 'lodash/toString'
import values from 'lodash/values'

const lodash = {
  chunk,
  cloneDeep,
  debounce,
  defaultsDeep,
  delay,
  find,
  findIndex,
  get,
  isArray,
  keys,
  map,
  reduce,
  round,
  times,
  toString,
  values
}

export default {
  install (Vue) {
    Vue._ = lodash
    Object.defineProperties(Vue.prototype, {
      _: {
        get () {
          return lodash
        }
      }
    })
  }
}
