import Header from '@/components/Header'
import styles from './HomeScreen.module.css'
import Main from '@/components/Main'
import Section from '@/components/Section'
import Title from '@/components/Title'
import Footer from '@/components/Footer'
import MySwiper from '@/components/MySwiper'
import HeroFlex from '@/components/HeroFlex'
import Card from '@/components/Card'

export default function HomeScreen() {
    return (
        <div className={ styles['home-screen']}>
            <Header />
            <Main>
                <Section>
                    <Title mt={true} bg={true} bot={true}>Áreas de Atuação</Title>
                    <MySwiper />
                </Section>
                <Section>
                    <span className={ styles.span }>
                        {/* <Title bot={true} bg={true}><span style={{ letterSpacing: '2px' }}>+350 CLIENTES +13 MILHÕES SOB GESTÃO</span></Title> */}
                        <Title mt={true} bg={true} bot={true}>+ 350 CLIENTES E + 13 MILHÕES SOB GESTÃO</Title>  
                    </span>
                    <HeroFlex bg={true} imagePath={'hero2'}>
                        <p style={{ marginBottom: '8px;'}}>
                            O KRÜGER TOLEDO ADVOCACIA resolve o superendividamento! Além de uma equipe de advogados altamente qualificados e experientes, contamos com profissionais multidisciplinares que resolvem desde os problemas contábeis até psicológicos.
                        </p>
                        <p>
                            Nosso objetivo é fornecer soluções personalizadas para atender às necessidades de nossos clientes, independente do grau de endividamento.
                        </p>
                    </HeroFlex>
                </Section>
                <Section top={true}>
                    <HeroFlex bg={true} imagePath={'hero'} reverse={true} title="O escritório conta com uma equipe completa que atende e resolve o seu problema.">
                        <h4>Contamos com uma equipe formado por:</h4>
                        <ul className={ styles.ul }>
                            <li>Advogados auxiliares;</li>
                            <li>Contadores experientes;</li>
                            <li>Técnicos contadores auxiliares;</li>
                            <li>Atendimento psicológico para tratamento do sentimento de culpa do endividado;</li>
                            <li>Processualista com mais de 30 anos de experiência;</li>
                            <li>Equipe de apoio dedicada e pró ativa;</li>
                        </ul>
                    </HeroFlex>
                </Section>
                <Section top={true}>
                    <Card team={true} imagePath="1" title="Esther Krüger">
                        <p>Esther Krüger Toledo, sócia-líder do escritório
formada pela PUC/RS, já trabalhou em empresas multinacionais e em uma das três maiores empresas de auditoria e contabilidade do mundo. Traz ao escritório a atualização e tecnologia necessária para os negócios nos dias atuais.</p>
                    </Card>
                </Section>
            </Main>
            <Footer />
        </div>
    )
}