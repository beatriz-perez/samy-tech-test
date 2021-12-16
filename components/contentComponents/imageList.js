// Styles:
import styles from './imageList.module.scss'
// Content components:
import ImageCard from './imageCard'  

export default function ImageList(props) {
    const {initialList, filter, like, repost, scrollImages, loader, addImages, showDialog} = props
    return (
        <div className={styles.listBox}>
            {scrollImages.length === 0 
                ? ( // En caso de no haber elementos que mostrar
                    <p className={styles.text}>
                        There are no results for your search "{filter}"
                    </p>
                ) 
                : (// Si hay elementos que mostrar
                    <ul className={styles.list}>
                        {scrollImages.map((item, index) => ( 
                            <li key={index + 1}>
                                <ImageCard 
                                    info={item} 
                                    like={like}
                                    repost={repost}                            
                                    showDialog={showDialog} 
                                />
                            </li>
                        ))}
                    </ul>
                )
            }
            {/* Solo en caso de no estar filtrando por búsuqeda, continuamos el scroll */}
            {filter === null && (
                // Loader button que carga imágenes si falla useRef o no estuviese soportado
                <button className={styles.button} onClick={addImages} ref={loader}>
                    load more images
                </button>
            )}
        </div>
    )
}