/* eslint-env jest */
import { rootReducer, initialState, getFilteredRooms, getPointsWithCategory } from '../src/store'

describe('store.js', () => {
  describe('rootReducer', () => {
    it('should return the initialState', () => {
      const state = rootReducer(undefined, { type: '@@redux/INIT' })
      expect(state).toEqual(initialState)
    })
  })

  describe('getFilteredRooms', () => {
    const roomsById = initialState.roomsById
    const selectorRooms = [
      {
        'id': 0,
        'location': 'Entré',
        'pointIds': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'showPoints': false
      },
      {
        'id': 1,
        'location': 'Orange samtal',
        'pointIds': [12, 13],
        'showPoints': false
      },
      {
        'id': 2,
        'location': 'Rosa samtal',
        'pointIds': [14, 15],
        'showPoints': false
      },
      {
        'id': 3,
        'location': 'Röd konferens',
        'pointIds': [16, 17],
        'showPoints': false
      },
      {
        'id': 4,
        'location': 'Pentry',
        'pointIds': [18, 19, 20, 21, 22],
        'showPoints': false
      }
    ]

    // rooms filtered by 'samtal' and 'SaMtAl'
    const selectorRoomsFiltered = [
      {
        'id': 1,
        'location': 'Orange samtal',
        'pointIds': [12, 13],
        'showPoints': false
      },
      {
        'id': 2,
        'location': 'Rosa samtal',
        'pointIds': [14, 15],
        'showPoints': false
      }
    ]

    it('should return the rooms as an array', () => {
      const state = roomsById
      const newState = getFilteredRooms(state, undefined)
      expect(newState).toEqual(selectorRooms)
    })

    it('should return the rooms filtered by the searchTerm', () => {
      const state = roomsById
      const filter = 'samtal'
      const filteredRooms = getFilteredRooms(state, filter)
      expect(filteredRooms).toEqual(selectorRoomsFiltered)
    })

    it('should return the rooms filtered by the searchTerm, ignoring case', () => {
      const state = roomsById
      const filter = 'SaMtAl'
      const filteredRooms = getFilteredRooms(state, filter)
      expect(filteredRooms).toEqual(selectorRoomsFiltered)
    })
  })

  describe('getFilteredRoomsSelector', () => {
    const pointsById = {
      0: {
        id: 0,
        categoryId: 1,
        approval: false,
        comment: 'This is a testing comment which is supposed to be very looooooong please break the row you dumb comment, thanks!',
        date: '',
        showDetails: false
      },
      1: {
        id: 1,
        categoryId: 3,
        approval: false,
        comment: '',
        date: '',
        showDetails: false
      }
    }
    const categoriesById = {
      0: 'Belysning, ej blinkande',
      1: 'Brandfilten är på rätt location',
      2: 'Brandfilten är skyltad',
      3: 'Brandfilten är upphängd'
    }

    it('should return the points as an array, with the category property set', () => {
      const state = pointsById
      const filteredRooms = getPointsWithCategory(state, categoriesById)
      expect(filteredRooms).toEqual([
        {
          id: 0,
          category: 'Brandfilten är på rätt location',
          categoryId: 1,
          approval: false,
          comment: 'This is a testing comment which is supposed to be very looooooong please break the row you dumb comment, thanks!',
          date: '',
          showDetails: false
        },
        {
          id: 1,
          category: 'Brandfilten är upphängd',
          categoryId: 3,
          approval: false,
          comment: '',
          date: '',
          showDetails: false
        }
      ])
    })
  })
})
