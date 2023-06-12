import Header from '@/components/Header'
import styles from './Localizacao.module.css'
import Main from '@/components/Main'
import Section from '@/components/Section'
import Title from '@/components/Title'
import Subtitle from '@/components/Subtitle'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function LocalizacaoScreen() {
    return (
        <div className={ styles['localizacao-screen']}>
            <Header image="2"/> 
            <Main>
                <Section top={true}>
                    <Title bg={true}>Onde estamos?</Title>
                    <Subtitle>Faça sua opção por atendimento presencial ou on-line</Subtitle>
                    <img src="./imagesPv/map.png" alt="Localização do escritório Krüger Toledo" className={ styles.map } style={{ marginTop: '24px'}}/>
                    <span style={{ marginTop: '24px'}}><Subtitle left={true} size={true}>Alvorada - Brasília: SHTN, Asa Norte Trecho 1 Golden Tulip, CEP 70.800-200</Subtitle></span>
                    <img src="./imagesPv/map2.png" alt="Localização do escritório Krüger Toledo" className={ styles.map } style={{ marginTop: '24px'}}/>
                    <span style={{ marginTop: '24px'}}><Subtitle left={true} size={true}>São Paulo/SP: Avenida Paulista, 1471, conjunto 511, Bela Vista, CEP 01.311-927</Subtitle></span>
                    <Link href="/repactuacao" className={ styles.link }>Quero recuperar o equilíbrio financeiro!</Link>
                </Section>
            </Main>
            <Footer />
        </div>
    )
}