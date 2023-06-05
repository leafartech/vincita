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
                <Section>
                    {/* Números */}
                    <Title top="Nosso Escritório">Escritório de advocacia Krüger Toledo</Title>
                    <div className={ 'flex' } style={{ marginTop: '24px'}}>
                        {/* <Card number={true} small="anos" name="+10" text="Ao longo de todos esses anos, a responsabilidade aliada à capacitação fizeram parte do sucesso de nosso escritório."/> */}
                        <Card number={true} small="clientes" name="+350" text="Não é apenas um número! São mais de 350 pessoas que confiaram em nosso trabalho e foram acompanhadas em todo processo por uma equipe de excelência."/>
                        <Card number={true} small="milhões" name="+13" text="Devemos esta alta quantia gerenciada à confiança depositada em nosso escritório quanto à resolução de questões jurídicas com maestria."/>
                    </div>
                </Section>
                <Section top={true}>
                    <Title bot={true} top="Nosso alvo são as instituições financeiras">O escritório KRÜGER TOLEDO te ajuda nessa caminhada, é fácil!</Title>
                    <div className={ styles.text }>
                        <Subtitle>Nós somos o escritório de advocacia Krüger Toledo especializado em resolver o problema do superendividamento dos servidores públicos.</Subtitle>
                        <Subtitle>Com nossa vasta experiência no atendimento de mais de 350 clientes e gerenciamento de mais de 13 milhões de reais, estamos plenamente capacitados a desenvolver estratégias jurídicas altamente eficazes para reequilibrar as finanças pessoais dos servidores públicos em um tempo recorde.</Subtitle>
                        <Subtitle>O escritório conta com uma equipe formada por:</Subtitle>
                        <ul className={ styles.ul }>
                            <li style={{ color: 'var(--neutral)', fontWeight: 300}}>Advogados auxiliares;</li>
                            <li style={{ color: 'var(--neutral)', fontWeight: 300}}>Contadores experientes;</li>
                            <li style={{ color: 'var(--neutral)', fontWeight: 300}}>Técnicos contadores auxiliares;</li>
                            <li style={{ color: 'var(--neutral)', fontWeight: 300}}>Atendimento psicológico para tratamento do sentimento de culpa do endividado;</li>
                            <li style={{ color: 'var(--neutral)', fontWeight: 300}}>Processualista com mais de 30 anos de experiência;</li>
                            <li style={{ color: 'var(--neutral)', fontWeight: 300}}>Equipe de apoio dedicada e pró ativa;</li>
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