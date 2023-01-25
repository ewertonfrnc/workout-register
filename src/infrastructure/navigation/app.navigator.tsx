import { StyleSheet } from 'react-native'
import { Text, View } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BlurView } from 'expo-blur'

import Ionicons from '@expo/vector-icons/Ionicons'

import ExercisesNavigator from './exercices.navigator'

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          flex: 0.1,
          backgroundColor: '#171717',
          paddingBottom: 15,
        },
        tabBarLabelStyle: {
          color: '#FFFFFF',
          fontWeight: 'bold',
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={ExercisesNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name={'fitness'} size={32} color={'#FFFFFF'} />
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name={'settings'} size={32} color={'#FFFFFF'} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default AppNavigator
