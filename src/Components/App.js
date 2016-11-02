import React from 'react'
import { PixelRatio, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'

import { store } from '../store'
import Action from './Action/Action'

const App = () => (
  <View style={localStyles.container}>
    <StatusBar barStyle={'default'} />
    <View style={localStyles.headerContainer}>
      <Text style={localStyles.header}>😎</Text>
    </View>
    <Provider store={store}>
      {/* this probably shouldn't be called <Action />, to prevent mixups with the
      actual action from the redux store, but I have not refactored it yet! */}
      <Action />
    </Provider>
  </View>
)

const localStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    fontSize: 50,
    padding: 5
  },
  headerContainer: {
    borderBottomWidth: 1 / PixelRatio.get(),
    height: 65,
    marginTop: 20,
    alignItems: 'center'
  }
})

export default App
