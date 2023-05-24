import styles from './Subtitle.module.css'

export default function Subtitle({ children, left, size, bg }) {
    return (
        <div className={ `${bg ? styles.bg : ''} ${size ? styles.size : ''} ${left ? styles.left : ''} ${styles.subtitle}` }>
            <p>{children}</p>
        </div>
    )
}