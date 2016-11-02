/* eslint-env jest */
import searchTermReducer from '../../src/Reducers/searchTerm'
import { SEARCH_TERM_SET, SEARCH_TERM_REMOVE } from '../../src/actions'

describe('searchTermReducer', () => {
  it('should handle SEARCH_TERM_SET', () => {
    const state = 'initial value to be overwritten by test'
    const action = SEARCH_TERM_SET('correct test value')
    const newState = searchTermReducer(state, action)
    expect(newState).toEqual('correct test value')
  })

  it('should handle SEARCH_TERM_REMOVE', () => {
    const state = 'initial value to be overwritten by test'
    const action = SEARCH_TERM_REMOVE()
    const newState = searchTermReducer(state, action)
    expect(newState).toEqual('')
  })
})
