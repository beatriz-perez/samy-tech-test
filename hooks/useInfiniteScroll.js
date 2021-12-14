// Modules:
import { useState, useRef, useEffect } from 'react'

export const useInfiniteScroll = (initialList, getImagesFunction, filter) => {

    // IMÁGENES INFINITAS:
    // Añadir imágenes a la lista que se muestra
    const [imagesList, setImagesList] = useState(initialList)
    const [page, setPage] = useState(1)
    const addImages = async () => {
        const moreImages = await getImagesFunction(filter, page + 1)
        setPage(prev => prev + 1)
        setImagesList(prev => [...prev, ...moreImages])
    }
    // Referencia para sumar imágenes al llegar al final de la lista
    const loader = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver);
        loader.current && observer.observe(loader.current)
    }, []);
    const handleObserver = (entities) => {
        entities[0].isIntersecting && addImages()
    }
    // FILTRO POR BÚSQUEDA (ya que la api to filtra en realidad):
    const scrollImages = filter !== null 
        // Si existe una búsqueda tomamos la lista inicial para no dar resultados repetidos
        ? initialList.filter(i => 
            i.title.toUpperCase().includes(filter.toUpperCase()) ||
            i.author.toUpperCase().includes(filter.toUpperCase())
        )
        // Si no existe una búsqueda dejamos que el scroll continúe
        : imagesList

    return [scrollImages, loader, addImages]
}

export default { useInfiniteScroll }