import styled from 'styled-components'
import backgroundImg from '../../assets/background.svg'

export const HeaderContainer = styled.header`
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;
  padding: 6.4rem 0 13.4rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 86.4rem;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`
