import React from 'react'
import {
  PixelRatio,
  StyleSheet,
  Text,
  View
} from 'react-native'

import globalStyles from '../App.style'
import Button from '../Button/Button'
import PointList from '../PointList/PointList'
import { darkBrown } from '../Colors.style'

const { arrayOf, bool, func, number, object, string } = React.PropTypes

const propTypes = {
  POINT_APPROVE: func.isRequired,
  POINT_COMMENT_SET: func.isRequired,
  POINT_DECLINE: func.isRequired,
  POINT_TOGGLE_APPROVAL: func.isRequired,
  POINT_TOGGLE_DETAILS: func,
  id: number.isRequired,
  location: string,
  points: arrayOf(object),
  pointIds: arrayOf(number),
  showPoints: bool,
  togglePoints: func
}

const Room = ({
  POINT_APPROVE,
  POINT_COMMENT_SET,
  POINT_DECLINE,
  POINT_TOGGLE_APPROVAL,
  POINT_TOGGLE_DETAILS,
  id,
  location,
  points,
  pointIds,
  showPoints,
  togglePoints
}) => (
  <View>
    <View style={localStyles.container}>
      <Text
        numberOfLines={1}
        style={[globalStyles.text, localStyles.roomName]}
      >
        {location}
      </Text>
      <View style={localStyles.pointCounter}>
        <Text style={globalStyles.text}>{pointIds.length}</Text>
      </View>
      <Button onPress={togglePoints} />
    </View>
    { showPoints ? <PointList
      POINT_APPROVE={POINT_APPROVE}
      POINT_COMMENT_SET={POINT_COMMENT_SET}
      POINT_DECLINE={POINT_DECLINE}
      POINT_TOGGLE_APPROVAL={POINT_TOGGLE_APPROVAL}
      POINT_TOGGLE_DETAILS={POINT_TOGGLE_DETAILS}
      pointIds={pointIds}
      points={points}
                   /> : null}
  </View>
)

const localStyles = StyleSheet.create({
  container: {
    borderColor: darkBrown,
    borderBottomWidth: 1 / PixelRatio.get(),
    flexDirection: 'row'
  },
  pointCounter: {
    padding: 5
  },
  roomName: {
    flex: 1,
    padding: 5
  }
})

Room.propTypes = propTypes

export default Room
