// Info:
import info from './imagesFallback.json'

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
  let array = null
  try {
    // Llamada a la API
    const response = await fetch(fetchURL(search, page))
    const jsonResponse = await response.json()
    localStorage.setItem('imageInfoList', JSON.stringify(jsonResponse))
    array = jsonResponse
  } catch (e) {
    // Si la API no está disponible, tomará los datos del json file de respaldo
    // Esto además nos permite desplegar la aplicación sin que la API esté desplegada:
    array = info.images
  }
  // Añadir reposts_count
  array.map(i => {
    i.reposts_count = 0
    i.reposted = false
  })
  return array
}

export default { getImages }
