import styles from './Subtitle.module.css'

export default function Subtitle({ justify, children, left, size, bg }) {
    return (
        <div className={ `${justify ? styles.justify : ''} ${bg ? styles.bg : ''} ${size ? styles.size : ''} ${left ? styles.left : ''} ${styles.subtitle}` }>
            <p>{children}</p>
        </div>
    )
}