// Styles:
import styles from './header.module.scss'
// Content components:
import SearchBar from '../contentComponents/searchBar'

export default function Header({search, searchTask}) {

    return (
        <header className="app__header">
            <div className="app__generalSizeBox">
                <div className={["app__contentBox", styles.header].join(' ')}>
                    <img
                        className={styles.header__logo} 
                        src='/images/BPlogo.svg'
                        alt='Beatriz Perez logo'
                    />
                    <SearchBar search={search} searchTask={searchTask}/>
                </div>
            </div>
        </header>
    )
}
