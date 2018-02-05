import api from './api'

export default {
  getAll: ({ params = {} } = {}) => {
    return api.get('memberships', {
      params: {
        limit: 1000,
        ...params
      }
    })
  }
}
