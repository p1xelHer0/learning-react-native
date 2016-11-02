import React from 'react'
import { StyleSheet, View } from 'react-native'

import Point from '../Point/Point'

const { arrayOf, func, number, object } = React.PropTypes

const propTypes = {
  POINT_APPROVE: func.isRequired,
  POINT_COMMENT_SET: func.isRequired,
  POINT_DECLINE: func.isRequired,
  POINT_TOGGLE_APPROVAL: func.isRequired,
  POINT_TOGGLE_DETAILS: func,
  categoriesById: object,
  pointIds: arrayOf(number),
  points: arrayOf(object)
}

const PointList = ({
  POINT_APPROVE,
  POINT_COMMENT_SET,
  POINT_DECLINE,
  POINT_TOGGLE_APPROVAL,
  POINT_TOGGLE_DETAILS,
  categoriesById,
  points,
  pointIds
}) => (
  <View style={localStyles.container}>
    {pointIds
      .map(pointId => (
        <Point
          {...points[pointId]}
          approve={() => POINT_APPROVE(pointId)}
          decline={() => POINT_DECLINE(pointId)}
          key={pointId}
          setComment={POINT_COMMENT_SET}
          toggleApproval={() => POINT_TOGGLE_APPROVAL(pointId)}
          toggleDetails={() => POINT_TOGGLE_DETAILS(pointId)}
        />
      ))
    }
  </View>
)

const localStyles = StyleSheet.create({
  container: {
    flex: 1
  }
})

PointList.propTypes = propTypes

export default PointList
