import { FC } from 'react'
import { View, Text } from 'native-base'

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { RootStackParamList } from '../../../infrastructure/navigation/exercices.navigator'

export type ExerciseDetailScreeProps = BottomTabScreenProps<
  RootStackParamList,
  'ExerciseDetails'
>

const ExerciseDetailScreen: FC<ExerciseDetailScreeProps> = ({ route }) => {
  const { exercise } = route.params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{exercise.exerciseObj.name}</Text>
    </View>
  )
}

export default ExerciseDetailScreen
