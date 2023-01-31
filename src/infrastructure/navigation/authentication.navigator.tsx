import {
  createStackNavigator,
  TransitionPresets,
  StackNavigationOptions,
} from '@react-navigation/stack'

import Login from '../../features/authentication/screens/login.screen'
import Register from '../../features/authentication/screens/register.screen'

export type RootStackParamList = {
  Login: undefined
  Register: undefined
}

const RootStack = createStackNavigator<RootStackParamList>()

const options: StackNavigationOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
}

import React from 'react'

const AccountNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={options}>
      <RootStack.Screen name='Login' component={Login} />
      <RootStack.Screen name='Register' component={Register} />
    </RootStack.Navigator>
  )
}

export default AccountNavigator
