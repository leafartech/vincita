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
import Calculadora from "@/components/Calculadora";

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
            <Header text="A LEI DE REPACTUAÇÃO DE DÍVIDAS FOI REGULAMENTADA NO DF!!">
                <Subtitle>
                Servidor público, acerte suas finanças e recupere sua estabilidade financeira sem precisar buscar novos empréstimos.
                </Subtitle>
                <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center'}}>
                    <Alert title="SERVIDOR PÚBLICO">30% dos servidores públicos do Distrito Federal estão superendividados</Alert>
                </div>
                <div className={ styles.video }>
                    <Text>O escritório Krüger Toledo irá te ajudar com essa nova oportunidade, veja:</Text>
                    <img style={{ marginTop: '18px' }} src="./images/videoMock.png" alt="Vídeo do header" />
                </div>
                <Button link={true} path="#calculadora">
                    Recupere a sua estabilidade financeira agora!
                </Button>
            </Header>
            <main className={ styles.main }>
                <Section>
                    <img src="./images/localization.png" alt="imagem decorativa" className={ styles['float-left'] } />
                    <Text bottom={true} tag="h2">Observe ainda, na linha do tempo, como funciona:</Text>
                    <List />
                    <Button link={true} path="#calculadora">Recupere a sua estabilidade financeira agora!</Button>
                    <img src="./images/localization.png" alt="imagem decorativa" className={ styles['float-right'] } />
                </Section>
                <Section bg={true} top={true}>
                    <Text bottom={true} bg={true} tag="h2">Entenda se os benefícios da lei de repactuação são para você:</Text>
                    <div className={ styles.publico }>
                        <Publico ok={true} title="Para quem serve:">
                            <ul className={ styles.list } style={{ listStyle: 'none'}}>
                                <li>
                                    <img src="./images/check.png" alt="check" />
                                    <p>Paga mais de 35% de sua renda líquida de empréstimos, financiamentos e outras dívidas;</p>
                                </li>
                                <li>
                                    <img src="./images/check.png" alt="check" />
                                    <p>Possui gastos com moradia, alimentação, saúde, remédios, educação, transporte, água, luz, telefone, internet, vestuário, etc...</p>
                                </li>
                                <li>
                                    <img src="./images/check.png" alt="check" />
                                    <p>Não está tendo paz com suas finanças</p>
                                </li>
                            </ul>
                        </Publico>
                        <div className={ styles['vs-div']}>
                            <img src="./images/no.png" alt="vs" className={ styles['vs-img']} />
                        </div>
                        <Publico ok={false} title="Para quem não serve:">
                            <ul className={ styles.list } style={{ listStyle: 'none'}}>
                                <li>
                                    <img src="./images/x.png" alt="check" />
                                    <p>Quem fez empréstimos de má fé para se beneficiar da lei.</p>
                                </li>
                                <li>
                                    <img src="./images/x.png" alt="check" />
                                    <p>Pessoas jurídicas, exclusos avalistas.</p>
                                </li>
                            </ul>
                        </Publico>
                    </div>
                </Section>
                <Section>
                    <Calculadora />
                </Section>
                <Section>
                    <div className={ styles.text }>
                        <Subtitle>O endividamento, em virtude das práticas ilegais e abusivas das instituições financeiras, não é novidade no Brasil. No caso dos servidores públicos, esse problema torna-se ainda mais evidente pois muitas vezes a causa é oculta, silenciosa, através de manobras de novação de dívidas para esconder os juros, taxas, seguros, etc... contidos nos contratos anteriores. </Subtitle>
                        <Subtitle>
                        As instituições financeiras e grandes varejistas aproveitam-se da estabilidade natural do servidor público para aplicar juros altíssimos, tornando impossível o equilíbrio financeiro.
                        </Subtitle>
                        <Subtitle>
                        A boa notícia é que a lei de repactuação de dívidas veio para acabar com o problema do endividamento dos servidores públicos. 
                        </Subtitle>
                        <Subtitle>
                            <span className="strong">Com base na lei estamos empenhados em te ajudar!</span>
                        </Subtitle>
                        <Subtitle>
                        O judiciário vem socorrendo os devedores das instituições em inúmeras decisões, coibindo a prática sórdida de obtenção de lucros pelos bancos.
                        </Subtitle>
                    </div>
                    <Button link={true} path='#calculadora'>FAÇA A SUA PARTE! DÊ UM PEQUENO PASSO!</Button>
                </Section>
                <Section >
                    <img src="./images/img.png" alt="Imagem icônica de direito" className={ styles.lastImg }/>
                    <div>
                        <div style={{ marginTop: '24px', marginBottom: '32px'}}>
                            <Text tag="h2" left={true}>O escritório KRUGER TOLEDO te ajuda nessa caminhada, é fácil!</Text>
                            <Subtitle left={true}>Nosso alvo são as instituições financeiras.</Subtitle>
                        </div>
                        <div style={{ marginBottom: '24px'}}>
                            <Text tag="h2" left={true}>Sobre o KRUGER TOLEDO</Text>
                            <Subtitle left={true}>Nosso escritório é a junção de experiência e inovação!</Subtitle>
                        </div>
                        
                        <Subtitle left={true}>Esther Krüger Toledo, sócia-líder do escritório é formada pela PUC/RS, trabalhou em empresas multinacionais e em uma das três maiores empresas de auditoria e contabilidade do mundo. Traz ao escritório a atualização e tecnologia necessária para os negócios nos dias atuais.</Subtitle>
                        <Subtitle left={true}>O escritório conta com uma equipe formada por:</Subtitle>
                        <ul style={{ marginLeft: '24px', marginTop: '24px', marginBottom: '24px'}}>
                            <li style={{ color: 'var(--secondary-color)'}}>Advogados auxiliares;</li>
                            <li style={{ color: 'var(--secondary-color)'}}>Contadores experientes;</li>
                            <li style={{ color: 'var(--secondary-color)'}}>Técnicos contadores auxiliares;</li>
                            <li style={{ color: 'var(--secondary-color)'}}>Atendimento psicológico para tratamento do sentimento de culpa do endividado;</li>
                            <li style={{ color: 'var(--secondary-color)'}}>Processualista com mais de 30 anos de experiência;</li>
                            <li style={{ color: 'var(--secondary-color)'}}>Equipe de apoio dedicada e pró ativa;</li>
                        </ul>
                        <Subtitle left={true}>BRASÍLIA/DF – SÃO PAULO/SP – PORTO ALEGRE/RS</Subtitle>
                        <Button link={true} path='#calculadora'>Conte com nossa ajuda!</Button>
                    </div>
                </Section>
                <Section bg={true} top={true}>
                    <Text tag="h2" bg={true} bottom={true}>Onde estamos?</Text>
                    <img src="./images/map.png" alt="Localização do escritório Kruger Toledo"/>
                    <span style={{ marginTop: '24px'}}><Subtitle left={true}>Endereço: </Subtitle></span>
                    <Button link={true} bg={true} path='#calculadora'>Quero recuperar o equilíbrio financeiro!</Button>
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
            <Modal link={true} modalState={modalState} />
        </Template>
    )
}