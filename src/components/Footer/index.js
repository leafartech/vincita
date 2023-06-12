import styles from './Footer.module.css'

export default function Footer({ secondary }) {
    return (
        <footer className={ styles.footer }>
            {secondary ?
            <img src="../images/logo.png" alt="Escritório KRÜGER TOLEDO advocacia" />
            : 
            <img src="./images/logo.png" alt="Escritório KRÜGER TOLEDO advocacia" />
            }
            <p>KRÜGER TOLEDO © Todos os direitos reservados.</p>
        </footer>
    )
}