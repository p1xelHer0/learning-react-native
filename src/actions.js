// FSA-compliant actions
// see https://github.com/acdlite/flux-standard-action

// searchReducer
export const SEARCH_TERM_SET = searchTerm => ({
  type: 'SEARCH_TERM_SET',
  payload: { searchTerm }
})

export const SEARCH_TERM_REMOVE = () => ({
  type: 'SEARCH_TERM_REMOVE'
})

// roomReducer
export const ROOM_ADD = (location, roomId) => ({
  type: 'ROOM_ADD',
  payload: {
    roomId,
    room: { id: roomId, location, pointIds: [] }
  }
})

export const ROOM_POINT_ADD = (pointId, roomId) => ({
  type: 'ROOM_POINT_ADD',
  payload: {
    roomId,
    pointId
  }
})

export const ROOM_POINTS_TOGGLE = roomId => ({
  type: 'ROOM_POINTS_TOGGLE',
  payload: { roomId }
})

// pointReducer
export const POINT_ADD = (point, pointId) => ({
  type: 'POINT_ADD',
  payload: { pointId, point }
})

export const POINT_APPROVE = pointId => ({
  type: 'POINT_APPROVE',
  payload: { pointId }
})

export const POINT_DECLINE = pointId => ({
  type: 'POINT_DECLINE',
  payload: { pointId }
})

export const POINT_COMMENT_SET = (comment, pointId) => ({
  type: 'POINT_COMMENT_SET',
  payload: {
    pointId,
    comment
  }
})

export const POINT_TOGGLE_APPROVAL = pointId => ({
  type: 'POINT_TOGGLE_APPROVAL',
  payload: { pointId }
})

export const POINT_TOGGLE_DETAILS = pointId => ({
  type: 'POINT_TOGGLE_DETAILS',
  payload: { pointId }
})

// categoryReducer
export const CATEGORY_ADD = (categoryName, categoryId) => ({
  type: 'CATEGORY_ADD',
  payload: { categoryId, categoryName }
})
