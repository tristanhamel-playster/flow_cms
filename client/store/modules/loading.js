export default {
  state: {
    shown: false
  },
  mutations: {
    showLoadingBar (state) { state.shown = true },
    hideLoadingBar (state) { state.shown = false }
  },
  actions: {
    showLoadingBar ({ commit }) { commit('showLoadingBar') },
    hideLoadingBar ({ commit }) { commit('hideLoadingBar') }
  }
}
