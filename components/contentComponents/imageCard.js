// Styles:
import styles from './imageCard.module.scss'

export default function ImageCard({info}) {
    console.log(info)

    // Transformar formato de likes a 3 dígitos 
    const likes = "" + info.likes_count
    const reposts = "" + info.likes_count // <------- cambiar por info de reposts
    const template = "000"
    const convertedLikes = template.substring(0, template.length - likes.length) + likes
    const convertedReposts = template.substring(0, template.length - reposts.length) + reposts

    return (
        <div className={styles.card}>
            <img
                className={styles.card__image} 
                src={info.main_attachment.small}
                alt={info.title}
            />
            <div className={styles.card__info}>
                <p className={styles['card__info--title']}>
                    {info.title}
                </p>
                <p className={styles['card__info--author']}>
                    <span className={styles['card__info--secondary']}>by</span>{' '}{info.author}
                </p>
            </div>
            <div className={styles.card__likesBox}>
                {`likes: ${convertedLikes}`}
            </div>
            <div className={styles.card__repostsBox}>
                {`reposts: ${convertedReposts}`}
            </div>
            <div className={styles.card__priceBox}>
                {info.price}{' '}<span className={styles['card__info--secondary']}>€</span>
            </div>
        </div>
    )
}
