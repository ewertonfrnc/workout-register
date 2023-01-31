import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './app.navigator'
import AccountNavigator from './authentication.navigator'

const isAuthenticated = false
const Navigator = () => {
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  )
}

export default Navigator
