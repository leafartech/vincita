import styles from './Subtitle.module.css'

export default function Subtitle({children, left}) {
    return (
        <div className={ `${left ? styles.left : ''} ${styles.subtitle}` }>
            <p>{children}</p>
        </div>
    )
}