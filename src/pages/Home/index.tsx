import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/ProfileCard'
import { SearchInput } from './components/SearchInput'
import { HomeContainer, PostCardGrid } from './styles'

import { api } from '../../lib/axios'
import { useCallback, useEffect, useState } from 'react'

export interface PostsProps {
  number: number
  title: string
  body: string
  created_at: string
  html_url: string
  comments: number
}

interface SearchPostsProps {
  items: PostsProps[]
}

export function Home() {
  const [posts, setPosts] = useState<PostsProps[]>([])

  const postsLength = posts.length

  const fetchPosts = useCallback(async (query?: string) => {
    const response = await api.get<SearchPostsProps>(
      `search/issues?q=${
        query ? query + '%20' : ''
      }repo:andreviapiana/github-blog
      `,
    )

    setPosts(response.data.items)
  }, [])

  let numberOfPostsText: string
  if (postsLength > 1) {
    numberOfPostsText = 'publicações'
  } else {
    numberOfPostsText = 'publicação'
  }

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <HomeContainer>
      <ProfileCard />
      <SearchInput
        postsLength={postsLength}
        fetchPosts={fetchPosts}
        numberOfPostsText={numberOfPostsText}
      />
      <PostCardGrid>
        {posts.map((post) => {
          return <PostCard key={post.number} data={post} />
        })}
      </PostCardGrid>
    </HomeContainer>
  )
}
