import { SearchFormContainer, StyledInput, Title } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface InputSearchProps {
  postsLength: number
  numberOfPostsText: string
  fetchPosts: (query?: string) => Promise<void>
}

export function SearchInput({
  postsLength,
  fetchPosts,
  numberOfPostsText,
}: InputSearchProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    fetchPosts(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <Title>
        <h3>Publicações</h3>
        <span>
          {postsLength} {numberOfPostsText}
        </span>
      </Title>

      <StyledInput
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
        disabled={isSubmitting}
      />
    </SearchFormContainer>
  )
}
