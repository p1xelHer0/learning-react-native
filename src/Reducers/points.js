import { pointsById } from '../test_data'

export const initialState = pointsById

const pointReducer = (state = initialState, action = {}) => {
  const { payload, type } = action
  switch (type) {
    case 'POINT_ADD':
      return {
        ...state,
        [payload.pointId]: payload.point
      }
    case 'POINT_APPROVE':
      return {
        ...state,
        [payload.pointId]: {
          ...state[payload.pointId],
          approval: true
        }
      }
    case 'POINT_DECLINE':
      return {
        ...state,
        [payload.pointId]: {
          ...state[payload.pointId],
          approval: false
        }
      }
    case 'POINT_COMMENT_SET':
      return {
        ...state,
        [payload.pointId]: {
          ...state[payload.pointId],
          comment: payload.comment
        }
      }
    case 'POINT_TOGGLE_APPROVAL':
      return {
        ...state,
        [payload.pointId]: {
          ...state[payload.pointId],
          approval: !state[payload.pointId].approval
        }
      }
    case 'POINT_TOGGLE_DETAILS':
      return {
        ...state,
        [payload.pointId]: {
          ...state[payload.pointId],
          showDetails: !state[payload.pointId].showDetails
        }
      }
    default:
      return state
  }
}

// set the category property of each point
export const getPointsWithCategory = (state, categoriesById) =>
  Object.keys(state)
  .map(pointId => state[pointId])
  .map(point => ({
    ...point,
    category: categoriesById[point.categoryId]
  }))

export default pointReducer
