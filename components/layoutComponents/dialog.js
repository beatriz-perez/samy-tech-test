// Styles:
import styles from './dialog.module.scss'

export default function Dialog({message}) {
    return (
        <div className={[
            styles.dialog, 
            styles[message ? 'dialog--on' : 'dialog--off'],
            styles[message && message !== 'hide' ? '' : 'dialog--hidden']
        ].join(' ')}>
            <div className={[styles.dialog__box, styles[message ? 'dialog__box--on' : 'dialog__box--off']].join(' ')}>
                <p className={styles.dialog__text}>
                    {message}
                </p>
            </div>
        </div>
    )
}
