import { useState } from 'react'
import MyLink from '../MyLink'
import styles from './Navbar.module.css'

export default function Navbar({secondary}) {
    const [ menu, setMenu ] = useState(false)

    function menuToggle() {
        setMenu(!menu)
    }

    return (
        <nav className={ styles.navbar }>
            <div className={ styles.logo }>
                {secondary ?
                <img src="../images/logo.png" alt="Logo do Escritório Krüger toledo" />
                :
                <img src="./images/logo.png" alt="Logo do Escritório Krüger toledo" />
                }
            </div>
            <div className={ `${menu ? styles.active : ''} ${styles.hamburguer}` } onClick={e => menuToggle()}>
                <div className={ styles.f}></div>
                <div className={ styles.s}></div>
                <div className={ styles.t}></div>
            </div>
            <ul className={ `${menu ? styles.active : ''} ${styles.menu}` }>
                <li>
                    <MyLink path="/">Início</MyLink>
                </li>
                <li>
                    <MyLink path="/escritorio">Nosso escritório</MyLink>
                </li>
                {/* <li>
                    <MyLink path="/equipe">Equipe</MyLink>
                </li> */}
                <li>
                    <MyLink path="/repactuacao">Contato</MyLink>
                </li>
            </ul>
        </nav>
    )
}