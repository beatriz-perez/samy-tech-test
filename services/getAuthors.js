// Services:
import { getImages } from '../services/getImages'

export const getAuthors = async (search, page) => {
    let authors = []
    const imagesInfo = await getImages(search, page)
    imagesInfo.map((i) => {
        if (authors.findIndex((a) => a.name === i.author) === -1) {
            authors.push({
                name: i.author,
                urlParam: i.author.toLowerCase().replace(/ /g, ""),
                images: [i]
            })
        } else {
            authors.find((a) => a.name === i.author).images.push(i)
        }
    })
    return authors
}
  
export default { getAuthors }