// Modules:
import { useRouter } from 'next/router'
// Styles:
import styles from './imageCard.module.scss'
// Content components:
import CardActionIcon from './cardActionIcon'

export default function ImageCard({info, like, repost, showDialog}) {
    const router = useRouter()
    // Transformar formato de números (likes y reposts) a 3 dígitos
    const transformNumber = (n) => {
        const string = "" + n
        const template = "000"
        return(template.substring(0, template.length - string.length) + string)
    }

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
                <p 
                    className={[styles.card__text, styles['card__text--title']].join(' ')}
                    onClick={() => router.push(`/image/${info.id}`)}
                >
                    {info.title}
                </p>
                <p 
                    className={[styles.card__text, styles['card__text--author']].join(' ')}
                    onClick={() => router.push(`/author/${info.author.toLowerCase().replace(/ /g, "")}`)}
                >
                    <span className={[styles.card__text, styles['card__text--secondary']].join(' ')}>
                        by
                    </span>
                    {' '}{info.author}
                </p>
            </div>

            {/* Likes */}
            <div className={styles.card__likesBox}>
                <p className={[styles.card__text, styles['card__text--data']].join(' ')}>
                    {transformNumber(info.likes_count)}
                </p>
                <CardActionIcon type='like' info={info} task={like} />
            </div>

            {/* Reposts */}
            <div className={styles.card__repostsBox}>
                <CardActionIcon type='repost' info={info} task={repost}/>
                <p className={[styles.card__text, styles['card__text--data']].join(' ')}>
                    {transformNumber(info.reposts_count)}
                </p>
            </div>

            {/* Precio de imagen, en caso de existir */}
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

            {/* Degradado en hover */}
            <div className={styles.card__gradientBox}></div>

        </div>
    )
}
