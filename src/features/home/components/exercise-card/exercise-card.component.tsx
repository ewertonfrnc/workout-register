import { FC } from 'react'
import { Center } from 'native-base'

import { Exercise } from '../../screens/home.screen'

import { LinearGradientContainer, ImageBg } from './exercise-card.styles'

export type ExerciseCardProps = {
  exercise: Exercise
}

const ExerciseCard: FC<ExerciseCardProps> = ({ exercise }) => {
  const { name, imgUrl } = exercise

  return (
    <ImageBg source={{ uri: imgUrl }}>
      <LinearGradientContainer />
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
    </ImageBg>
  )
}

export default ExerciseCard
