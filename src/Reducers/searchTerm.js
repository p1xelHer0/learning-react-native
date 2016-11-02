export const initialState = ''

const searchTermReducer = (state = initialState, action = {}) => {
  const { payload, type } = action
  switch (type) {
    case 'SEARCH_TERM_SET':
      return payload.searchTerm
    case 'SEARCH_TERM_REMOVE':
      return ''
    default:
      return state
  }
}

export default searchTermReducer
