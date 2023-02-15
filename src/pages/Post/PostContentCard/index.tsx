import { PostContentCardContainer, PostDetailsContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import { PostsProps } from '../../Home'

interface PostContentProps {
  data: PostsProps
}

export function PostContentCard({ data }: PostContentProps) {
  return (
    <PostContentCardContainer>
      <PostDetailsContainer>
        <ReactMarkdown>{data.body}</ReactMarkdown>
      </PostDetailsContainer>
    </PostContentCardContainer>
  )
}
