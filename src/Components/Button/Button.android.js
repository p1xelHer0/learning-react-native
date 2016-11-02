import React from 'react'
import {
  Text,
  TouchableNativeFeedback,
  View
} from 'react-native'

import Colors from '../Colors.style'
import buttonStyle from './Button.style'

const { arrayOf, bool, func, oneOfType } = React.PropTypes

const propTypes = {
  disabled: bool,
  danger: bool,
  onPress: func.isRequired,
  style: oneOfType([arrayOf(Text.propTypes.style), Text.propTypes.style]),
  success: bool,
  warning: bool
}

const Button = ({
  disabled,
  danger,
  onPress,
  style = buttonStyle.fallback,
  success,
  warning
}) => (
  <TouchableNativeFeedback>
    disabled={disabled}
    onPress={onPress}
  >
    <View style={[buttonStyle.dimensions, setColorByProp(success, warning, danger), style]} />
  </TouchableNativeFeedback>
)

const setColorByProp = (success, warning, danger) => {
  if (danger) return { backgroundColor: Colors.danger }
  if (warning) return { backgroundColor: Colors.warning }
  if (success) return { backgroundColor: Colors.success }
  return { backgroundColor: Colors.button }
}

Button.propTypes = propTypes

export default Button
