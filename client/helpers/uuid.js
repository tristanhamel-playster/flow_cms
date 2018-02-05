import uuid from 'uuid/v4'

export default {
  install (Vue) {
    Vue.uuid = uuid
    Object.defineProperties(Vue.prototype, {
      uuid: {
        get () {
          return uuid
        }
      }
    })
  }
}
