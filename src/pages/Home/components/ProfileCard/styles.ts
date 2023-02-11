import styled from 'styled-components'

export const ProfileCardContainer = styled.section`
  display: flex;

  width: 86.4rem;
  height: 21.2rem;
  margin: 0 auto;

  margin-top: -8.8rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`

export const Card = styled.div`
  position: relative;

  background: ${(props) => props.theme['base-profile']};

  border-radius: 10px;
  padding: 3.2rem 4rem;

  width: 100%;

  header {
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }

  h1 {
    margin-bottom: 0.8rem;
    color: ${(props) => props.theme['base-title']};
  }

  img {
    width: 14.8rem;
    height: 14.8rem;
    border-radius: 0.8rem;
  }

  .userExtraInfos {
    display: flex;
    gap: 2.4rem;
    margin-top: 2.4rem;
  }

  svg {
    margin-right: 0.8rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const Link = styled.a`
  position: absolute;
  top: 4rem;
  right: 3.2rem;

  display: flex;
  align-items: center;

  gap: 0.8rem;

  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.blue};

  svg {
    color: ${(props) => props.theme.blue};
  }
`
