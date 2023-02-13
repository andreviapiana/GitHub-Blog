import { Description, PostCardContainer, Title } from './styles'
import { PostsProps } from '../..'

interface PostCardProps {
  data: PostsProps
}

export function PostCard({ data }: PostCardProps) {
  return (
    <PostCardContainer>
      <Title>
        <h3>{data.title}</h3>
        <span>Há 1 dia</span>
      </Title>

      <Description>
        <p>{data.body}</p>
      </Description>
    </PostCardContainer>
  )
}
