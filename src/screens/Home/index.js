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
        title: '1. O que é superendividamento? Quando o servidor público está superendividado?', text: 'O superendividamento refere-se às situações em que o devedor (pessoa natural = CPF) se vê impossibilitado, de forma duradoura ou estrutural, de pagar o conjunto de suas dívidas.'}, 
        {title: '2. Que espécie de dívidas podem levar ao superendividamento?', text: 'São as dívidas de consumo também designadas de crédito aos consumidores, compreendendo todo empréstimo a pessoa física (CPF) que não se destine a uma atividade econômica ou profissional. Inclui o crédito destinado à aquisição de bens e serviços.'}, 
        { title: '3. As dívidas devem estar vencidas?', text: 'As dívidas podem estar vencidas ou não. A noção de superendividamento deve ser interpretada de maneira extensiva.'}, 
        {title: '4. O superendividamento leva em consideração a minha renda? Está relacionado a pobreza?', text: 'Não. O superendividamento está presente, com maior ou menor intensidade, em todos os países e classes sociais (baixa, média ou alta), apesar das diferenças econômicas, sociais e culturais que os separam. No entanto, os consumidores desfavorecidos, que vivem próximos do limiar da pobreza e com baixo grau de instrução, têm aumentado o risco de superendividamento. Neste caso, mesmo que se trate de pessoa que se esforça para cumprir seus compromissos, pequena alteração no seu rendimento pode impossibilitar o pagamento das dívidas assumidas.'}, 
        {title: '5. O superendividamento é culpa do consumidor?', text: 'Não, o Código de Defesa do Consumidor atualizado previu deveres também ao fornecedor, tais como não assediar o consumidor a contratar o crédito, analisar a capacidade financeira do consumidor, informar de maneira clara e detalhada sobre o crédito.'},
        {title: '6. O tratamento do superendividamento só se aplica aos contratos novos?', text: 'Não, é uma lei de ordem pública aplicada aos contratos em curso.'},
        {title: '7. Posso dizer que o tratamento do superendividamento é perdão de dívidas?', text: 'Não, a lei instalou a cultura do pagamento e criou a possibilidade de readequação das obrigações para preservar o mínimo existencial.'}
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
                    <Button link={true} path='#formulario'>FAÇA A SUA PARTE! DÊ UM PEQUENO PASSO!</Button>
                </Section>
                <Section >
                    <img src="./images/img.png" alt="Imagem icônica de direito" className={ styles.lastImg }/>
                    <div>
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
                    <Text tag="h2" bg={true} bottom={true}>Onde estamos?</Text>
                    <img src="./images/map.png" alt="Localização do escritório Kruger Toledo" className={ styles.map }/>
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
                </div>
            </main>
        </Template>
    )
}