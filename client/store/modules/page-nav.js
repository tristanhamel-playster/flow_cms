import loIsArray from 'lodash/isArray'
import loIsPlainObject from 'lodash/isPlainObject'
import loIsString from 'lodash/isString'
import loIsEmpty from 'lodash/isEmpty'

export default {
  namespaced: true,
  state: {
    empty: true,
    title: '',
    description: '',
    navigation: []
  },
  mutations: {
    reset (state) {
      state.empty = true
      state.title = ''
      state.description = ''
      state.navigation = []
    },
    updateTitle (state, value) {
      state.title = value
      state.empty = (state.empty && !loIsEmpty(value)) ? false : state.empty
    },
    updateDescription (state, value) {
      state.description = value
      state.empty = (state.empty && !loIsEmpty(value)) ? false : state.empty
    },
    updateNavigation (state, value) {
      if (!loIsArray(value)) {
        throw new Error('Navigation format is not valid!')
      }

      for (let i = 0; i < value.length; i++) {
        if (
          !loIsString(value[i].label) ||
          !loIsString(value[i].href)
        ) {
          throw new Error('Navigation format is not valid!')
        }
      }

      state.navigation = value
      state.empty = (state.empty && !loIsEmpty(value)) ? false : state.empty
    }

  }
}
