import { Avatar } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient'
import { AspectRatio, Image, Center, Box, Text, HStack } from 'native-base'

import { HomeContainer } from '../../../components/utility/safe-area.component'
import ExerciseList from '../components/exercise-list/exercise-list.component'

const HomeScreen = () => {
  return (
    <HomeContainer>
      <HStack space={4} mb={8}>
        <Avatar
          size='lg'
          bg='cyan.500'
          source={{
            uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          }}
        />

        <Box>
          <Text fontSize='md' color='light.50'>
            Olá, Ewerton!
          </Text>
          <Text fontSize='xl' color='light.50' bold>
            Quinta, 21 de agosto
          </Text>
        </Box>
      </HStack>

      <ExerciseList />
    </HomeContainer>
  )
}

export default HomeScreen
