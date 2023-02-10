import { PostTitleCardContainer, Card, Link, Links } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function PostTitleCard() {
  return (
    <PostTitleCardContainer>
      <Card>
        <Links>
          <Link href="/">
            <FontAwesomeIcon icon={faAngleLeft} />
            VOLTAR
          </Link>
          <Link href="https://github.com/andreviapiana">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </Links>
        <header>
          <div className="postInfos">
            <h1>JavaScript data types and data structures</h1>
            <section className="postExtraInfos">
              <div>
                <FontAwesomeIcon icon={faGithub} />
                cameronwll
              </div>
              <div>
                <FontAwesomeIcon icon={faCalendarDay} />
                Há 1 dia
              </div>
              <div>
                <FontAwesomeIcon icon={faComment} />5 comentários
              </div>
            </section>
          </div>
        </header>
      </Card>
    </PostTitleCardContainer>
  )
}
