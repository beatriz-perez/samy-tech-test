// BASE API URL
const baseUrl = 'http://localhost:3100/images'

// COMPLETE URL + QUERY
export const fetchURL = (search, page) => {
  const searchQuery = search ? search : ''
  const completeUrl = `${baseUrl}?search=${searchQuery}&page=${page}`
  return completeUrl
}

// FETCH FUNCTION
export const getImages = async (search, page) => {
  const response = await fetch(fetchURL(search, page))
  const jsonResponse = await response.json()
  return jsonResponse
}

export default { getImages }
