import { ProfileCardContainer, Card, Link } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <Card>
        <Link href="https://github.com/andreviapiana">
          GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
        <header>
          <div className="userImage">
            <img
              src="https://github.com/andreviapiana.png"
              alt="Imagem do Usuário"
            />
          </div>
          <div className="userInfos">
            <h1>André Viapiana</h1>
            <span>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </span>
            <section className="userExtraInfos">
              <div>
                <FontAwesomeIcon icon={faGithub} />
                cameronwll
              </div>
              <div>
                <FontAwesomeIcon icon={faBuilding} />
                Rocketseat
              </div>
              <div>
                <FontAwesomeIcon icon={faUserGroup} />
                32 seguidores
              </div>
            </section>
          </div>
        </header>
      </Card>
    </ProfileCardContainer>
  )
}
