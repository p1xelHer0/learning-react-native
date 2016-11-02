import React from 'react'
import { StyleSheet, View } from 'react-native'

import { connector } from '../../store'
import RoomList from '../RoomList/RoomList'

// const { object } = React.PropTypes

const Action = props => (
  <View style={localStyles.container}>
    <RoomList {...props} style={localStyles.container} />
  </View>
)

const localStyles = StyleSheet.create({
  container: {
    flex: 1
  }
})

// Action.propTypes = propTypes

export default connector(Action)
