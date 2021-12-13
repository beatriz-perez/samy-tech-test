// Modules:
import { useState } from 'react'
// Styles:
import styles from './imageList.module.scss'
// Content components:
import ImageCard from './imageCard'  

export default function ImageList({initialList, getMoreImages, filter}) {
     
    const [imagesList, setImagesList] = useState(initialList)
    const [page, setPage] = useState(1)

    // Añadir imágenes para continuar con el scroll
    const addImages = async () => {
        const moreImages = await getMoreImages(filter, page + 1)
        setPage(prev => prev + 1)
        setImagesList(prev => [...prev, ...moreImages])
    }
      
    // Filtrar información de imágenes según búsqueda (ya que la api to filtra en realidad)
    const filteredInfo = filter !== null 
        // Si existe una búsqueda utilizamos la lista inicial para no dar resultados repetidos
        ? initialList.filter(i => i.title.toUpperCase().includes(filter.toUpperCase()))
        // Si no existe una búsqueda dejamos que elscroll continúe
        : imagesList;

    return (
        <div className={styles.listBox}>

            {filteredInfo.length === 0 
                // En caso de no haber elementos que mostrar
                ? (
                    <p className={styles.text}>
                        No hay resultados para tu búsqueda "{filter}"
                    </p>
                // Si hay elementos que mostrar
                ) : (
                    <ul className={styles.list}>
                        {filteredInfo.map((item, index) => (
                            <li key={index + 1}>
                                <ImageCard info={item}/>
                            </li>
                        ))}
                    </ul>
    
                )}

            {/* En caso de no estar filtrando por búsuqeda, continuamos el scroll */}
            {filter === null && (
                <button className={styles.button} onClick={addImages}>
                    load more images
                </button>
            )}
        </div>
    )
}
