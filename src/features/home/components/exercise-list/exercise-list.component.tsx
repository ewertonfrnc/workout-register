import { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { Box, ScrollView, Heading, HStack } from 'native-base'

import { Exercise, ExercisesArr } from '../../screens/home.screen'

import ExerciseCard from '../exercise-card'

export type ExerciseListProps = {
  exercises: ExercisesArr[]
  handleNavigation: (exercise: Exercise) => void
}

const ExerciseList: FC<ExerciseListProps> = ({
  exercises,
  handleNavigation,
}) => {
  return (
    <ScrollView>
      {exercises.map((exercise) => {
        const { group, exercises } = exercise.muscleGroup

        return (
          <Box>
            <Heading size='md' color={'light.50'} mb={2}>
              {group}
            </Heading>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HStack space={4}>
                {exercises.map((exercise) => (
                  <TouchableOpacity
                    key={exercise.name}
                    activeOpacity={0.5}
                    onPress={() => handleNavigation(exercise)}
                  >
                    <>
                      <ExerciseCard key={exercise.name} exercise={exercise} />
                    </>
                  </TouchableOpacity>
                ))}
              </HStack>
            </ScrollView>
          </Box>
        )
      })}
    </ScrollView>
  )
}

export default ExerciseList
