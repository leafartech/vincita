import Text from '../Text'
import styles from './Header.module.css'

export default function Header({ text, children }) {
    return (
    <header className={ `${styles.header}` }>
        <Text small={true} bottom={true} tag="h1">{text}</Text>
        {children}
    </header>
    )
}