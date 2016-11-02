import { StyleSheet } from 'react-native'

import GlobalColors from './Colors.style'

// Global StyleSheet
// can be passed down as 'style' prop to child components (to get a CSS-feel)
// or just imported inside the component itself
export default StyleSheet.create({
  background1: {
    backgroundColor: GlobalColors.background1
  },
  background2: {
    backgroundColor: GlobalColors.background2
  },
  background3: {
    backgroundColor: GlobalColors.background3
  },
  text: {
    color: GlobalColors.text,
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 17
  }
})
