import Main from '@/components/Main'
import styles from './OfficeScreen.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Title from '@/components/Title'
import Subtitle from '@/components/Subtitle'
import Card from '@/components/Card'

export default function OfficeScreen() {
    return (
        <>
            <Header image="2"/>
            <Main>
                <Section top={true}>
                    <Title bg={true} top="Sobre">Escritório de advocacia Krüger Toledo</Title>
                    <div className={ styles['card-group']}>
                        <div className={ styles.card }>
                            <h4>+ 13 milhões geridos</h4>
                        </div>
                        <div className={ styles.card }>
                            <h4>+ 350 clientes satisfeitos</h4>
                        </div>
                    </div>
                </Section>
                <Section top={true}>
                    <Title bg={true} top="Nosso alvo são as instituições financeiras">O escritório KRÜGER TOLEDO te ajuda nessa caminhada, é fácil!</Title>
                    <div className={ styles.text }>
                        <Subtitle bg={true} justify={true}>Nós somos o escritório de advocacia Krüger Toledo especializado em resolver o problema do superendividamento dos servidores públicos.</Subtitle>
                        <Subtitle bg={true} justify={true}>Com nossa vasta experiência no atendimento de mais de 350 clientes e gerenciamento de mais de 13 milhões de reais, estamos plenamente capacitados a desenvolver estratégias jurídicas altamente eficazes para reequilibrar as finanças pessoais dos servidores públicos em um tempo recorde.</Subtitle>
                        <Subtitle bg={true} left={true}>O escritório conta com uma equipe formada por:</Subtitle>
                        <ul className={ styles.ul }>
                            <li style={{ color: 'var(--main-color)', fontWeight: 400}}>Advogados auxiliares;</li>
                            <li style={{ color: 'var(--main-color)', fontWeight: 400}}>Contadores experientes;</li>
                            <li style={{ color: 'var(--main-color)', fontWeight: 400}}>Técnicos contadores auxiliares;</li>
                            <li style={{ color: 'var(--main-color)', fontWeight: 400}}>Atendimento psicológico para tratamento do sentimento de culpa do endividado;</li>
                            <li style={{ color: 'var(--main-color)', fontWeight: 400}}>Processualista com mais de 30 anos de experiência;</li>
                            <li style={{ color: 'var(--main-color)', fontWeight: 400}}>Equipe de apoio dedicada e proativa;</li>
                        </ul>
                    </div>
                </Section>
                <Section>
                    {/* <Title>Contamos em nosso time de advogados, especialistas das seguintes áreas:</Title> */}
                    {/* Equipe --> equipe formada por: */}
                </Section>
            </Main>
            <Footer />
        </>
    )
}