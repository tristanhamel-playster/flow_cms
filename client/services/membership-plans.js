import api from './api'

export default {
  getAll: () => api.get('membership_plans'),
  get: ({ planId }) => api.get(`membership_plans/${planId}`),
  store: ({ title }) => {
    return api.post('membership_plans', { name: title, status: 1 })
  },
  update: ({ id, title }) => api.put(`membership_plans/${id}`, { name: title }),
  delete: ({ planId }) => api.delete(`membership_plans/${planId}`)
}
