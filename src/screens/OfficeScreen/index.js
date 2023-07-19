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
                    <Title bg={true} top="Nosso alvo são as instituições financeiras">O escritório Krüger Toledo</Title>
                    <div className={ styles.text }>
                        <Subtitle bg={true} justify={true}>
                        O escritório  Krüger Toledo advocacia,  atua ajudando servidores públicos a superar o superendividamento. Com nossa ampla experiência no atendimento a inúmeros clientes e no gerenciamento de recursos significativos, estamos prontos para desenvolver estratégias jurídicas altamente eficazes para ajudar a reequilibrar suas finanças pessoais de maneira efetiva.
                        </Subtitle>
                        <Subtitle bg={true} left={true}>O escritório conta com uma equipe formada por:</Subtitle>
                        <ul className={ styles.ul }>
                            <li style={{ color: 'var(--main-color)', fontWeight: 400}}>Advogados auxiliares;</li>
                            <li style={{ color: 'var(--main-color)', fontWeight: 400}}>Contadores experientes;</li>
                            <li style={{ color: 'var(--main-color)', fontWeight: 400}}>Técnicos contadores auxiliares;</li>
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