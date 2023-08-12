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
            <img src="./imagesPv/noticiaX.png" alt="Notícia Correio Brasiliense" />
            </>
            :
            <>
            <img src="./imagesPv/noticia.png" alt="Notícia Correio Brasiliense" />
            </>
            }
        </div>
    )
}