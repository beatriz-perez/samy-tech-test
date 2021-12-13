// Modules:
import { useState } from 'react'
// Styles:
import styles from './imageCard.module.scss'
// Content components:
import Like from './like'
import Repost from './repost'

export default function ImageCard({info}) {

    // Transformar formato de likes y reposts a 3 dígitos 
    const likes = "" + info.likes_count
    const [reposts, setReposts] = useState(0)
    const repostsCount = "" + reposts
    const template = "000"
    const convertedLikes = template.substring(0, template.length - likes.length) + likes
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
                <Like info={info.liked}/>
            </div>
            <div className={styles.card__repostsBox}>
                <Repost info={reposts}/>
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
