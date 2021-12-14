// Modules:
import { useState, useRef, useEffect } from 'react'
// Styles:
import styles from './imageList.module.scss'
// Content components:
import ImageCard from './imageCard'  

export default function ImageList({initialList, getMoreImages, filter}) {
    //custom Hook para alimentar de imágenes "infinitas"
    const [scrollImages, loader, addImages] = useInfiniteScroll(initialList, getMoreImages, filter)
    
    return (
        <div className={styles.listBox}>
            {scrollImages.length === 0 
                ? (
                    // En caso de no haber elementos que mostrar
                    <p className={styles.text}>
                        No hay resultados para tu búsqueda "{filter}"
                    </p>
                ) : (
                    // Si hay elementos que mostrar
                    <ul className={styles.list}>
                        {scrollImages.map((item, index) => (
                            <li key={index + 1}>
                                <ImageCard info={item}/>
                            </li>
                        ))}
                    </ul>
                )
            }
            {/* Solo en caso de no estar filtrando por búsuqeda, continuamos el scroll */}
            {filter === null && (
                // Loader button que servirá para cargar imágenes si fallase useRef o no estuviese soportado
                <button className={styles.button} onClick={addImages} ref={loader}>
                    load more images
                </button>
            )}
        </div>
    )
}

// HOOKS:
const useInfiniteScroll = (initialList, getImagesFunction, filter) => {
    // IMÁGENES INFINITAS:
    // Añadir imágenes para continuar con el scroll
    const [imagesList, setImagesList] = useState(initialList)
    const [page, setPage] = useState(1)
    const addImages = async () => {
        const moreImages = await getImagesFunction(filter, page + 1)
        setPage(prev => prev + 1)
        setImagesList(prev => [...prev, ...moreImages])
    }
    // Referencia en el botón para sumar imágenes sin necesidad de hacer click
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
        // Si no existe una búsqueda dejamos que elscroll continúe
        : imagesList

    return [scrollImages, loader, addImages]
}