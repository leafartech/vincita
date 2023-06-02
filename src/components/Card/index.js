import Link from 'next/link'
import styles from './Card.module.css'

export default function Card({children, path, name, position, text, href, number, small, responsive}) {
    if (number) {
        return (
            <div className={ `${styles['card-number']}` }>
                <h2>{name}<span>{small}</span></h2>
                <div className={ styles.body }>
                    <p>{text}</p>
                </div>
            </div>
        )
    }
    return (
        <div className={ `${responsive ? styles.responsive : ''} ${styles.card}` }>
            <div className={ `${responsive ? styles.responsive : ''} ${styles.image}` }>
                <img src={`./images/${path}.png`} alt={name} />
            </div>
            <div className={ styles.body }>
                <div>
                    <h2>{name}</h2>
                    <h4>{position}</h4>
                </div>
                <p>{text}</p>
                <Link href={href}>Mais informações</Link>
            </div>
        </div>
    )
}