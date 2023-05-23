import Link from 'next/link'
import styles from './Button.module.css'

export default function Button({ children, path, bg, modalChange, link}) {
    if (link) {
        return (
            <Link href={path} onClick={e => modalChange(e, true)} className={ `${bg ? styles.bg : ''} ${styles.button}` }>{children}</Link>
        )
    }
    return (
        <button onClick={e => modalChange(e)} className={ `${bg ? styles.bg : ''} ${styles.button}` }>
            {children}
        </button> 
    )
}