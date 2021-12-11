// Styles:
import styles from './imageList.module.scss'
// Content components:
import ImageCard from './imageCard'

export default function ImageList({info}) {
    return (
        <ul>
            {info.map((item, index) => (
                <li key={index + 1}>
                    <ImageCard info={item}/>
                </li>
            ))}
        </ul>
    )
}
