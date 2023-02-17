import { PostTitleCardContainer, Card, Link, Links } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { useNavigate } from 'react-router-dom'
import { formatDistanceDate } from '../../../utils/formatter'
import { PostsProps } from '../../Home'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface PostTitleProps {
  data: PostsProps
}

export function PostTitleCard({ data }: PostTitleProps) {
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  return (
    <PostTitleCardContainer>
      <Card>
        <Links>
          {data.title ? (
            <Link onClick={handleBack}>
              <FontAwesomeIcon icon={faAngleLeft} />
              VOLTAR
            </Link>
          ) : (
            <Skeleton wrapper={Link} width={75} />
          )}
          {data.title ? (
            <Link href={data.html_url}>
              VER NO GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          ) : (
            <Skeleton wrapper={Link} width={115} />
          )}
        </Links>
        <header>
          <div className="postInfos">
            <h1>{data.title || <Skeleton />}</h1>
            {data.created_at ? (
              <section className="postExtraInfos">
                <div>
                  <FontAwesomeIcon icon={faGithub} />
                  {data.user.login}
                </div>
                <div>
                  <FontAwesomeIcon icon={faCalendarDay} />
                  {data.created_at && formatDistanceDate(data.created_at)}
                </div>
                <div>
                  <FontAwesomeIcon icon={faComment} />
                  {data.comments} comentário(s)
                </div>
              </section>
            ) : (
              <Skeleton className="postExtraInfos" width={450} />
            )}
          </div>
        </header>
      </Card>
    </PostTitleCardContainer>
  )
}
