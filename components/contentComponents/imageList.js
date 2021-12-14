// Modules:
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'
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