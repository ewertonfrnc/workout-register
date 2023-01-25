import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './app.navigator'

const Navigator = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}

export default Navigator
