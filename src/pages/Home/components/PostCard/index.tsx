import { Description, PostCardContainer, Title } from './styles'
import { PostsProps } from '../..'

import { formatDistanceDate } from '../../../../utils/formatter'
import { useNavigate } from 'react-router-dom'

interface PostCardProps {
  data: PostsProps
}

export function PostCard({ data }: PostCardProps) {
  const maximumCharacters = data.body.length > 182
  if (maximumCharacters) {
    data.body = data.body.substring(0, 182) + '...'
  }

  const navigate = useNavigate()

  function handleCompletePost() {
    navigate(`/post/${data.number}`)
  }

  return (
    <PostCardContainer onClick={handleCompletePost}>
      <Title>
        <h3>{data.title}</h3>
        <span>{data.created_at && formatDistanceDate(data.created_at)}</span>
      </Title>

      <Description>
        <p>{data.body}</p>
      </Description>
    </PostCardContainer>
  )
}
