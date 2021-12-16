// Styles:
import styles from './imageFile.module.scss'
// Modules:
import { useRouter } from 'next/router'

export default function ImageFile({info}) {
    const router = useRouter()
    return (
        <div className={styles.container}>
            {/* Title */}
            <p className={[styles.text, styles['text--title']].join(' ')}>
                {info.title}
            </p>
            {/* Date */}
            <p className={styles.text}>
                created on&nbsp;{info.created_at.split('T')[0]}
            </p>
            {/* Author */}
            <p 
                className={styles.text}
                onClick={() => router.push(`/author/${info.author.toLowerCase().replace(/ /g, "")}`)}
            >
                by&nbsp;
                <span className={[styles.stext, styles['text--author']].join(' ')}>
                    {' '}{info.author}
                </span>
            </p>
            {/* Image */}
            <img
                className={styles.image} 
                src={info.main_attachment.big}
                alt={info.title}
            />
            {/* Buy button */}
            <button className={styles.button} > {/* --------------- ACCION !!! */}
                <img
                    className={styles.button__icon} 
                    src="/icons/arrowBack.svg"
                    alt='back home icon'
                />
                <p className={styles.button__text}>
                    buy picture for {info.price}&nbsp;€
                </p>
            </button>

        </div>
    )
}