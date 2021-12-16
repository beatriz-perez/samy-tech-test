// Styles:
import styles from './authorProfile.module.scss'
// Content components:
import ImageList from './imageList'

export default function AuthorProfile({info}) {
    return (
        <div className={styles.container}>
            {/* Name */}
            <p className={[styles.text, styles['text--name']].join(' ')}>
                {info.name}
            </p>
            {/* Data */}
            <div className={styles.blockBox}>
                <p className={styles.text}>
                    <span className={styles['text--infoTitle']}>
                        Pictures for sale:&nbsp;
                    </span>
                    {info.images.length}
                </p>
                <p className={styles.text}>
                    <span className={styles['text--infoTitle']}>
                        Total likes:&nbsp;
                    </span>
                    {info.images.reduce((sum, i) => ( sum + i.likes_count ), 0)}
                </p>
                <p className={styles.text}>
                    <span className={styles['text--infoTitle']}>
                        Total reposts:&nbsp;
                    </span>
                    {info.images.reduce((sum, i) => ( sum + i.reposts_count ), 0)}
                </p>
            </div>
            {/* Pictures */}
            <div className={styles.blockBox}>
                <p className={[styles.text, styles['text--infoTitle']].join(' ')}>
                    {info.name}'s pictures:
                </p>
                <ImageList initialList={info.images}/>
            </div>

        </div>
    )
}