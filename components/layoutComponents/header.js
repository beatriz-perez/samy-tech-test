// Modules:
import Link from 'next/link'
// Styles:
import styles from './header.module.scss'
// Content components:
import SearchBar from './searchBar'

export default function Header({search, searchTask}) {
    return (
        <header className="app__header">
            <div className="app__generalSizeBox">
                <div className={["app__contentBox", styles.header].join(' ')}>
                    <Link href="/">
                        <img
                            className={styles.header__logo} 
                            src='/images/BPlogo.svg'
                            alt='Beatriz Perez logo'
                        />
                    </Link>
                    {searchTask ? (
                        <SearchBar search={search} searchTask={searchTask}/>
                    ) : (
                        <Link href="/">
                            <a className={styles.header__link}>
                                <img
                                    className={styles.header__icon} 
                                    src="/icons/home.svg"
                                    alt='back home icon'
                                />
                                <p className={styles.header__text}>
                                    see all pictures
                                </p>
                            </a>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    )
}
