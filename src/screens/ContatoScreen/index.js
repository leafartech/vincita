import Header from '@/components/Header'
import styles from './ContatoScreen.module.css'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Title from '@/components/Title'
import Subtitle from '@/components/Subtitle'
import Link from 'next/link'

export default function ContatoScreen() {
    return (
        <div className={ styles['contato-screen']}>
            <Header />
            <Main>
                <Section>
                    <div className={ `${ styles.social }` }>
                        <Title>Contato:</Title>
                        <Link href="/repactuacao" className={ styles.link }>Saiba mais</Link>
                    </div>
                </Section>
                <Section top={true}>
                    <Title>Localizações</Title>
                    <div className={ styles.map }>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15357.17979254058!2d-47.85083294764666!3d-15.788394306605326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b6f4f6fa587%3A0x1d900d7fd8b72d0d!2sSHTN%20-%20Bras%C3%ADlia%2C%20DF%2C%2070297-400!5e0!3m2!1spt-BR!2sbr!4v1685490054213!5m2!1spt-BR!2sbr" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                    </iframe>
                    <div>
                        <div>
                            <Title tag="h3" left={ true }>Endereço Brasília: </Title>
                            <Subtitle left={ true }>Brasília, DF. SHTN, 1, 3105, Asa Norte. CEP: 70.800-200</Subtitle>
                        </div>
                        <div>
                            <Title tag="h3" left={ true }>Endereço São Paulo: </Title>
                            <Subtitle left={ true }>São Paulo/SP   Avenida Paulista, 1471, conjunto 511, Bela Vista.</Subtitle>
                        </div>
                    </div>
                    </div>
                </Section>
            </Main>
            <Footer />
        </div>
    )
}