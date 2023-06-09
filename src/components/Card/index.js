import Link from 'next/link'
import styles from './Card.module.css'

export default function Card({imagePath, title, children}) {
    return (
        <div className={ styles.card }>
            <img src={`./images/card/${imagePath}.png`} />
            <div className={ styles.text }>
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    )
}