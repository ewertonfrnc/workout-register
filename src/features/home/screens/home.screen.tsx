import { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { FlatList, Box, View } from 'native-base'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

import { HomeContainer } from '../../../components/utility/safe-area.component'

import ExerciseCard from '../components/exercise-card/exercise-card.component'
import Header from '../components/header/header.component'

import { RootStackParamList } from '../../../infrastructure/navigation/exercices.navigator'

export type HomeScreenProps = BottomTabScreenProps<RootStackParamList, 'Home'>

export type Exercise = {
  name: string
  imgUrl: string
}

export type DataArr = {
  id: number
  exerciseObj: Exercise
}

const data: DataArr[] = [
  {
    id: 1,
    exerciseObj: {
      name: 'Afundo',
      imgUrl:
        'https://conteudo.imguol.com.br/c/entretenimento/8a/2019/04/22/afundo-1555955867882_v2_1x1.jpg',
    },
  },
  {
    id: 2,
    exerciseObj: {
      name: 'Avanço',
      imgUrl:
        'https://static.vixbrasiltv.com/pt/sites/default/files/e/exercicio-afundo-avanco-1116-1400x800.jpg',
    },
  },
  {
    id: 3,
    exerciseObj: {
      name: 'Supino Reto',
      imgUrl:
        'https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg',
    },
  },
  {
    id: 4,
    exerciseObj: {
      name: 'Burpee',
      imgUrl:
        'https://static.wixstatic.com/media/6fd9dd_9cf5ffc0052e462d81d0c9c415d7d086~mv2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg',
    },
  },
  {
    id: 5,
    exerciseObj: {
      name: 'Remada curvada',
      imgUrl:
        'https://cdn.fisiculturismo.com.br/monthly_2021_03/remada-curvada-supinada-intermediaria.jpg.ce9f4df94ef51ad5d2607c7ff617cc65.jpg',
    },
  },
  {
    id: 6,
    exerciseObj: {
      name: 'Remada Cavalinho',
      imgUrl: 'https://i.ytimg.com/vi/TRqQamJvKY8/maxresdefault.jpg',
    },
  },
  {
    id: 7,
    exerciseObj: {
      name: 'Desenvolvimento',
      imgUrl:
        'http://conteudo.imguol.com.br/c/entretenimento/f4/2019/04/17/desenvolvimento-de-ombros-1555532079293_v2_1254x836.jpg',
    },
  },
  {
    id: 8,
    exerciseObj: {
      name: 'Agachamento Terra',
      imgUrl:
        'https://www.espaco360med.com.br/images/blog/main/large/10-fatos-que-farao-voce-incluir-o-levantamento-terra-no-seu-treino-.jpg',
    },
  },
  {
    id: 9,
    exerciseObj: {
      name: 'Agachamento Sumô',
      imgUrl:
        'https://www.mundoboaforma.com.br/wp-content/uploads/2022/06/agachamento-sumo.jpg',
    },
  },
  {
    id: 10,
    exerciseObj: {
      name: 'Stiff',
      imgUrl: 'https://s.zst.com.br/cms-assets/2022/05/stiff-como-fazer.webp',
    },
  },
]

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <HomeContainer>
      <Header />

      <View>
        <Box>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() =>
                  navigation.navigate('ExerciseDetails', {
                    exercise: item,
                  })
                }
              >
                <ExerciseCard key={item.id} exercises={item.exerciseObj} />
              </TouchableOpacity>
            )}
          />
        </Box>
      </View>
    </HomeContainer>
  )
}

export default HomeScreen
