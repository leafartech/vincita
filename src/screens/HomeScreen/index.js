import Header from '@/components/Header'
import styles from './HomeScreen.module.css'
import Main from '@/components/Main'
import Section from '@/components/Section'
import Title from '@/components/Title'
import Footer from '@/components/Footer'
import MySwiper from '@/components/MySwiper'

export default function HomeScreen() {
    return (
        <div className={ styles['home-screen']}>
            <Header />
            <Main>
                <Section>
                    <Title mt={true} bg={true} left={true} bot={true}>Áreas de Atuação</Title>
                    <MySwiper />
                </Section>
            </Main>
            <Footer />
        </div>
    )
}