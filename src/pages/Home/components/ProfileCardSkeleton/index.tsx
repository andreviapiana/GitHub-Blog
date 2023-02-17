import { Card, ProfileCardSkeletonContainer } from './styles'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function ProfileCardSkeleton() {
  return (
    <ProfileCardSkeletonContainer>
      <Card>
        <div className="skeletonWrapper">
          <Skeleton width={75} />
        </div>
        <header>
          <Skeleton width={148} height={148} borderRadius={8} />
          <div className="userInfos">
            <h1>{<Skeleton width={350} />}</h1>
            <span>{<Skeleton count={2} />}</span>
            <Skeleton className="userExtraInfos" />
          </div>
        </header>
      </Card>
    </ProfileCardSkeletonContainer>
  )
}
