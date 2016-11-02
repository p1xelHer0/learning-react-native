/* eslint-env jest */
import categoryReducer from '../../src/Reducers/categories'
import { CATEGORY_ADD } from '../../src/actions'

describe('categoryReducer', () => {
  it('should handle CATEGORY_ADD', () => {
    const categoryId = 2
    const action = CATEGORY_ADD('new test category', categoryId)
    const state = {
      0: 'test category 0',
      1: 'test category 1'
    }
    const newState = categoryReducer(state, action)
    expect(newState).toEqual({
      0: 'test category 0',
      1: 'test category 1',
      [categoryId]: 'new test category'
    })
  })
})
