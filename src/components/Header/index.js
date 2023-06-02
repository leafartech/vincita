import Navbar from '../Navbar'
import styles from './Header.module.css'

export default function Header({image, secondary}) {
    return (
        <header className={ styles.header }>
            <Navbar secondary={true}/>
            {/* ALTERAR IMAGEM DE ACORDO COM A PÁGINA */}
            {secondary ? 
            <img src="../images/bg.png" alt="" className={ styles.bg } />
            :
            <img src="./images/bg.png" alt="" className={ styles.bg } />
            }
        </header>
    )
}