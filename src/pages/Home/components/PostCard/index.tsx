import { Description, PostCardContainer, Title } from './styles'
import { PostsProps } from '../..'

import { formatDistanceDate } from '../../../../utils/formatter'

interface PostCardProps {
  data: PostsProps
}

export function PostCard({ data }: PostCardProps) {
  const formattedDate = formatDistanceDate(data.created_at)

  const maximumCharacters = data.body.length > 182
  if (maximumCharacters) {
    data.body = data.body.substring(0, 182) + '...'
  }

  return (
    <PostCardContainer>
      <Title>
        <h3>{data.title}</h3>
        <span>{formattedDate}</span>
      </Title>

      <Description>
        <p>{data.body}</p>
      </Description>
    </PostCardContainer>
  )
}
