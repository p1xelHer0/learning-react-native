import { categoriesById } from '../test_data'

export const initialState = categoriesById

const categoryReducer = (state = initialState, action = {}) => {
  const { payload, type } = action
  switch (type) {
    case 'CATEGORY_ADD':
      return {
        ...state,
        [payload.categoryId]: payload.categoryName
      }
    default:
      return state
  }
}

export default categoryReducer
