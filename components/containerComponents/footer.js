// Styles:
import styles from './footer.module.scss'

export default function Footer() {
    return (
        <footer className="app__footer">
            <div className="app__generalSizeBox">
                <div className={["app__contentBox", styles.footer].join(' ')}>
                    <p className={styles.footer__text}>
                        developed with &hearts; by&nbsp;
                        <a 
                            className={[styles.footer__text, styles['footer__text--link']].join(' ')}
                            href="https://beatrizportfolio.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="ir a portfolio de Beatriz"
                        >
                            Beatriz Pérez
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
