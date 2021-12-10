// Styles:
import styles from './main.module.scss'

export default function Main({children}) {
    return (
        <main className="app__main">
            <div className="app__generalSizeBox">
                <div className={["app__contentBox", styles.main].join(' ')}>
                    {children}
                </div>
            </div>
        </main>
    )
}
