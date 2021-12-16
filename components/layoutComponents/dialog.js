// Styles:
import styles from './dialog.module.scss'

export default function Dialog({message}) {
    return (
        <div className={[styles.dialog, styles[message ? 'dialog--on' : 'dialog--off']].join(' ')}>
            <p className={styles.dialog__text}>
                {message}
            </p>
        </div>
    )
}
