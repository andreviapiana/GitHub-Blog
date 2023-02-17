import styled from 'styled-components'

export const ProfileCardSkeletonContainer = styled.section`
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
  }

  .userInfos {
    width: 100%;
  }

  .userExtraInfos {
    margin-top: 2.4rem;
  }

  .skeletonWrapper {
    position: absolute;
    top: 4rem;
    right: 4rem;
  }
`
