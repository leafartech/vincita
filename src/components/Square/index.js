import styles from './Square.module.css'

export default function Square({title, subtitle}) {
    return (
        <div className={styles.square}>
            <h2 className={styles.squaret}>{title}</h2>
            <p className={styles.squares}>{subtitle}</p>
        </div>
    )
}