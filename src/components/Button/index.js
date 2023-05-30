import Link from 'next/link'
import styles from './Button.module.css'

export default function Button({ children, path, bg, modalChange, link, alert}) {
    if (link) {
        return (
            <Link href={path} className={ `${alert ? styles.alert : ''} ${bg ? styles.bg : ''} ${styles.button}` }>{children}</Link>
        )
    }
    return (
        <button onClick={e => modalChange(e)} className={ `${bg ? styles.bg : ''} ${styles.button}` }>
            {children}
        </button> 
    )
}