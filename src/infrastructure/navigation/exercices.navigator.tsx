import {
  createStackNavigator,
  TransitionPresets,
  StackNavigationOptions,
} from '@react-navigation/stack'

import HomeScreen, {
  Exercise,
} from '../../features/home/screens/home.screen'
import ExerciseDetailScreen from '../../features/home/screens/exercise-detail.screen'

export type RootStackParamList = {
  Home: undefined
  ExerciseDetails: { exercise: Exercise }
}

const RootStack = createStackNavigator<RootStackParamList>()

const options: StackNavigationOptions = {
  headerShown: false,
  ...TransitionPresets.ModalPresentationIOS,
}

const ExercisesNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName='Home' screenOptions={options}>
      <RootStack.Screen name='Home' component={HomeScreen} />
      <RootStack.Screen
        name='ExerciseDetails'
        component={ExerciseDetailScreen}
      />
    </RootStack.Navigator>
  )
}

export default ExercisesNavigator
