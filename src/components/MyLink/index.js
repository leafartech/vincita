import Link from 'next/link'
import styles from './MyLink.module.css'
import { useRouter } from 'next/router'

export default function MyLink({path, children}) {
    const router = useRouter()
    return (
        <Link href={path} className={ `${router.pathname === path ? styles.active : ''} ${styles.link}` }>
            {children}
        </Link>
    )
}