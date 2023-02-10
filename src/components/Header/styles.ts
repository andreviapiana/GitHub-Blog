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

  .logo:hover {
    -webkit-animation: wobble-hor-bottom 0.8s both;
    animation: wobble-hor-bottom 0.8s both;
  }

  @keyframes wobble-hor-bottom {
    0%,
    100% {
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
    15% {
      -webkit-transform: translateX(-30px) rotate(-6deg);
      transform: translateX(-30px) rotate(-6deg);
    }
    30% {
      -webkit-transform: translateX(15px) rotate(6deg);
      transform: translateX(15px) rotate(6deg);
    }
    45% {
      -webkit-transform: translateX(-15px) rotate(-3.6deg);
      transform: translateX(-15px) rotate(-3.6deg);
    }
    60% {
      -webkit-transform: translateX(9px) rotate(2.4deg);
      transform: translateX(9px) rotate(2.4deg);
    }
    75% {
      -webkit-transform: translateX(-6px) rotate(-1.2deg);
      transform: translateX(-6px) rotate(-1.2deg);
    }
  }
`
