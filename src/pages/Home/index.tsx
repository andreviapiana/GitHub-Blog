import { Header } from '../../components/Header'
import { MainCard } from '../../components/MainCard'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <MainCard />
    </HomeContainer>
  )
}
