// Styles:
import styles from './footer.module.scss'

export default function Footer() {
    return (
        <footer className="app__footer">
            <div className="app__generalSizeBox">
                <div className={["app__contentBox", styles.footer].join(' ')}>
                    <p>
                        footer
                    </p>
                </div>
            </div>
        </footer>
    )
}
