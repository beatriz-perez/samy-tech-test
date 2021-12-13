// Modules:
import { useState } from 'react'
// Styles:
import styles from './imageCard.module.scss'
// Content components:
import Like from './like'
import Repost from './repost'

export default function ImageCard({info}) {

    // Al no obtener datos actualizados de la API, simulamos los cambios mediante el estado
    // Likes:
    const [liked, setLiked] = useState(info.liked)
    const [likes, setLikes] = useState(info.likes_count)
    const handleLikes = () => {
        if (liked === true) {
            setLiked(false)
            setLikes(prev => prev - 1)
        } else {
            setLiked(true)
            setLikes(prev => prev + 1)
        }
    }
    // Reposts:
    const [reposted, setReposted] = useState(false)
    const [reposts, setReposts] = useState(0)
    const handleReposts = () => {
        if (reposted === true) {
            // --------------------- !!!
        } else {
            setReposted(true)
            setReposts(prev => prev + 1)
        }
    }

    // Transformar formato de likes y reposts a 3 dígitos 
    const likesCount = "" + likes
    const repostsCount = "" + reposts
    const template = "000"
    const convertedLikes = template.substring(0, template.length - likesCount.length) + likesCount
    const convertedReposts = template.substring(0, template.length - repostsCount.length) + repostsCount

    return (
        <div className={styles.card}>
            {/* Imagen */}
            <img
                className={styles.card__image} 
                src={info.main_attachment.small}
                alt={info.title}
            />
            {/* Información de imagen */}
            <div className={styles.card__infoBox}>
                <p className={[styles.card__text, styles['card__text--title']].join(' ')}>
                    {info.title}
                </p>
                <p className={[styles.card__text, styles['card__text--author']].join(' ')}>
                    <span className={[styles.card__text, styles['card__text--secondary']].join(' ')}>
                        by
                    </span>
                    {' '}{info.author}
                </p>
            </div>
            <div className={styles.card__likesBox}>
                <p className={[styles.card__text, styles['card__text--data']].join(' ')}>
                    {convertedLikes}
                </p>
                <Like info={liked} id={info.id} task={handleLikes} />
            </div>
            <div className={styles.card__repostsBox}>
                <Repost info={reposted} id={info.id} task={handleReposts}/>
                <p className={[styles.card__text, styles['card__text--data']].join(' ')}>
                    {convertedReposts}
                </p>
            </div>
            {/* Precio de imagen,renderizado sólo en caso de existir */}
            {info.price && (
                <>
                    <div className={styles.card__priceBox}></div>
                    <div className={styles.card__priceTag}>
                        <p>
                            <span className={styles.card__text}>
                                {(Math.round(info.price * 100) / 100).toFixed(2)}
                            </span>
                            <span className={[styles.card__text, styles['card__text--small']].join(' ')}>
                                &nbsp;€
                            </span>
                        </p>
                    </div>
                </>            
            )}
            {/* Degradado para oscurecer al hacer hover */}
            <div className={styles.card__gradientBox}></div>

        </div>
    )
}
