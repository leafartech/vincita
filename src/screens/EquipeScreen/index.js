import Header from '@/components/Header'
import styles from './EquipeScreen.module.css'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Grid from '@/components/Grid'
import Aside from '@/components/Aside'
import Title from '@/components/Title'
import Card from '@/components/Card'

export default function EquipeScreen() {

    return (
        <div className={ styles['equipe-screen']}>
            <Header />
            <Main>
                <Grid>
                    <Aside/>
                    <div>
                        <Section>
                            <Title bot={true} top="Capacitação" left={true}>Nosso time de advogados</Title>
                            <div className={ styles['card-group']}>
                                <Card responsive={true} href="/equipe/bossuet" name="Nome da pessoa" path="1" position="Advogado master e sócio fundador"></Card>
                                <Card responsive={true} href="/equipe/bossuet" name="Nome da pessoa" path="2" position="Advogado master e sócio fundador"></Card>
                                <Card responsive={true} href="/equipe/bossuet" name="Nome da pessoa" path="1" position="Advogado master e sócio fundador"></Card>
                                <Card responsive={true} href="/equipe/bossuet" name="Nome da pessoa" path="1" position="Advogado master e sócio fundador"></Card>
                                <Card responsive={true} href="/equipe/bossuet" name="Nome da pessoa" path="2" position="Advogado master e sócio fundador"></Card>
                                <Card responsive={true} href="/equipe/bossuet" name="Nome da pessoa" path="1" position="Advogado master e sócio fundador"></Card>
                                <Card responsive={true} href="/equipe/bossuet" name="Nome da pessoa" path="1" position="Advogado master e sócio fundador"></Card>
                                <Card responsive={true} href="/equipe/bossuet" name="Nome da pessoa" path="2" position="Advogado master e sócio fundador"></Card>
                                <Card responsive={true} href="/equipe/bossuet" name="Nome da pessoa" path="1" position="Advogado master e sócio fundador"></Card>
                            </div>
                        </Section>
                    </div>
                </Grid>
            </Main>
            <Footer />
        </div>
    )
}