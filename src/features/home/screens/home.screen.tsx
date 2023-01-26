import { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { Heading, Box, ScrollView, HStack } from 'native-base'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

import { HomeContainer } from '../../../components/utility/safe-area.component'

import ExerciseCard from '../components/exercise-card/exercise-card.component'
import Header from '../components/header/header.component'

import { RootStackParamList } from '../../../infrastructure/navigation/exercices.navigator'
import ExerciseList from '../components/exercise-list/exercise-list.component'

export type HomeScreenProps = BottomTabScreenProps<RootStackParamList, 'Home'>

export type Exercise = {
  name: string
  imgUrl: string
}

export type MuscleGroup = {
  group: string
  exercises: Exercise[]
}

export type ExercisesArr = {
  id: number
  muscleGroup: MuscleGroup
}

const exercisesArr: ExercisesArr[] = [
  {
    id: 1,
    muscleGroup: {
      group: 'Quadríceps',
      exercises: [
        {
          name: 'Afundo',
          imgUrl:
            'https://conteudo.imguol.com.br/c/entretenimento/8a/2019/04/22/afundo-1555955867882_v2_1x1.jpg',
        },
        {
          name: 'Agachamento Terra',
          imgUrl:
            'https://www.espaco360med.com.br/images/blog/main/large/10-fatos-que-farao-voce-incluir-o-levantamento-terra-no-seu-treino-.jpg',
        },
        {
          name: 'Agachamento Sumô',
          imgUrl:
            'https://www.mundoboaforma.com.br/wp-content/uploads/2022/06/agachamento-sumo.jpg',
        },
        {
          name: 'Subida no banco',
          imgUrl:
            'https://www.muscleandfitness.com/wp-content/uploads/2019/11/Female-Working-Out-her-Legs-By-Doing-Weighted-Step-up-Exercise.jpg?quality=86&strip=all',
        },
      ],
    },
  },
  {
    id: 2,
    muscleGroup: {
      group: 'Posterior da coxa',
      exercises: [
        {
          name: 'Elevação pélvica',
          imgUrl:
            'https://generationiron.com/brasil/wp-content/uploads/sites/3/2021/02/3-1-1068x566.jpg',
        },
        {
          name: 'Stiff',
          imgUrl:
            'https://s.zst.com.br/cms-assets/2022/05/stiff-como-fazer.webp',
        },
      ],
    },
  },
  {
    id: 3,
    muscleGroup: {
      group: 'Panturrilha',
      exercises: [
        {
          name: 'Elevação pélvica',
          imgUrl:
            'https://generationiron.com/brasil/wp-content/uploads/sites/3/2021/02/3-1-1068x566.jpg',
        },
      ],
    },
  },
  {
    id: 4,
    muscleGroup: {
      group: 'Peitoral',
      exercises: [
        {
          name: 'Supino Reto',
          imgUrl:
            'https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg',
        },
        {
          name: 'Crucifixo inclinado',
          imgUrl:
            'http://conteudo.imguol.com.br/c/entretenimento/88/2019/09/09/crucifixo-musculacao-exercicio-academia-1568071568051_v2_1254x836.jpg',
        },
      ],
    },
  },
  {
    id: 5,
    muscleGroup: {
      group: 'Dorsal',
      exercises: [
        {
          name: 'Remada no TRX',
          imgUrl:
            'https://nutri360.com.br/wp-content/uploads/2022/11/Desenvolvimento-com-halteres-em-sentado-1200x600.jpg',
        },
        {
          name: 'Barra fixa',
          imgUrl:
            'https://www.oxygenmag.com/wp-content/uploads/2020/11/Pull-Up-Promo-Image-Wide-1024x576.jpg?width=1200',
        },
      ],
    },
  },
  {
    id: 6,
    muscleGroup: {
      group: 'Deltoides',
      exercises: [
        {
          name: 'Desenvolvimento',
          imgUrl:
            'https://nutri360.com.br/wp-content/uploads/2022/11/Desenvolvimento-com-halteres-em-sentado-1200x600.jpg',
        },
        {
          name: 'Elevação lateral com halteres',
          imgUrl:
            'https://vitat.com.br/wp-content/uploads/2022/05/beautiful-athletic-girl-dressed.jpg',
        },
      ],
    },
  },
  {
    id: 7,
    muscleGroup: {
      group: 'Bíceps',
      exercises: [
        {
          name: 'Rosca direta',
          imgUrl:
            'http://conteudo.imguol.com.br/c/entretenimento/19/2019/03/07/rosca-direta-1551966289593_v2_1254x836.jpg',
        },
      ],
    },
  },
  {
    id: 8,
    muscleGroup: {
      group: 'Tríceps',
      exercises: [
        {
          name: 'Tríceps no banco',
          imgUrl:
            'http://conteudo.imguol.com.br/c/entretenimento/3d/2019/07/30/triceps-banco-1564513589405_v2_1254x836.jpg',
        },
      ],
    },
  },
]

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const openExerciseDetailScreen = (exercise: Exercise): void =>
    navigation.navigate('ExerciseDetails', { exercise })

  return (
    <HomeContainer>
      <Header />
      <ExerciseList
        exercises={exercisesArr}
        handleNavigation={openExerciseDetailScreen}
      />
    </HomeContainer>
  )
}

export default HomeScreen
