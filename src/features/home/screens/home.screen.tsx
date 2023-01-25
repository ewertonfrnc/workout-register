import { HomeContainer } from '../../../components/utility/safe-area.component'
import ExerciseList from '../components/exercise-list/exercise-list.component'
import Header from '../components/header/header.component'

const HomeScreen = () => {
  return (
    <HomeContainer>
      <Header />
      <ExerciseList />
    </HomeContainer>
  )
}

export default HomeScreen
