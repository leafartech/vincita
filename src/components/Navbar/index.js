import { useState } from 'react'
import MyLink from '../MyLink'
import styles from './Navbar.module.css'

export default function Navbar({secondary}) {
    const [ menu, setMenu ] = useState(false)

    function menuToggle() {
        setMenu(!menu)
    }

    return (
        <>
        {/* <div className={ styles['fast-contact']}>
            <p>Whatsapp: 61 981401978</p>
        </div> */}
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
                    <MyLink path="/">INÍCIO</MyLink>
                </li>
                <li>
                    <MyLink path="/sobre">QUEM SOMOS</MyLink>
                </li>
                <li>
                    <MyLink path="/localizacao">ONDE ESTAMOS</MyLink>
                </li>
                <li>
                    <MyLink path="/repactuacao">CONTATO</MyLink>
                </li>
            </ul>
        </nav>
        </>
    )
}