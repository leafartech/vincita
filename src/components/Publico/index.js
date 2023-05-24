import Text from '../Text'
import styles from './Publico.module.css'

export default function Publico({ok, children, title}) {
    return (
        <div className={ styles.publico }>
            <div className={ `${ok ? styles.ok : styles.notOk} ${styles.header}` }>
                <Text bg={true}>{title}</Text>
            </div>
            <div className={ styles.body }>
                {children}
            </div>
        </div>
    )
}