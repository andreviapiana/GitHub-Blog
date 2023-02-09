import { Header } from '../../components/Header'
import { MainCard } from '../../components/MainCard'
import { PostCard } from './components/PostCard'
import { SearchInput } from './components/SearchInput'
import { HomeContainer, PostCardGrid } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <MainCard />
      <SearchInput />
      <PostCardGrid>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostCardGrid>
    </HomeContainer>
  )
}
