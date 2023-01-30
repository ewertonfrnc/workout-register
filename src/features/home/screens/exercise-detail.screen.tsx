import { FC } from 'react'

import {
  View,
  Box,
  Text,
  Heading,
  HStack,
  Image,
  ScrollView,
  Button,
  Fab,
  Center,
} from 'native-base'

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { RootStackParamList } from '../../../infrastructure/navigation/exercices.navigator'
import ExerciseCard from '../components/exercise-card'

export type ExerciseDetailScreeProps = BottomTabScreenProps<
  RootStackParamList,
  'ExerciseDetails'
>

const ExerciseDetailScreen: FC<ExerciseDetailScreeProps> = ({ route }) => {
  const { exercise } = route.params

  return (
    <View flex={1} backgroundColor='muted.900'>
      <Box flex={0.7}>
        <ExerciseCard exercise={exercise} />
      </Box>

      <Box flex={1} p={6} bg='white' mt={-20} borderTopRadius={30}>
        <Heading mb={2} color='muted.900'>
          {exercise.name}
        </Heading>

        <Box borderRadius={10} p={2}>
          <Text fontSize='md' color='muted.900'>
            Agosto, 2023
          </Text>

          <HStack mb={2} mt={2}>
            <Text flex={1} textAlign='center' fontSize='md' color='muted.900'>
              Semana
            </Text>
            <Text flex={1} textAlign='center' fontSize='md' color='muted.900'>
              Peso
            </Text>
            <Text flex={1} textAlign='center' fontSize='md' color='muted.900'>
              RM
            </Text>
          </HStack>

          <HStack mb={4} space={4}>
            <Text
              flex={1}
              textAlign='center'
              p={2}
              borderRadius={50}
              fontSize='md'
              color='muted.500'
            >
              01
            </Text>
            <Text
              flex={1}
              textAlign='center'
              p={2}
              borderRadius={50}
              fontSize='md'
              color='muted.500'
            >
              50kg
            </Text>
            <Text
              flex={1}
              textAlign='center'
              p={2}
              borderRadius={50}
              fontSize='md'
              color='muted.500'
            >
              12
            </Text>
          </HStack>

          <HStack mb={4} space={4}>
            <Text
              flex={1}
              textAlign='center'
              p={2}
              borderRadius={50}
              fontSize='md'
              color='muted.500'
            >
              02
            </Text>
            <Text
              flex={1}
              textAlign='center'
              p={2}
              borderRadius={50}
              fontSize='md'
              color='muted.500'
            >
              50kg
            </Text>
            <Text
              flex={1}
              textAlign='center'
              p={2}
              borderRadius={50}
              fontSize='md'
              color='muted.500'
            >
              12
            </Text>
          </HStack>

          <HStack mb={4} space={4}>
            <Text
              flex={1}
              textAlign='center'
              p={2}
              borderRadius={50}
              fontSize='md'
              color='muted.500'
            >
              03
            </Text>
            <Text
              flex={1}
              textAlign='center'
              p={2}
              borderRadius={50}
              fontSize='md'
              color='muted.500'
            >
              50kg
            </Text>
            <Text
              bg={'light.50'}
              flex={1}
              textAlign='center'
              p={2}
              borderRadius={50}
              fontSize='md'
              color='muted.500'
            >
              12
            </Text>
          </HStack>

          <HStack mb={4} space={4}>
            <Text
              flex={1}
              textAlign='center'
              bg={'light.50'}
              p={2}
              borderRadius={50}
              fontSize='md'
              color='muted.900'
              fontWeight='bold'
            >
              04
            </Text>

            <Text
              flex={1}
              textAlign='center'
              bg={'light.50'}
              p={2}
              borderRadius={50}
              fontSize='md'
              color='muted.900'
              fontWeight='bold'
            >
              50kg
            </Text>

            <Text
              flex={1}
              textAlign='center'
              bg={'light.50'}
              p={2}
              borderRadius={50}
              fontSize='md'
              color='muted.900'
              fontWeight='bold'
            >
              12
            </Text>
          </HStack>
        </Box>
      </Box>
    </View>
  )
}

export default ExerciseDetailScreen
