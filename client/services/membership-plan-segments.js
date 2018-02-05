import api from './api'

export default {
  get: ({ segmentId }) => api.get(`segment/${segmentId}`),

  store: ({ planId, segmentId, position = 0, status = 1 }) => {
    return api.post(`membership_plans/${planId}/segment`, {
      name: segmentId,
      membership_plan_id: planId,
      status,
      position
    })
  },

  update: ({ segment }) => Promise.resolve({ data: segment }),

  delete: () => {}
}
