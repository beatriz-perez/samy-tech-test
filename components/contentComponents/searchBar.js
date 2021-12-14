// Styles:
import styles from './searchBar.module.scss'

export default function SearchBar({search, searchTask}) {
    return (
        <div className={styles.bar}>
            <img
                className={styles.bar__icon} 
                src="/icons/search.svg"
                alt='search icon'
            />
            <input
                className={styles.bar__input}
                type="text"
                placeholder={search === null ? "You're looking for something?" : search}
                onChange={searchTask}
            />
        </div>
    )
}