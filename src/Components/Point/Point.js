import React from 'react'
import {
  PixelRatio,
  StyleSheet,
  Text,
  View
} from 'react-native'

import globalStyles from '../App.style'
import Button from '../Button/Button'
import PointDetails from '../PointDetails/PointDetails'

const { bool, func, object, number, string } = React.PropTypes

const propTypes = {
  approve: func.isRequired,
  approval: bool,
  category: string,
  comment: string,
  date: string,
  decline: func.isRequired,
  id: number.isRequired,
  setComment: func,
  showDetails: bool,
  style: object,
  toggleApproval: func.isRequired,
  toggleDetails: func
}

const Point = props => (
  <View>
    <View style={localStyles.container}>
      <Text
        onPress={props.toggleDetails}
        numberOfLines={1}
        style={[globalStyles.text, localStyles.pointName]}>
        {props.category}
      </Text>
      <Button onPress={props.decline} danger />
      <Button onPress={props.approve} success />
    </View>
    { props.showDetails ? <PointDetails {...props} /> : null }
  </View>
)

const localStyles = StyleSheet.create({
  container: {
    borderBottomWidth: 1 / PixelRatio.get(),
    flexDirection: 'row'
  },
  pointName: {
    flex: 1,
    padding: 5
  }
})

Point.propTypes = propTypes

export default Point
