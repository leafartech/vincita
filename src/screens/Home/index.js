import Header from "@/components/Header";
import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import Template from "@/components/Template";
import styles from './Home.module.css'
import Button from "@/components/Button";
import Text from "@/components/Text";
import List from "@/components/List";
import Publico from "@/components/Publico";
import Alert from "@/components/Alert";
import Dropdown from "@/components/Dropdown";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function HomeScreen() {
    const [ modalState, setModalState ] = useState(false)

    function modalChange(e, off) {
        if (off) {
            setModalState(false)
            return
        }
        setModalState(!modalState)
        console.log('aq')
    }

    const faq = [{
        title: '1. O que é superendividamento? Quando o servidor público está superendividado?', text: 'Texto...'}, 
        {title: '2. Que espécie de dívidas podem levar ao superendividamento?', text: 'Texto...'}, 
        { title: '3. As dívidas devem estar vencidas?', text: 'Texto...'}, 
        {title: '4. O superendividamento leva em consideração a minha renda? Está relacionado a pobreza?', text: 'Texto...'}, 
        {title: '5. O superendividamento é culpa do consumidor?', text: 'Texto...'},
        {title: '6. O tratamento do superendividamento só se aplica aos contratos novos?', text: 'Texto...'},
        {title: '7. Posso dizer que o tratamento do superendividamento é perdão de dívidas?', text: 'Texto...'}
    ]

    return (
        <Template>
            <Header text="Diminua sua dívida e Recupere sua Estabilidade Financeira">
                <Subtitle>
                    Servidor público, <span className='strong'>assista o vídeo abaixo</span> e entenda como o <span className="strong">nosso escritório irá reequilibrar as suas finanças pessoais</span>
                </Subtitle>
                <div className={ styles.video }>
                    <img src="./images/videoMock.png" alt="Vídeo do header" />
                </div>
                <Button modalChange={e => modalChange(e)} path="/">
                    Recupere a sua estabilidade financeira agora!
                </Button>
            </Header>
            <main className={ styles.main }>
                <Section>
                    <Text bottom={true} tag="h2">Com a assessoria do nosso escritório, você aliviará as suas contas em um tempo recorde!</Text>
                    <List />
                    <Button modalChange={e => modalChange(e)} path="/">Recupere a sua estabilidade financeira agora!</Button>
                </Section>
                <Section bg={true} top={true}>
                    <Text bottom={true} bg={true} tag="h2">Entenda se a Lei de Repactuação de Dívidas serve para você:</Text>
                    <div className={ styles.publico }>
                        <Publico ok={true} title="Para quem serve:">
                            <ul className={ styles.list } style={{ listStyle: 'none'}}>
                                <li>
                                    <img src="./images/check.png" alt="check" />
                                    <p>Paga mensalmente <span className="strong">dívidas acima de 35% da sua renda mensal</span></p>
                                </li>
                                <li>
                                    <img src="./images/check.png" alt="check" />
                                    <div>
                                        <p>Possui dívidas de consumo como:</p>
                                        <ul style={{ listStyle: 'none'}}>
                                            <li>1- Contas Bancárias</li>
                                            <li>2- Contas de Comércio</li>
                                            <li>3- Telefone, energia elétrica, água, condomínio, aluguel, remédio, medicamentos, plano de saúde</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <img src="./images/check.png" alt="check" />
                                    <p>Paga mensalmente <span className="strong">dívidas acima de 35% da sua renda mensal</span></p>
                                </li>
                            </ul>
                        </Publico>
                        <div className={ styles['vs-div']}>
                            <img src="./images/no.png" alt="vs" className={ styles['vs-img']} />
                        </div>
                        <Publico ok={false} title="Para quem não serve:">
                            <ul className={ styles.list } style={{ listStyle: 'none'}}>
                                <li>
                                    <img src="./images/check.png" alt="check" />
                                    <p>Possui <span className="strong">35% de suas dívidas</span> ligados a atividade econômica ou profissional</p>
                                </li>
                                <li>
                                    <img src="./images/check.png" alt="check" />
                                    <p>Fez <span className="strong">"dívidas de má fé"</span> já pensando em usar a lei para reequilibrar as contas!</p>
                                </li>
                            </ul>
                        </Publico>
                    </div>
                </Section>
                <Section>
                    <img src="./images/wallet.png" alt="Carteira sem dinheiro" className={ styles.wallet } />
                    <div className={ styles.walletTxt }>
                        <Text left={true}>Entenda o funcionamento da Lei de Repactuação de Dívidas e recupere seu equilíbrio financeiro!</Text>
                        <span style={{ margin: '24px 0'}}><Subtitle left={true}>A lei de Repactuação de dívidas é um dos pilares essenciais para tratar o Superendividamento do Brasil.</Subtitle></span>
                        <Subtitle left={true}>Os superendividados são aqueles que o <span className="strong">valor de suas dívidas está acima de 35% da sua renda mensal</span>.</Subtitle>
                        <Button modalChange={e => modalChange(e)} path={'/'}>Recupere a sua estabilidade financeira agora!</Button>
                    </div>
                </Section>
                <Section>
                    <Alert title="SERVIDOR PÚBLICO">30% dos servidores públicos do Distrito Federal estão superendividados</Alert>
                    <div className={ styles.text }>
                        <Subtitle>O superendividamento é uma preocupação antiga do Brasil. No caso dos servidores públicos, esse problema torna-se ainda mais evidente, pois muitas vezes é oculto e invasivo, comprometendo suas finanças pessoais.</Subtitle>
                        <Subtitle>
                        As instituições financeiras e grandes varejistas aproveitam-se da estabilidade natural do servidor público para <span className="strong">aplicar juros altíssimos, tornando quase impossível o equilíbrio financeiro</span>. Essas práticas abusivas prejudicam a qualidade de vida dos servidores, afetando sua saúde financeira e emocional.
                        </Subtitle>
                        <Subtitle>
                            <span className="strong">A Lei de Repactuação de Dívidas: A solução para recuperar sua estabilidade financeira!</span>
                        </Subtitle>
                        <Subtitle>
                        A boa notícia é que a Lei de Repactuação de Dívidas veio para acabar com o problema do superendividamento dos servidores públicos. Com base nessa lei, <span className="strong">estamos empenhados em ajudar você a diminuir suas dívidas e retomar o controle de suas finanças</span>.
                        </Subtitle>
                    </div>
                    <Button modalChange={e => modalChange(e)} path={'/'}>Quero sair do superendividamento agora!</Button>
                </Section>
                <Section flex={true}>
                    <img src="./images/equality.png" alt="Imagem icônica de direito"/>
                    <div>
                        <span style={{ marginTop: '24px'}}>
                            <Text tag="h2" left={true} bottom={true}>Quem nós somos</Text>
                        </span>
                        <Subtitle left={true}>Nós somos o <span className='strong'>escritório de advocacia Kruger Toledo especializado em resolver o problema do superendividamento dos servidores públicos</span>.</Subtitle>
                        <Subtitle left={true}>Com nossa vasta experiência de <span className='strong'>gerenciamento de mais de X reais</span>, estamos plenamente capacitados a desenvolver estratégias jurídicas altamente eficazes para <span className='strong'>reequilibrar as finanças pessoais dos servidores públicos em um tempo recorde</span>.</Subtitle>
                        <Button modalChange={e => modalChange(e)} path={'/'}>Conte com nossa ajuda!</Button>
                    </div>
                </Section>
                <Section bg={true} top={true}>
                    <Text tag="h2" bg={true} bottom={true}>Onde estamos?</Text>
                    <img src="./images/map.png" alt="Localização do escritório Kruger Toledo"/>
                    <span style={{ marginTop: '24px'}}><Subtitle left={true}>Endereço: </Subtitle></span>
                    <Button modalChange={e => modalChange(e)} bg={true} path={'/'}>Quero recuperar o equilíbrio financeiro!</Button>
                </Section>
                <Section>
                    <Text tag="h2" bottom={true}>Dúvidas Frequentes</Text>
                    <Dropdown
                        liDrowdown={faq}
                    />
                </Section>
                <div id="formulario">
                    <Text>[ FORMULÁRIO ]</Text>
                </div>
            </main>
            <Modal modalChange={e => modalChange(e)} modalState={modalState} />
        </Template>
    )
}