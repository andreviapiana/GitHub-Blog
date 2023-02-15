import styled from 'styled-components'

export const PostContentCardContainer = styled.section`
  display: flex;
`

export const PostDetailsContainer = styled.div`
  width: 86.4rem;
  max-height: 45.6rem;
  padding: 0 3.2rem;

  margin-bottom: 5rem;

  border-top: 4rem solid transparent;
  border-bottom: 4rem solid transparent;

  overflow: auto;
  overflow: overlay;

  img {
    width: 100%;
    border-radius: 2rem;
  }
  li {
    list-style-position: inside;
  }
`
