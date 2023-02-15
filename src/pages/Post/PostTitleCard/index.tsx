import { PostTitleCardContainer, Card, Link, Links } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { formatDistanceDate } from '../../../utils/formatter'
import { PostsProps } from '../../Home'

interface PostTitleProps {
  data: PostsProps
}

export function PostTitleCard({ data }: PostTitleProps) {
  return (
    <PostTitleCardContainer>
      <Card>
        <Links>
          <Link href="/">
            <FontAwesomeIcon icon={faAngleLeft} />
            VOLTAR
          </Link>
          <Link href={data.html_url}>
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </Links>
        <header>
          <div className="postInfos">
            <h1>{data.title}</h1>
            <section className="postExtraInfos">
              <div>
                <FontAwesomeIcon icon={faGithub} />
                andreviapiana
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
          </div>
        </header>
      </Card>
    </PostTitleCardContainer>
  )
}
