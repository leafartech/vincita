import styles from './Subtitle.module.css'

export default function Subtitle({children, left, justify, center}) {
    return (
        <div className={ `${center && styles.center} ${justify ? styles.justify : ''} ${left ? styles.left : ''} ${styles.subtitle}` }>
            <p>{children}</p>
        </div>
    )
}