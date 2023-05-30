import { useEffect, useState } from 'react'
import styles from './Alert.module.css'

export default function Alert({ title, children}) {
    const [ width, setWidth ] = useState(0)

    useEffect(() => {
        setWidth(window.screen.availWidth)
    }, [])
    return (
        <div className={ styles.alertDiv }>
            {parseInt(width) >= 920 ?
            <>
            <img src="./images/noticiaX.png" alt="Notícia Correio Brasiliense" />
            </>
            :
            <>
            <img src="./images/noticia.png" alt="Notícia Correio Brasiliense" />
            </>
            }
        </div>
    )
}