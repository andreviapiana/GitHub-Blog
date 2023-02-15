import { ProfileCardContainer, Card, Link } from './styles'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

interface ProfileProps {
  avatarURL: string
  bio: string
  htmlURL: string
  followers: number
  login: string
  name: string
}

export function ProfileCard() {
  const [profile, setProfile] = useState<ProfileProps>({
    avatarURL: '',
    bio: '',
    htmlURL: '',
    followers: 1,
    login: '',
    name: '',
  })

  const fetchProfile = useCallback(async () => {
    const response = await api.get('/users/andreviapiana')

    const {
      avatar_url: avatarURL,
      bio,
      html_url: htmlURL,
      followers,
      login,
      name,
    } = response.data

    const filteredData = {
      avatarURL,
      bio,
      htmlURL,
      followers,
      login,
      name,
    }

    setProfile(filteredData)
  }, [])

  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])

  return (
    <ProfileCardContainer>
      <Card>
        <Link href={profile.htmlURL}>
          GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
        <header>
          <div className="userImage">
            <img src={profile.avatarURL} alt="Imagem de Avatar do Usuário" />
          </div>
          <div className="userInfos">
            <h1>{profile.name}</h1>
            <span>{profile.bio}</span>
            <section className="userExtraInfos">
              <div>
                <FontAwesomeIcon icon={faGithub} />
                {profile.login}
              </div>
              <div>
                <FontAwesomeIcon icon={faBuilding} />
                Rocketseat
              </div>
              <div>
                <FontAwesomeIcon icon={faUserGroup} />
                {profile.followers} seguidores
              </div>
            </section>
          </div>
        </header>
      </Card>
    </ProfileCardContainer>
  )
}
