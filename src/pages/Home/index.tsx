import { Header } from '../../components/Header'
import { MainCard } from '../../components/MainCard'
import { SearchInput } from './components/SearchInput'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <MainCard />
      <SearchInput />
    </HomeContainer>
  )
}
