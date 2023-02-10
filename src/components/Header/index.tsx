import { HeaderContainer, HeaderContent } from './styles'

import logoImg from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img className="logo" src={logoImg} alt="" />
        </NavLink>
      </HeaderContent>
    </HeaderContainer>
  )
}
