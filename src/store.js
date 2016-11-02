import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { connect } from 'react-redux'
import thunk from 'redux-thunk'
import { createSelector } from 'reselect'

import * as actions from './actions'

import categoryReducer, * as fromCategories from './Reducers/categories'
import pointReducer, * as fromPoints from './Reducers/points'
import roomReducer, * as fromRooms from './Reducers/rooms'
import searchTermReducer, * as fromSearchTerm from './Reducers/searchTerm'

export const initialState = {
  categoriesById: fromCategories.initialState,
  pointsById: fromPoints.initialState,
  roomsById: fromRooms.initialState,
  searchTerm: fromSearchTerm.initialState
}

export const rootReducer = combineReducers({
  categoriesById: categoryReducer,
  pointsById: pointReducer,
  roomsById: roomReducer,
  searchTerm: searchTermReducer
})

// enable reactNativeDebugger
// see https://github.com/jhen0409/react-native-debugger
const reactNativeDebuggerHelper =
  global.reduxNativeDevTools ? global.reduxNativeDevTools(/* options */) : noop => noop

// thunk is needed for React Native Debugger
const middleware = compose(
  applyMiddleware(thunk),
  reactNativeDebuggerHelper
)

export const store = createStore(rootReducer, initialState, middleware)

// reduxNativeDevTools
if (global.reduxNativeDevTools) {
  global.reduxNativeDevTools.updateStore(store)
}

// helpers for memoized selectors
const getCategoriesById = state => state.categoriesById
const getPointsById = state => state.pointsById
const getRoomsById = state => state.roomsById
const getSearchTerm = state => state.searchTerm

// memoized selectors

// filter the rooms by the searchTerm from the store
// the implementation itself is in the room reducer (rooms.js)
export const getFilteredRoomsSelector = createSelector(
  [getRoomsById, getSearchTerm],
  (getRoomsById, getSearchTerm) => getFilteredRooms(getRoomsById, getSearchTerm)
)

// call the implementation
export const getFilteredRooms = (roomsById = {}, filter = '') =>
  fromRooms.getFilteredRooms(roomsById, filter)

// selector which sets the category name on the point property
// this way, we don't have to refer to the catagoriesById in the
// store to get the name of the category
// the implementation itself is in the points reducer (points.js)
export const getPointsWithCategorySelector = createSelector(
  [getPointsById, getCategoriesById],
  (getPointsById, getCategoriesById) => getPointsWithCategory(getPointsById, getCategoriesById)
)

// call the implementation
export const getPointsWithCategory = (pointsById = {}, categoriesById = {}) =>
  fromPoints.getPointsWithCategory(pointsById, categoriesById)

const mapStateToProps = state => ({
  categoriesById: state.categoriesById,
  points: getPointsWithCategorySelector(state),
  rooms: getFilteredRoomsSelector(state),
  searchTerm: state.searchTerm
})

export const connector = connect(mapStateToProps, { ...actions })
