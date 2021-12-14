// Styles:
import styles from './cardActionIcon.module.scss'

export default function CardActionIcon({ type, info, task }) {
    return (
        <button className={styles.button} title="like" onClick={task} >
            <svg 
                className={[styles.icon, styles[info === true ? "icon--true": "icon--false"]].join(' ')} 
                viewBox="0 0 30 30" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                {type === 'like' && (
                    <path fillRule="evenodd" clipRule="evenodd" d="M15 0C6.71875 0 0 6.71875 0 15C0 23.2812 6.71875 30 15 30C23.2812 30 30 23.2812 30 15C30 6.71875 23.2812 0 15 0ZM21.1363 21.4286C19.6502 22.797 17.4623 23.62 14.5714 23.6616V23.6633H14.34H7.71429C7.25963 23.6633 6.82359 23.4827 6.5021 23.1612C6.18061 22.8397 6 22.4037 6 21.949C6 21.4944 6.18061 21.0583 6.5021 20.7368C6.82359 20.4153 7.25963 20.2347 7.71429 20.2347H6.85714C6.40249 20.2347 5.96645 20.0541 5.64496 19.7326C5.32347 19.4111 5.14286 18.9751 5.14286 18.5204C5.14286 18.0658 5.32347 17.6297 5.64496 17.3083C5.96645 16.9868 6.40249 16.8062 6.85714 16.8062C6.40249 16.8062 5.96645 16.6255 5.64496 16.3041C5.32347 15.9826 5.14286 15.5465 5.14286 15.0919C5.14286 14.6372 5.32347 14.2012 5.64496 13.8797C5.96645 13.5582 6.40249 13.3776 6.85714 13.3776H7.71429C7.25963 13.3776 6.82359 13.197 6.5021 12.8755C6.18061 12.554 6 12.118 6 11.6633C6 11.2086 6.18061 10.7726 6.5021 10.4511C6.82359 10.1296 7.25963 9.94901 7.71429 9.94901L14.3395 9.94901L13.6408 7.80615C13.1588 6.51114 12.7836 5.23472 14.0693 4.37758C15.3422 4.02526 15.9349 4.74855 16.5429 5.49054C16.7122 5.69714 16.8827 5.90519 17.0693 6.09187L18.7836 8.23472C19.5676 9.19955 20.3351 9.80986 21.0157 10.351C21.3545 10.6203 21.6718 10.8726 21.9587 11.1429H24V21.4286H21.1363Z" fill="currentColor"/>
                )}
                {type === 'repost' && (
                    <path fillRule="evenodd" clipRule="evenodd" d="M15 0C6.71875 0 0 6.71875 0 15C0 23.2812 6.71875 30 15 30C23.2812 30 30 23.2812 30 15C30 6.71875 23.2812 0 15 0ZM13.7199 5.69381C15.7111 5.36278 17.7519 5.70787 19.5307 6.6735C21.3089 7.63882 22.7248 9.16939 23.5695 11.027C24.4139 12.8842 24.6433 14.9709 24.2246 16.9717C23.8059 18.9726 22.7605 20.7843 21.2407 22.1287C19.7204 23.4735 17.8088 24.2764 15.7954 24.409C13.782 24.5417 11.7841 23.9963 10.106 22.8605C9.51801 22.4624 9.36399 21.6631 9.76202 21.075C10.1601 20.487 10.9594 20.333 11.5475 20.731C12.7561 21.5491 14.1881 21.9379 15.6264 21.8432C17.0648 21.7484 18.4383 21.1746 19.537 20.2026C20.6363 19.2303 21.4007 17.9119 21.7077 16.445C22.0147 14.9779 21.8458 13.4487 21.2286 12.0913C20.6117 10.7344 19.5826 9.62759 18.3039 8.93341C17.0257 8.23956 15.5648 7.99383 14.1416 8.23042C12.7286 8.46534 11.4227 9.16425 10.4218 10.2287L9.93627 10.8079L12.3739 11.6633C12.5177 11.7134 12.6433 11.8051 12.7349 11.9268C12.8265 12.0484 12.8798 12.1945 12.8882 12.3466C12.8966 12.4986 12.8596 12.6497 12.782 12.7807C12.7044 12.9118 12.5896 13.0168 12.4522 13.0825L7.65913 15.3845C7.47509 15.4729 7.26348 15.4846 7.07087 15.417C6.87825 15.3494 6.7204 15.2081 6.63204 15.0241L4.33005 10.2311C4.28584 10.1396 4.26021 10.0403 4.25466 9.93881C4.24911 9.83734 4.26374 9.73576 4.2977 9.63997C4.33166 9.54418 4.38428 9.45606 4.45252 9.38072C4.52076 9.30538 4.60326 9.24431 4.69525 9.20105L4.69844 9.2015C4.78866 9.15863 4.8865 9.13412 4.98627 9.12938C5.08605 9.12465 5.18576 9.13979 5.27962 9.17392L7.40054 9.91815C7.44918 9.80297 7.51558 9.69299 7.60008 9.59217L8.49518 8.52419L8.51813 8.49955C9.90338 7.01235 11.729 6.02479 13.7199 5.69381Z" fill="currentColor"/>
                )}
            </svg>
        </button>
    )
}
