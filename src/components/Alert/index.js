import styles from './Alert.module.css'

export default function Alert({ title, children}) {
    return (
        <div className={ styles.alertDiv }>
            <div className={ styles.header }>{title}</div>
            <h3>{children}</h3>
        </div>
    )
}