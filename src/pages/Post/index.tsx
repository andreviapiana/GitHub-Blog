import { PostContentCard } from './PostContentCard'
import { PostTitleCard } from './PostTitleCard'
import { HomeContainer } from './styles'

export function Post() {
  return (
    <HomeContainer>
      <PostTitleCard />
      <PostContentCard />
    </HomeContainer>
  )
}
