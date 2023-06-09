import { useState } from 'react'
import Navbar from '../Navbar'
import Title from '../Title'
import styles from './Header.module.css'

export default function Header({image, secondary}) {
    const [ subtitle, setSubtitle ] = useState(false)
    setTimeout(() => {
        setSubtitle(true)
    }, "1000")

    return (
        <header className={ styles.header }>
            <Navbar secondary={true}/>
            {/* ALTERAR IMAGEM DE ACORDO COM A PÁGINA */}
            {secondary ? 
            <img src="../images/bg1.png" alt="" className={ styles.bg } />
            :
            <img src="./images/bg1.png" alt="" className={ styles.bg } />
            }
            <div className={ styles.text }>
                <Title tag="h1" animation={true}>Muito além da Repactuação das Dívidas</Title>
                <Title tag="h2"><span className={ `${subtitle && styles.opc }` }>Assistimos os superendividados de uma forma integral.</span></Title>
            </div>
        </header>
    )
}