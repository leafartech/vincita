import Title from '@/components/Title'
import styles from './ThanksScreen.module.css'
import Subtitle from '@/components/Subtitle'

export default function ThanksScreen() {
    return (
        <div className={ styles['thanks-screen']}>
            <div>
                <Title>Muito obrigado por dar o primeiro passo</Title>
                <Subtitle center={true}>Entraremos em contato o mais rápido possível via Whatsapp</Subtitle>
            </div>
            <img src="./images/logo.png" alt="Logo do escritório KRÜGER TOLEDO" />
        </div>
    )
}