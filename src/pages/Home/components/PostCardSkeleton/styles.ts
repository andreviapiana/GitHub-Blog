import styled from 'styled-components'

export const PostCardSkeletonContainer = styled.div`
  width: 41.6rem;

  background-color: ${(props) => props.theme['base-post']};

  padding: 3.2rem;

  border-radius: 1rem;
`

export const Title = styled.div`
  display: flex;
  margin-bottom: 2rem;
  line-height: 3.2rem;
`

export const Description = styled.div`
  line-height: 2.7rem;
`
