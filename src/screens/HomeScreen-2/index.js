import styles from './HomeScreen.module.css'
import Main from '@/components/Main2'

export default function HomeScreen() {
    return (
        <div className={ styles['home-screen']}>
            <Main />
        </div>
    )
}