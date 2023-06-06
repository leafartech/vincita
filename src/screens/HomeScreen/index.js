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
                <Section>
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
                    <img src="./imagesPv/map.png" alt="Localização do escritório Krüger Toledo" className={ styles.map } style={{ marginTop: '24px'}}/>
                    <span className={ styles['map-span']}><Subtitle left={true}>Brasília/DF: SHTN, 1, 3105, Asa Norte, CEP 70.800-200</Subtitle></span>
                    <img src="./imagesPv/map2.png" alt="Localização do escritório Krüger Toledo" className={ styles.map }/>
                    <span className={ styles['map-span']}><Subtitle left={true}>São Paulo/SP   Avenida Paulista, 1471, conjunto 511, Bela Vista</Subtitle></span>
                    <div className={ styles.btn }>
                        <Link link={true}  href='/repactuacao' style={{ color: 'var(--main-color)'}}>Entrar em Contato</Link>
                    </div>
                </Section>
            </Main>
            <Footer />
        </div>
    )
}