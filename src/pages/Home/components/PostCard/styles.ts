import styled from 'styled-components'

export const PostCardContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 41.6rem;

  background-color: ${(props) => props.theme['base-post']};

  padding: 3.2rem;

  border-radius: 1rem;

  &:hover {
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    border: 2px solid ${(props) => props.theme['base-label']};
    cursor: pointer;
  }

  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
`

export const Title = styled.div`
  display: flex;
  margin-bottom: 2rem;
  line-height: 3.2rem;

  h3 {
    max-width: 27.7rem;
    font-size: 2rem;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 1.4rem;
    width: 7.5rem;
    text-align: right;
  }
`

export const Description = styled.div`
  display: flex;

  max-height: 13.5rem;
  line-height: 2.7rem;

  overflow: auto;
  overflow: overlay;
`
