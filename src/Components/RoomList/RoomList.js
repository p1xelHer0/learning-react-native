import React from 'react'
import { ListView, StyleSheet } from 'react-native'

import Room from '../Room/Room'

const { arrayOf, func, object } = React.PropTypes

const propTypes = {
  POINT_APPROVE: func.isRequired,
  POINT_COMMENT_SET: func.isRequired,
  POINT_DECLINE: func.isRequired,
  POINT_TOGGLE_APPROVAL: func.isRequired,
  POINT_TOGGLE_DETAILS: func,
  ROOM_POINTS_TOGGLE: func,
  points: arrayOf(object),
  rooms: arrayOf(object)
}

const RoomList = ({
  POINT_APPROVE,
  POINT_COMMENT_SET,
  POINT_DECLINE,
  POINT_TOGGLE_APPROVAL,
  POINT_TOGGLE_DETAILS,
  ROOM_POINTS_TOGGLE,
  points,
  rooms
}) => {
  const ds = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2
  })
  const dataSource = ds.cloneWithRows(rooms)
  return (
    <ListView
      enableEmptySections
      style={localStyles.container}
      dataSource={dataSource}
      renderRow={
        room =>
          <Room
            {...room}
            POINT_APPROVE={POINT_APPROVE}
            POINT_COMMENT_SET={POINT_COMMENT_SET}
            POINT_DECLINE={POINT_DECLINE}
            POINT_TOGGLE_APPROVAL={POINT_TOGGLE_APPROVAL}
            POINT_TOGGLE_DETAILS={POINT_TOGGLE_DETAILS}
            key={room.id}
            points={points}
            togglePoints={() => ROOM_POINTS_TOGGLE(room.id)}
          />
      }
    />
  )
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1
  }
})

RoomList.propTypes = propTypes

export default RoomList
