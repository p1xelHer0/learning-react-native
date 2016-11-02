/* eslint-env jest */
import roomReducer, * as fromRooms from '../../src/Reducers/rooms'
import {ROOM_ADD, ROOM_POINT_ADD, ROOM_POINTS_TOGGLE} from '../../src/actions'

describe('rooms.js', () => {
  describe('roomReducer', () => {
    it('should handle ROOM_ADD', () => {
      const roomId = 17
      const loction = 'test room 2'
      const state = {
        1: {
          id: 1,
          location: 'test room 1',
          pointIds: [1, 2, 3]
        }
      }
      const action = ROOM_ADD(loction, roomId)
      const newState = roomReducer(state, action)
      expect(newState).toEqual({
        1: {
          id: 1,
          location: 'test room 1',
          pointIds: [1, 2, 3]
        },
        17: {
          id: 17,
          location: 'test room 2',
          pointIds: []
        }
      })
    })

    it('should handle ROOM_POINT_ADD', () => {
      const roomId = 0
      const pointId = 5
      const state = {
        0: {
          id: 0,
          location: 'test room 1',
          pointIds: [1, 2, 3]
        }
      }
      const action = ROOM_POINT_ADD(pointId, roomId)
      const newState = roomReducer(state, action)
      expect(newState).toEqual({
        0: {
          id: 0,
          location: 'test room 1',
          pointIds: [1, 2, 3, 5]
        }
      })
    })

    it('should handle ROOM_POINTS_TOGGLE', () => {
      const roomId = 0
      const showPoints = true
      const state = {
        0: {
          id: 0,
          location: 'test room',
          pointIds: [],
          showPoints
        }
      }
      const action = ROOM_POINTS_TOGGLE(roomId)
      const newState = roomReducer(state, action)
      expect(newState).toEqual({
        0: {
          id: 0,
          location: 'test room',
          pointIds: [],
          showPoints: !showPoints
        }
      })
    })

    describe('getFilteredRooms', () => {
      it('should return the rooms filtered as an array', () => {
        const state = fromRooms.initialState
        const filter = ''
        const filteredRooms = fromRooms.getFilteredRooms(state, filter)
        expect(filteredRooms).toEqual([
          {
            'id': 0,
            'location': 'Entré',
            'pointIds': [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11
            ],
            'showPoints': false
          },
          {
            'id': 1,
            'location': 'Orange samtal',
            'pointIds': [
              12,
              13
            ],
            'showPoints': false
          },
          {
            'id': 2,
            'location': 'Rosa samtal',
            'pointIds': [
              14,
              15
            ],
            'showPoints': false
          },
          {
            'id': 3,
            'location': 'Röd konferens',
            'pointIds': [
              16,
              17
            ],
            'showPoints': false
          },
          {
            'id': 4,
            'location': 'Pentry',
            'pointIds': [
              18,
              19,
              20,
              21,
              22
            ],
            'showPoints': false
          }
        ])
      })
    })
  })
})
