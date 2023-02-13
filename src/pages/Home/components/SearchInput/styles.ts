import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;

  width: 86.4rem;
  margin-top: 7.2rem;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 1.8rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 1.4rem;
  }
`

export const StyledInput = styled.input`
  margin-top: 1.2rem;
  margin-bottom: 4.8rem;

  outline: 1px solid ${(props) => props.theme['base-border']};
  border: none;
  border-radius: 0.6rem;

  padding: 1.4rem 1.6rem;

  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-input']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
