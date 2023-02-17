import { PostContentCardContainer, PostDetailsContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import { PostsProps } from '../../Home'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface PostContentProps {
  data: PostsProps
}

export function PostContentCard({ data }: PostContentProps) {
  return (
    <PostContentCardContainer>
      <PostDetailsContainer>
        {data.body ? (
          <ReactMarkdown>{data.body}</ReactMarkdown>
        ) : (
          <Skeleton count={16} />
        )}
      </PostDetailsContainer>
    </PostContentCardContainer>
  )
}
