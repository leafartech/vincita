import Title from '@/components/Title'
import styles from './ThanksScreen.module.css'

export default function ThanksScreen() {
    return (
        <div className={ styles['thanks-screen']}>
            <div>
                <Title>Muito obrigado por dar o primeiro passo</Title>
                <p>Entraremos em contato o mais rápido possível via Whatsapp</p>
            </div>
            <img src="./imagesPv/logo.png" alt="Logo do escritório KRÜGER TOLEDO" />
        </div>
    )
}