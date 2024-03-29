import Header from '@/components/Header'
import styles from './HomeScreen.module.css'
import Main from '@/components/Main'
import Section from '@/components/Section'
import Title from '@/components/Title'
import Footer from '@/components/Footer'
import MySwiper from '@/components/MySwiper'
import HeroFlex from '@/components/HeroFlex'
import Link from 'next/link'

export default function HomeScreen() {
    return (
        <div className={styles['home-screen']}>
            <Link href="https://api.whatsapp.com/send?phone=5561981401978&text=Olá!%20Quero%20saber%20mais%20sobre%20os%20serviços%20do%20escritório%20Krüger%20Toledo%20Advocacia." target='_blank' className={styles.whatsapp}>
                <img src="./images/whatsapp.png" alt="Link para o Whatsapp Kruger Toledo" />
            </Link>
            <Header />
            <Main>
                <Section>
                    <Title mt={true} bg={true} bot={true}>Áreas de Atuação</Title>
                    <MySwiper />
                </Section>
                <Section>
                    <span className={styles.span}>
                    </span>
                    <HeroFlex bg={true} imagePath={'hero2'} title="O escritório Krüger Toledo advocacia e sua atuação na área bancária.">
                        <p style={{ marginBottom: '8px;' }}>
                        Acompanhamos de perto no dia a dia todas ilegalidades e abusividades que são realizadas com o consumidor. Compramos essa briga e atuamos somente contra os grandes bancos.                         </p>
                        <p>
                            Nosso objetivo é fornecer soluções personalizadas para atender às necessidades de nossos clientes, independente do grau de endividamento.
                        </p>
                    </HeroFlex>
                </Section>
                <Section top={true}>
                    <HeroFlex bg={true} imagePath={'hero'} reverse={true} title="O escritório conta com uma equipe completa que atende e resolve o seu problema.">
                        <h4>Contamos com uma equipe formado por:</h4>
                        <ul className={styles.ul}>
                            <li>Advogados auxiliares;</li>
                            <li>Contadores experientes;</li>
                            <li>Técnicos contadores auxiliares;</li>
                            <li>Equipe de apoio dedicada e proativa;</li>
                        </ul>
                    </HeroFlex>
                </Section>
                <Section top={true}>
                    <div className={styles.minus}>
                        <Title bg={true} bot={true} mt={true}>Esther Krüger Toledo</Title>
                        <div className={styles.hero}>
                            <img src="./images/1.png" alt="Esther Krüger Toledo" />
                            <p>Sócia-líder do escritório formada pela PUC/RS, já trabalhou em empresas multinacionais e em uma das três maiores empresas de auditoria e contabilidade do mundo. Trabalha diariamente auxiliando pessoas que foram vítimas das grandes instituições financeiras. Traz ao escritório a atualização e tecnologia necessária para os negócios atualmente.</p>
                        </div>
                    </div>
                </Section>
            </Main>
            <Footer />
        </div>
    )
}