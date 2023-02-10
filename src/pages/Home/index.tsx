import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/ProfileCard'
import { SearchInput } from './components/SearchInput'
import { HomeContainer, PostCardGrid } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ProfileCard />
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
