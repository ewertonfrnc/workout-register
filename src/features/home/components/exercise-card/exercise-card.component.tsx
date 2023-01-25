import { FC } from 'react'
import { Box, AspectRatio, Center } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient'

import { Exercise } from '../exercise-list/exercise-list.component'

import { BackgroundImage } from './exercise-card.styles'

export type ExerciseCardProps = {
  exercises: Exercise
}

const ExerciseCard: FC<ExerciseCardProps> = ({ exercises }) => {
  const { name, imgUrl } = exercises

  return (
    <Box rounded='lg' overflow='hidden' marginBottom={4}>
      <AspectRatio w='100%' ratio={16 / 9}>
        <BackgroundImage source={{ uri: imgUrl }}>
          <LinearGradient
            colors={['transparent', '#ea580c']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: '100%',
              opacity: 0.8,
            }}
          ></LinearGradient>
          <Center
            _text={{
              color: 'light.50',
              fontWeight: '700',
              fontSize: 'md',
            }}
            position='absolute'
            bottom='0'
            px='3'
            py='1.5'
          >
            {name}
          </Center>
        </BackgroundImage>
      </AspectRatio>
    </Box>
  )
}

export default ExerciseCard
