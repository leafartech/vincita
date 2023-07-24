import styles from './Card.module.css'

export default function Card({imagePath, title, children, team}) {
    return (
        <div className={ `${styles.sm} ${styles.card}` }>
            {!team ?
            <img src={`./images/card/${imagePath}.png`} />
            :
            <img className={ styles.team } src={`./images/${imagePath}.png`} />
            }
            <div className={ styles.text }>
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    )
}