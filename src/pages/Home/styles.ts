import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const PostCardGrid = styled.div`
  display: grid;
  justify-content: center;
  align-self: center;
  grid-template-columns: repeat(2, 1fr);

  width: 100%;
  max-width: 86.4rem;
  gap: 3.2rem;

  margin-bottom: 5rem;
`

export const SkeletonGrid = styled.div`
  display: contents;
`
