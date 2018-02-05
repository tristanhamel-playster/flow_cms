import api from './api'

export default {
  get: ({ segmentId, tabId }) => api.get(`segment/${segmentId}/tabs/${tabId}`),
  store: ({ segmentId, tab, position = 0 }) => {
    return api.post(`segment/${segmentId}/tabs`, {
      name: tab.title,
      position,
      batch: JSON.stringify(tab.blocks.map((e, i) => ({
        id: e.blockId,
        status: 0,
        position: i
      })))
    })
  },
  update: ({ segmentId, tab, position = 0 }) => {
    return api.put(`segment/${segmentId}/tabs/${tab.id}`, {
      name: tab.title,
      position,
      batch: JSON.stringify(tab.blocks.map((e, i) => ({
        id: e.blockId,
        status: 0,
        position: i
      })))
    })
  },
  delete: ({ segmentId, tabId }) => {
    return api.delete(`segment/${segmentId}/tabs/${tabId}`)
  }
}
