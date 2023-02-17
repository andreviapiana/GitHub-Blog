import styled from 'styled-components'

export const PostTitleCardContainer = styled.section`
  display: flex;

  width: 86.4rem;
  height: 16.8rem;
  margin: 0 auto;

  margin-top: -8.8rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`

export const Card = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-profile']};

  border-radius: 10px;
  padding: 3.2rem;

  header {
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }

  h1 {
    color: ${(props) => props.theme['base-title']};
  }

  img {
    width: 14.8rem;
    height: 14.8rem;
    border-radius: 0.8rem;
  }

  .postInfos {
    width: 100%;
  }

  .postExtraInfos {
    display: flex;
    gap: 2.4rem;
    margin-top: 1.6rem;
  }

  .postExtraInfos svg {
    margin-right: 0.8rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const Link = styled.a`
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

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 2rem;
`
