const url = import.meta.env.VITE_BACKEND_URL

export async function getPosts(queryParams) {
  const res = await fetch(url + '/posts?' + new URLSearchParams(queryParams))
  return await res.json()
}
