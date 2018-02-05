import api from './api'

export default {
  getAll: () => api.get('membership_blocks'),
  get: ({ blockId }) => api.get(`membership_blocks/${blockId}`),
  store: ({ title, membershipIds, status }) => {
    return api.post('membership_blocks', {
      name: title,
      status,
      batch: JSON.stringify({
        membership_ids: membershipIds.join(',')
      })
    })
  },
  update (block) {
    return block.modified ? this.updateBlock(block) : this.updateBlockSegment(block)
  },
  updateBlock ({ id, title, status, layoutId }) {
    return api.put(`membership_blocks/${id}`, {
      name: title,
      status,
      layout_id: layoutId
    })
  },
  updateBlockSegment ({ memberships, id, segmentId, segmentModified }) {
    return api.put(`membership_blocks/${id}/blocks_segments/${segmentId}`, {
      batch: JSON.stringify(memberships)
    })
  },

  delete: ({ blockId }) => api.delete(`membership_blocks/${blockId}`)
}
