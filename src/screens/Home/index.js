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
import Calculadora from "@/components/Calculadora";

export default function HomeScreen() {
    const faq = [{
        title: '1. O que é superendividamento? Quando o servidor público está superendividado?', text: 'O superendividamento ocorre quando uma pessoa acumula dívidas que ultrapassam sua capacidade de pagamento, comprometendo sua estabilidade financeira'}, 
        {title: '2. Como identificar se estou superendividado?', text: 'Alguns sinais de superendividamento incluem dificuldade em pagar as contas mensais, dependência de crédito para suprir as necessidades básicas, atrasos constantes no pagamento das dívidas e falta de recursos para arcar com despesas essenciais.'}, 
        { title: '3. Quais tipos de dívidas podem levar ao superendividamento?', text: 'O superendividamento pode ser causado por diversos tipos de dívidas, como empréstimos pessoais, financiamentos, cartões de crédito, contas médicas, despesas com educação e outras obrigações financeiras.'}, 
        {title: '4. As dívidas precisam estar vencidas para caracterizar o superendividamento?', text: 'Não necessariamente. O superendividamento envolve a incapacidade de pagar as dívidas dentro dos prazos e condições estabelecidos, independentemente de estarem vencidas ou não.'}, 
        {title: '5. O superendividamento leva em consideração a minha renda? Está relacionado a pobreza?', text: 'Não. O superendividamento pode afetar pessoas de diferentes níveis de renda. Embora seja mais comum em famílias com menor capacidade financeira, o superendividamento pode ocorrer independentemente do nível de renda.'},
        {title: '6. O tratamento do superendividamento só se aplica a contratos novos?', text: 'Não, o tratamento do superendividamento pode abranger tanto contratos novos como antigos. O objetivo é buscar alternativas para aliviar o peso das dívidas e reequilibrar a situação financeira.'},
        {title: '7. O tratamento do superendividamento é um perdão de dívidas?', text: 'O tratamento do superendividamento não implica necessariamente no perdão total das dívidas. Visa, principalmente, buscar soluções que permitam ao devedor quitar suas obrigações de forma adequada, considerando sua capacidade financeira.'}
    ]

    return (
        <Template>
            <div className={ styles.logoDiv }>
                <img className={ styles.logo } src="./images/logo.png" alt="Escritório de advocacia Kruger Toledo" />
            </div>
            <Header text="Diminua sua dívida e Recupere sua Estabilidade Financeira">
                <Subtitle>
                Servidor público, a lei de repactuação de dívidas foi regulamentada no DF!!
                </Subtitle>
                <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center'}}>
                    <Alert title="SERVIDOR PÚBLICO">30% dos servidores públicos do Distrito Federal estão superendividados</Alert>
                </div>
                <div className={ styles.video }>
                    <Text>O escritório Krüger Toledo irá te ajudar com essa nova oportunidade, veja:</Text>
                    <img style={{ marginTop: '18px' }} src="./images/videoMock.png" alt="Vídeo do header" />
                </div>
                <Button link={true} path="#formulario">
                    Recupere a sua estabilidade financeira agora!
                </Button>
            </Header>
            <main className={ styles.main }>
                <Section>
                    <img src="./images/localization.png" alt="imagem decorativa" className={ styles['float-left'] } />
                    <Text bottom={true} tag="h2" left={true}>Observe na linha do tempo como funciona:</Text>
                    <List />
                    <Button link={true} path="#formulario">Recupere a sua estabilidade financeira agora!</Button>
                    <img src="./images/localization.png" alt="imagem decorativa" className={ styles['float-right'] } />
                </Section>
                <Section bg={true} top={true}>
                    <Text small={true} bottom={true} bg={true} tag="h2">Entenda se os benefícios da lei de repactuação são para você:</Text>
                    <div className={ styles.publico }>
                        <Publico ok={true} title="Para quem serve:">
                            <ul className={ styles.list } style={{ listStyle: 'none'}}>
                                <li>
                                    <img src="./images/check.png" alt="check" />
                                    <p style={{ textAlign: 'justify'}}>Paga mais de 35% de sua renda líquida de empréstimos, financiamentos e outras dívidas;</p>
                                </li>
                                <li>
                                    <img src="./images/check.png" alt="check" />
                                    <p style={{ textAlign: 'justify'}}>Possui gastos com moradia, alimentação, saúde, remédios, educação, transporte, água, luz, telefone, internet, vestuário, etc...</p>
                                </li>
                                <li>
                                    <img src="./images/check.png" alt="check" />
                                    <p style={{ textAlign: 'justify'}}>Não está tendo paz com suas finanças</p>
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
                                    <p style={{ textAlign: 'justify'}}>Quem fez empréstimos de má fé para se beneficiar da lei.</p>
                                </li>
                                <li>
                                    <img src="./images/x.png" alt="check" />
                                    <p style={{ textAlign: 'justify'}}>Pessoas jurídicas, exclusos avalistas.</p>
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
                        <Subtitle justify={true}>O endividamento, em virtude das práticas ilegais e abusivas das instituições financeiras, não é novidade no Brasil. No caso dos servidores públicos, esse problema torna-se ainda mais evidente pois muitas vezes a causa é oculta, silenciosa, através de manobras de novação de dívidas para esconder os juros, taxas, seguros, etc... contidos nos contratos anteriores. </Subtitle>
                        <Subtitle justify={true}>
                        As instituições financeiras e grandes varejistas aproveitam-se da estabilidade natural do servidor público para aplicar juros altíssimos, tornando impossível o equilíbrio financeiro.
                        </Subtitle>
                        <Subtitle justify={true}>
                        A boa notícia é que a lei de repactuação de dívidas veio para acabar com o problema do endividamento dos servidores públicos. 
                        </Subtitle>
                        <Subtitle justify={true}>
                            <span className="strong">Com base na lei estamos empenhados em te ajudar!</span>
                        </Subtitle>
                        <Subtitle justify={true}>
                        O judiciário vem socorrendo os devedores das instituições em inúmeras decisões, coibindo a prática sórdida de obtenção de lucros pelos bancos.
                        </Subtitle>
                    </div>
                    <Button link={true} path='#formulario'>FAÇA A SUA PARTE! DÊ UM PEQUENO PASSO!</Button>
                </Section>
                <Section >
                    <img src="./images/img.png" alt="Imagem icônica de direito" className={ styles.lastImg }/>
                    <div className={ styles.about }>
                        <div style={{ marginTop: '24px', marginBottom: '32px'}}>
                            <Text tag="h2" left={true}>O escritório KRUGER TOLEDO te ajuda nessa caminhada, é fácil!</Text>
                            <Subtitle left={true}>Nosso alvo são as instituições financeiras.</Subtitle>
                        </div>
                        <div style={{ marginBottom: '24px'}}>
                            <Text tag="h2" left={true}>Sobre o KRUGER TOLEDO: </Text>
                            <Subtitle justify={true} left={true}>Nosso escritório é a junção de experiência e inovação!</Subtitle>
                        </div>
                        
                        <Subtitle justify={true} left={true}>Esther Krüger Toledo, sócia-líder do escritório é formada pela PUC/RS, trabalhou em empresas multinacionais e em uma das três maiores empresas de auditoria e contabilidade do mundo. Traz ao escritório a atualização e tecnologia necessária para os negócios nos dias atuais.</Subtitle>
                        <Subtitle justify={true} left={true}>O escritório conta com uma equipe formada por:</Subtitle>
                        <ul style={{ marginLeft: '24px', marginTop: '24px', marginBottom: '24px'}}>
                            <li style={{ color: 'var(--secondary-color)'}}>Advogados auxiliares;</li>
                            <li style={{ color: 'var(--secondary-color)'}}>Contadores experientes;</li>
                            <li style={{ color: 'var(--secondary-color)'}}>Técnicos contadores auxiliares;</li>
                            <li style={{ color: 'var(--secondary-color)'}}>Atendimento psicológico para tratamento do sentimento de culpa do endividado;</li>
                            <li style={{ color: 'var(--secondary-color)'}}>Processualista com mais de 30 anos de experiência;</li>
                            <li style={{ color: 'var(--secondary-color)'}}>Equipe de apoio dedicada e pró ativa;</li>
                        </ul>
                        <Subtitle justify={true} left={true}>BRASÍLIA/DF – SÃO PAULO/SP – PORTO ALEGRE/RS</Subtitle>
                        <Button link={true} path='#formulario'>Conte com nossa ajuda!</Button>
                    </div>
                </Section>
                <Section bg={true} top={true}>
                    <Text tag="h2" bg={true}>Onde estamos?</Text>
                    <Subtitle >Faça sua opção por atendimento presencial ou on-line</Subtitle>
                    <img src="./images/map.png" alt="Localização do escritório Kruger Toledo" className={ styles.map } style={{ marginTop: '24px'}}/>
                    <span style={{ marginTop: '24px'}}><Subtitle left={true}>Brasília/DF: SHTN, 1, 3105, Asa Norte, CEP 70.800-200</Subtitle></span>
                    <Button link={true} bg={true} path='#formulario'>Quero recuperar o equilíbrio financeiro!</Button>
                </Section>
                <Section>
                    <Text tag="h2" bottom={true}>Dúvidas Frequentes</Text>
                    <Dropdown
                        liDrowdown={faq}
                    />
                </Section>
                <div id="formulario">
                    <Text>[ FORMULÁRIO ]</Text>
                    <div role="main" id="01-lrd-689e502f9374a4e15a9c"></div>
                    {/* <script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></script><script type="text/javascript"> new RDStationForms('01-lrd-689e502f9374a4e15a9c', 'null').createForm();</script> */}
                </div>
            </main>
        </Template>
    )
}