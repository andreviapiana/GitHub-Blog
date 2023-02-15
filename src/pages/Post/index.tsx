import { PostContentCard } from './PostContentCard'
import { PostTitleCard } from './PostTitleCard'
import { HomeContainer } from './styles'

import { PostsProps } from '../Home'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'

export function Post() {
  const [postData, setPostData] = useState<PostsProps>({} as PostsProps)
  const params = useParams()

  useEffect(() => {
    async function fetchPost() {
      const response = await api.get<PostsProps>(
        `/repos/andreviapiana/github-blog/issues/${params.issueNumber}`,
      )

      setPostData(response.data)
    }
    fetchPost()
  }, [params])

  return (
    <HomeContainer>
      <PostTitleCard data={postData} />
      <PostContentCard />
    </HomeContainer>
  )
}
