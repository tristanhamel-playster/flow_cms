import api from './api'
import _map from 'lodash/map'

export default {
  get: ({ segmentId }) => api.get(`/${segmentId}/filters/`),
  getTypes: () => api.get('/filter_types'),
  getOperations: () => api.get('/filter_operations'),
  store: ({ segmentId, filter }) => {
    const requestJson = _map(filter.and[0].or, oF => ({
      filter_type_id: parseInt(oF.key, 10),
      value: { op: oF.operation, value: oF.value },
      status: 0
    }))

    return api.post(`segment/${segmentId}/filters/`, {
      batch: JSON.stringify(requestJson)
    })
  },
  update: ({ segmentId, filter }) => {
    const requestJson = _map(filter.and[0].or, oF => ({
      filter_type_id: parseInt(oF.key, 10),
      value: { op: oF.operation, value: oF.value },
      status: 0
    }))

    return api.put(`segment/${segmentId}/filters/`, {
      batch: JSON.stringify(requestJson)
    })
  },
  delete: ({ segmentId, filterId }) => api.delete(`/${segmentId}/filters/${filterId}`)
}
