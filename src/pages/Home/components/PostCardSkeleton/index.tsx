import { Description, PostCardSkeletonContainer, Title } from './styles'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function PostCardSkeleton() {
  return (
    <PostCardSkeletonContainer>
      <Title>
        <Skeleton height={50} width={277} />
        <Skeleton width={75} />
      </Title>

      <Description>
        <Skeleton count={4} width={352} />
      </Description>
    </PostCardSkeletonContainer>
  )
}
