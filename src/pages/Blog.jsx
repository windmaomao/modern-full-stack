import { useState } from 'react'
import './App.css'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../api/posts.js'
import { PostList } from '../components/PostList.jsx'
import { CreatePost } from '../components/CreatePost.jsx'
import { PostFilter } from '../components/PostFilter.jsx'
import { PostSorting } from '../components/PostSorting.jsx'
import { Header } from '../components/Header.jsx'

export function Blog() {
  const [count, setCount] = useState(0)

  const [author, setAuthor] = useState('')
  const [sortBy, setSortBy] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState('descending')

  const { data } = useQuery({
    queryKey: ['posts', { author, sortBy, sortOrder }],
    queryFn: () => getPosts({ author, sortBy, sortOrder }),
  })

  const posts = data ?? []

  return (
    <>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div style={{ padding: 8 }}>
          <Header />
          <br />
          <hr />
          <br />
          <CreatePost />
          <br />
          <PostFilter
            field='author'
            value={author}
            onChange={(value) => setAuthor(value)}
          />
          <br />
          <PostSorting
            fields={['createdAt', 'updatedAt']}
            value={sortBy}
            onChange={(value) => setSortBy(value)}
            orderValue={sortOrder}
            onOrderChange={(orderValue) => setSortOrder(orderValue)}
          />
          <hr />
          <PostList posts={posts} />
        </div>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Blog
