import { SearchInputContainer, StyledInput, Title } from './styles'

export function SearchInput() {
  return (
    <SearchInputContainer>
      <Title>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </Title>

      <StyledInput placeholder="Buscar conteúdo" />
    </SearchInputContainer>
  )
}
