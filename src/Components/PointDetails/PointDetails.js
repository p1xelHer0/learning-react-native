import React from 'react'
import {
  PixelRatio,
  StyleSheet,
  TextInput,
  View
} from 'react-native'

import globalStyles from '../App.style'
import Button from '../Button/Button'
import GlobalColors from '../Colors.style.js'

const { bool, func, number, string } = React.PropTypes

const propTypes = {
  approval: bool,
  category: string,
  comment: string,
  date: string,
  id: number.isRequired,
  pointName: string,
  setComment: func.isRequired,
  toggleApproval: func.isRequired
}

const PointDetails = ({
  approval,
  category,
  comment,
  date,
  id,
  setComment,
  toggleApproval
}) => (
  <View style={localStyles.container}>
    <TextInput
      multiline
      numberOfLines={4}
      onChangeText={text => setComment(text, id)}
      placeholder='Kommentar'
      style={[globalStyles.text, localStyles.commentArea]}
      value={comment}
    />
    <Button onPress={toggleApproval} />
  </View>
)

const localStyles = StyleSheet.create({
  commentArea: {
    backgroundColor: GlobalColors.backgroundLighter,
    flex: 4,
    height: 100,
    padding: 5
  },
  container: {
    borderBottomWidth: 1 / PixelRatio.get(),
    flexDirection: 'column',
    padding: 15
  }
})

PointDetails.propTypes = propTypes

export default PointDetails
