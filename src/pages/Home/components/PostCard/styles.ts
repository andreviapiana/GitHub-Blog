import styled from 'styled-components'

export const PostCardContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 41.6rem;
  height: 26rem;

  background-color: ${(props) => props.theme['base-post']};

  padding: 3.2rem;

  border-radius: 1rem;
`

export const Title = styled.div`
  display: flex;
  margin-bottom: 2rem;
  line-height: 3.2rem;

  h3 {
    max-width: 28.3rem;
    font-size: 2rem;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 1.4rem;
  }
`

export const Description = styled.div`
  display: flex;

  max-height: 11.2rem;
  line-height: 2.7rem;

  overflow: auto;
  overflow: overlay;
`
