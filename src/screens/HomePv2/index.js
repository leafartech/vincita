import Header from "@/components/pv/Header";
import Section from "@/components/pv/Section";
import Subtitle from "@/components/pv/Subtitle";
import Template from "@/components/pv/Template";
import styles from './Home.module.css'
import Button from "@/components/pv/Button";
import Text from "@/components/pv/Text";
import List from "@/components/pv/List";
import Publico from "@/components/pv/Publico";
import Alert from "@/components/pv/Alert";
import Dropdown from "@/components/pv/Dropdown";
import Calculadora from "@/components/pv/Calculadora";
import { useEffect, useRef } from "react";
import Footer from "@/components/Footer";

export default function HomeScreen() {
    const faq = [{
        title: '1. O que é superendividamento? Quando o servidor público está superendividado?', text: 'O superendividamento ocorre quando uma pessoa acumula dívidas que ultrapassam sua capacidade de pagamento, comprometendo sua estabilidade financeira.'}, 
        {title: '2. Como identificar se estou superendividado?', text: 'Alguns sinais de superendividamento incluem dificuldade em pagar as contas mensais, dependência de crédito para suprir as necessidades básicas, atrasos constantes no pagamento das dívidas e falta de recursos para arcar com despesas essenciais.'}, 
        { title: '3. Quais tipos de dívidas podem levar ao superendividamento?', text: 'O superendividamento pode ser causado por diversos tipos de dívidas, como empréstimos pessoais, financiamentos, cartões de crédito, contas médicas, despesas com educação e outras obrigações financeiras.'}, 
        {title: '4. As dívidas precisam estar vencidas para caracterizar o superendividamento?', text: 'Não necessariamente. O superendividamento envolve a incapacidade de pagar as dívidas dentro dos prazos e condições estabelecidos, independentemente de estarem vencidas ou não.'}, 
        {title: '5. O superendividamento leva em consideração a minha renda? Está relacionado a pobreza?', text: 'Não. O superendividamento pode afetar pessoas de diferentes níveis de renda. Embora seja mais comum em famílias com menor capacidade financeira, o superendividamento pode ocorrer independentemente do nível de renda.'},
        {title: '6. O tratamento do superendividamento só se aplica a contratos novos?', text: 'Não, o tratamento do superendividamento pode abranger tanto contratos novos como antigos. O objetivo é buscar alternativas para aliviar o peso das dívidas e reequilibrar a situação financeira.'},
        {title: '7. O tratamento do superendividamento é um perdão de dívidas?', text: 'O tratamento do superendividamento não implica necessariamente no perdão total das dívidas. Visa, principalmente, buscar soluções que permitam ao devedor quitar suas obrigações de forma adequada, considerando sua capacidade financeira.'}
    ]

    let cont = 0
    useEffect(() => {
        if (cont === 0) {
          const script = document.createElement('script');
          script.src = 'https://lauromts.activehosted.com/f/embed.php?id=1';
          script.type = 'text/javascript';
          script.charset = 'utf-8';
          script.async = true;
    
          document.body.appendChild(script);
          cont++;
        }
    }, []); 

    return (
        <Template>
            <div className={ styles.logoDiv }>
                <img className={ styles.logo } src="./imagesPv/logo.png" alt="Escritório de advocacia Krüger Toledo" />
            </div>
            <Header text="Descubra o Segredo dos Servidores Públicos: Redução de Dívidas em até 70% com a Lei de Repactuação!">
                <Subtitle>
                Esgotou sua margem consignada? Não se preocupe. Nós podemos te ajudar. Assista ao nosso vídeo exclusivo e descubra como outros servidores públicos estão pagando suas dívidas por um valor mais baixo.
                </Subtitle>
                {/* <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center'}}>
                    <Alert title="SERVIDOR PÚBLICO">30% dos servidores públicos do Distrito Federal estão superendividados</Alert>
                </div> */}
                <div className={ styles.video }>
                    <Text>Veja mais sobre a repactuação de dívidas</Text>
                    <iframe className={ styles['video-pv'] } style={{ marginTop: '18px' }} 
                        src="https://www.youtube.com/embed/_3ywoGuo68c?rel=0&modestbranding=1&showinfo=0" 
                        title="Repactuação de Dívidas" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>

                </div>
                <Button link={true} path="#formulario">
                    Quero saber mais sobre a repactuação de dívidas
                </Button>
            </Header>
            <main className={ styles.main }>
                <Section>
                    <img src="./imagesPv/localization.png" alt="imagem decorativa" className={ styles['float-left'] } />
                    <Text bottom={true} tag="h2">Observe na linha do tempo como funciona:</Text>
                    <List />
                    <Button link={true} path="#formulario">Quero saber mais sobre a repactuação de dívidas</Button>
                    <img src="./imagesPv/localization.png" alt="imagem decorativa" className={ styles['float-right'] } />
                </Section>
                <Section top={true}>
                    <Text small={true} bottom={true} bg={true} tag="h2">Entenda se os benefícios da lei de repactuação são para você:</Text>
                    <div className={ styles.publico }>
                        <Publico ok={true} title="Para quem serve:">
                            <ul className={ styles.list } style={{ listStyle: 'none'}}>
                                <li>
                                    <img src="./imagesPv/check.png" alt="check" />
                                    <p style={{ textAlign: 'justify'}}>Paga mais de 35% de sua renda líquida de empréstimos, financiamentos e outras dívidas;</p>
                                </li>
                                <li>
                                    <img src="./imagesPv/check.png" alt="check" />
                                    <p style={{ textAlign: 'justify'}}>Possui gastos com moradia, alimentação, saúde, remédios, educação, transporte, água, luz, telefone, internet, vestuário, etc...</p>
                                </li>
                                <li>
                                    <img src="./imagesPv/check.png" alt="check" />
                                    <p style={{ textAlign: 'justify'}}>Não está tendo paz com suas finanças.</p>
                                </li>
                            </ul>
                        </Publico>
                        <div className={ styles['vs-div']}>
                            <img src="./imagesPv/no.png" alt="vs" className={ styles['vs-img']} />
                        </div>
                        <Publico ok={false} title="Para quem não serve:">
                            <ul className={ styles.list } style={{ listStyle: 'none'}}>
                                <li>
                                    <img src="./imagesPv/x.png" alt="check" />
                                    <p style={{ textAlign: 'justify'}}>Quem fez empréstimos de má fé para se beneficiar da lei.</p>
                                </li>
                                <li>
                                    <img src="./imagesPv/x.png" alt="check" />
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
                        <Subtitle justify={true}>O superendividamento é uma preocupação antiga do Brasil. No caso dos servidores públicos, esse problema torna-se ainda mais evidente, pois muitas vezes é oculto e invasivo, comprometendo suas finanças pessoais.</Subtitle>
                        <Subtitle justify={true}>
                        As instituições financeiras e grandes varejistas aproveitam-se da estabilidade natural do servidor público para aplicar juros altíssimos, tornando impossível o equilíbrio financeiro.
                        </Subtitle>
                        <Subtitle justify={true}>
                        Essas práticas abusivas prejudicam a qualidade de vida dos servidores, afetando sua saúde financeira e emocional.
                        </Subtitle>
                        <Subtitle justify={true}>
                            <span className="strong">A boa notícia é que a lei de repactuacao de dívidas veio para ajudar a situação do superendividamento dos servidores públicos.</span>
                        </Subtitle>
                    </div>
                    <Button link={true} path='#formulario'>Quero falar com a equipe</Button>
                </Section>
                <Section >
                    <img src="./imagesPv/1.png" alt="Imagem icônica de direito" className={ styles.lastImg }/>
                    <div className={ styles.about }>
                        <div style={{ marginBottom: '24px'}} className={ styles.centralized }>
                            <Text tag="h2">O escritório Krüger Toledo</Text>
                        </div>
                        <div className={ styles.text }>
                            <Subtitle justify={true}>
                                O escritório Krüger Toledo Advocacia, atua ajudando servidores públicos a superar o superendividamento. Com nossa ampla experiência no atendimento a inúmeros clientes e no gerenciamento de recursos significativos, estamos prontos para desenvolver estratégias jurídicas altamente eficazes para ajudar a reequilibrar suas finanças pessoais de maneira efetiva.
                            </Subtitle>
                        </div>
                        <Subtitle justify={true} left={true}>O escritório conta com uma equipe formada por:</Subtitle>
                        <ul style={{ marginLeft: '24px', marginTop: '24px', marginBottom: '24px'}}>
                            <li style={{ color: 'var(--pv-secondary-color)', maxWidth: '400px'}}>Advogados auxiliares;</li>
                            <li style={{ color: 'var(--pv-secondary-color)', maxWidth: '400px'}}>Contadores experientes;</li>
                            <li style={{ color: 'var(--pv-secondary-color)', maxWidth: '400px'}}>Técnicos contadores auxiliares;</li>
                            <li style={{ color: 'var(--pv-secondary-color)', maxWidth: '400px'}}>Equipe de apoio dedicada e proativa;</li>
                        </ul>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button link={true} path='#formulario'>Quero falar com a equipe</Button>
                        </div>
                    </div>
                </Section>
                <Section top={true}>
                    <Text tag="h2" bg={true}>Onde estamos?</Text>
                    <Subtitle >Faça sua opção por atendimento presencial ou on-line</Subtitle>
                    <img src="./imagesPv/map.png" alt="Localização do escritório Krüger Toledo" className={ styles.map } style={{ marginTop: '24px'}}/>
                    <span style={{ marginTop: '24px'}}><Subtitle left={true} size={true}>Alvorada - Brasília: SHTN, Asa Norte Trecho 1 Golden Tulip, CEP 70.800-200</Subtitle></span>
                    {/* <img src="./imagesPv/map2.png" alt="Localização do escritório Krüger Toledo" className={ styles.map } style={{ marginTop: '24px'}}/> */}
                    {/* <span style={{ marginTop: '24px'}}><Subtitle left={true} size={true}>São Paulo/SP: Avenida Paulista, 1471, conjunto 511, Bela Vista, CEP 01.311-927</Subtitle></span> */}
                    <Button link={true} path='#formulario'>Quero falar com a equipe</Button>
                </Section>
                <Section sm={true}>
                    <Text tag="h2" bottom={true}>Dúvidas Frequentes</Text>
                    <Dropdown
                        liDrowdown={faq}
                    />
                </Section>
                <div className={ styles.formulario } id="formulario">
                    <div className={ `${"_form_1"}  ${ styles.border}` }></div>
                </div>
            </main>
            <Footer />
        </Template>
    )
}