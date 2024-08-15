const url = import.meta.env.VITE_BACKEND_URL

export async function getPosts(queryParams) {
  const res = await fetch(url + '/posts?' + new URLSearchParams(queryParams))
  return await res.json()
}

export const createPost = async (post) => {
  const res = await fetch(url + '/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  })
  return await res.json()
}
