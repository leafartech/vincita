import Header from '@/components/Header'
import styles from './HomeScreen.module.css'
import Main from '@/components/Main'
import Section from '@/components/Section'
import Title from '@/components/Title'
import Subtitle from '@/components/Subtitle'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function HomeScreen() {
    return (
        <div className={ styles['home-screen']}>
            <Header />
            <Main>
                <Section>
                    <Title tag="h2" top="Seriedade e Excelência">Especialistas em repactuação de dívidas</Title>
                    {/* <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida sit amet arcu eu auctor. Proin efficitur tristique elementum.</Subtitle> */}
                </Section>
                <Section top={true}>
                    <Title bot={ true }>Nossos melhores advogados a 1 clique de distância</Title>
                    {/* <div className={ styles.bord }></div> */}
                    <div className={ 'flex' } style={{ marginTop: '24px'}}>
                        <Card href="/equipe/bossuet" name="Esther Krüger" path="1" position="Sócia-líder do escritório" text="Formada pela PUC/RS, já trabalhou em empresas multinacionais e em uma das três maiores empresas de auditoria e contabilidade do mundo. Traz ao escritório a atualização e tecnologia necessária para os negócios nos dias atuais."></Card>
                    </div>
                </Section>
                <Section top={true} >
                    <div className={ styles.border }>
                        <Title tag="h2">Entenda como recuperar sua estabilidade financeira</Title>
                        <div className={ styles.btn }>
                            <Link href="/repactuacao" style={{ color: 'var(--main-color)'}}>Saiba mais</Link>
                        </div>
                    </div> 
                </Section>
                <Section top={true}>
                    <Title>Onde nos encontrar?</Title>
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
