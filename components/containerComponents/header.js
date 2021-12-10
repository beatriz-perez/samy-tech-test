// Styles:
import styles from './header.module.scss'

export default function Header() {
    return (
        <header className="app__header">
            <div className="app__generalSizeBox">
                <div className={["app__contentBox", styles.header].join(' ')}>
                    <p>
                        header logo
                    </p>
                    <p>
                        header search bar
                    </p>
                </div>
            </div>
        </header>
    )
}
