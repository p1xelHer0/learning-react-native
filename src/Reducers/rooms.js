import { roomsById } from '../test_data'

export const initialState = roomsById

const roomReducer = (state = initialState, action = {}) => {
  const { payload, type } = action
  switch (type) {
    case 'ROOM_ADD':
      return {
        ...state,
        [payload.roomId]: payload.room
      }
    case 'ROOM_POINT_ADD':
      return {
        ...state,
        [payload.roomId]: {
          ...state[payload.roomId],
          pointIds: [ ...state[payload.roomId].pointIds, payload.pointId ]
        }
      }
    case 'ROOM_POINTS_TOGGLE':
      return {
        ...state,
        [payload.roomId]: {
          ...state[payload.roomId],
          showPoints: !state[payload.roomId].showPoints
        }
      }
    default:
      return state
  }
}

// only return the rooms which matches the filterTerm
export const getFilteredRooms = (state, filterTerm) =>
  Object.keys(state)
    .map(roomId => state[roomId])
    .filter(room => room.location.toUpperCase().indexOf(filterTerm.toUpperCase()) >= 0)

export default roomReducer
