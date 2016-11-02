/* eslint-env jest */
import React from 'react'
import 'react-native'

// test renderer must be required after react-native
import renderer from 'react-test-renderer'

import { initialState, getFilteredRooms } from '../../src/store'
import RoomList from '../../src/Components/RoomList/RoomList'

// we don't want the test to depend on styling
const testStyle = {}

describe('<RoomList />', () => {
  it('should match the snapshot', () => {
    const rooms = getFilteredRooms(initialState.roomsById, initialState.searchTerm)
    const roomList = renderer.create(
      <RoomList rooms={rooms} style={testStyle} />
    ).toJSON()
    expect(roomList).toMatchSnapshot()
  })
})
