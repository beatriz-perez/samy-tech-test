// BASE API URL
const baseUrl = 'http://localhost:3100/images'

// COMPLETE URL + QUERY
export const postUrl = (id) => {
  const completeUrl = `${baseUrl}/${id}/likes`
  return completeUrl
}

// FETCH FUNCTION
export const postLikes = async (id) => {
  const response = await fetch(postUrl(id), { method: 'post', body: JSON.stringify({})})
  return response
}

export default { postLikes }