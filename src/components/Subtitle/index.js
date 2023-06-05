import styles from './Subtitle.module.css'

export default function Subtitle({children, left, justify}) {
    return (
        <div className={ `${justify ? styles.justify : ''} ${left ? styles.left : ''} ${styles.subtitle}` }>
            <p>{children}</p>
        </div>
    )
}