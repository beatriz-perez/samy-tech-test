// Styles:
import styles from './main.module.scss'
// Components:
import Dialog from './dialog';

export default function Main({children, dialogMessage}) {
    return (
        <main className="app__main">
            <Dialog message={dialogMessage}/>
            <div className="app__generalSizeBox">
                <div className={["app__contentBox", styles.main].join(' ')}>
                    {children}
                </div>
            </div>
        </main>
    )
}
