/* eslint-env jest */
import pointReducer, * as fromPoints from '../../src/Reducers/points'
import { initialState as categoriesById } from '../../src/Reducers/categories'
import {
  POINT_ADD,
  POINT_APPROVE,
  POINT_DECLINE,
  POINT_COMMENT_SET,
  POINT_TOGGLE_APPROVAL,
  POINT_TOGGLE_DETAILS
} from '../../src/actions'

describe('pointReducer', () => {
  it('should handle POINT_ADD', () => {
    const pointId = 5
    const state = {
      0: {
        id: 0,
        description: 'Ytterdörr ska vara lätt öppningsbar utan nyckel',
        approval: false,
        comment: '',
        date: '',
        showDetails: false
      }
    }
    const testPoint = {
      id: pointId,
      description: 'test point',
      approval: false,
      comment: '',
      date: '',
      showDetails: false
    }
    const action = POINT_ADD(testPoint, pointId)
    const newState = pointReducer(state, action)
    expect(newState).toEqual({
      0: {
        id: 0,
        description: 'Ytterdörr ska vara lätt öppningsbar utan nyckel',
        approval: false,
        comment: '',
        date: '',
        showDetails: false
      },
      5: {
        id: pointId,
        description: 'test point',
        approval: false,
        comment: '',
        date: '',
        showDetails: false
      }
    })
  })

  it('should handle POINT_APPROVE', () => {
    const pointId = 0
    const state = {
      0: {
        id: pointId,
        description: 'Ytterdörr ska vara lätt öppningsbar utan nyckel',
        approval: false,
        comment: '',
        date: '',
        showDetails: false
      }
    }
    const action = POINT_APPROVE(pointId)
    const newState = pointReducer(state, action)
    expect(newState).toEqual({
      0: {
        id: pointId,
        description: 'Ytterdörr ska vara lätt öppningsbar utan nyckel',
        approval: true,
        comment: '',
        date: '',
        showDetails: false
      }
    })
  })

  it('should handle POINT_DECLINE', () => {
    const pointId = 0
    const state = {
      0: {
        description: 'Ytterdörr ska vara lätt öppningsbar utan nyckel',
        approval: true,
        comment: '',
        date: '',
        showDetails: false
      }
    }
    const action = POINT_DECLINE(pointId)
    const newState = pointReducer(state, action)
    expect(newState[pointId].approval).toEqual(false)
  })

  it('should handle POINT_COMMENT_SET', () => {
    const pointId = 0
    const comment = 'This is a test comment'
    const state = {
      0: {
        id: pointId,
        description: 'Ytterdörr ska vara lätt öppningsbar utan nyckel',
        approval: false,
        comment: '',
        date: '',
        showDetails: false
      }
    }
    const action = POINT_COMMENT_SET(comment, pointId)
    const newState = pointReducer(state, action)
    expect(newState).toEqual({
      0: {
        id: pointId,
        description: 'Ytterdörr ska vara lätt öppningsbar utan nyckel',
        approval: false,
        comment: comment,
        date: '',
        showDetails: false
      }
    })
  })

  it('should handle POINT_TOGGLE_APPROVAL', () => {
    const pointId = 0
    const approval = false
    const state = {
      0: {
        id: pointId,
        description: 'Ytterdörr ska vara lätt öppningsbar utan nyckel',
        approval: !approval,
        comment: '',
        date: '',
        showDetails: false
      }
    }
    const action = POINT_TOGGLE_APPROVAL(pointId)
    const newState = pointReducer(state, action)
    expect(newState).toEqual({
      0: {
        id: pointId,
        description: 'Ytterdörr ska vara lätt öppningsbar utan nyckel',
        approval: approval,
        comment: '',
        date: '',
        showDetails: false
      }
    })
  })

  it('should handle POINT_TOGGLE_DETAILS', () => {
    const pointId = 0
    const showDetails = false
    const state = {
      0: {
        id: pointId,
        description: 'Ytterdörr ska vara lätt öppningsbar utan nyckel',
        approval: false,
        comment: '',
        date: '',
        showDetails
      }
    }
    const action = POINT_TOGGLE_DETAILS(pointId)
    const newState = pointReducer(state, action)
    expect(newState).toEqual({
      0: {
        id: pointId,
        description: 'Ytterdörr ska vara lätt öppningsbar utan nyckel',
        approval: false,
        comment: '',
        date: '',
        showDetails: !showDetails
      }
    })
  })

  describe('getPointsWithCategory', () => {
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
      const filteredRooms = fromPoints.getPointsWithCategory(state, categoriesById)
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
