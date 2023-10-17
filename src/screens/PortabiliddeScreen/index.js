import Header from "@/components/pv/Header";
import Section from "@/components/pv/Section";
import Subtitle from "@/components/pv/Subtitle";
import Text from "@/components/pv/Text";
import Template from "@/components/pv/Template";
import Button from "@/components/pv/Button";
import styles from './PortabildiadeScreen.module.css'
import List from "@/components/pv/List";
import Dropdown from "@/components/pv/Dropdown";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function PortabilidadeScreen() {
    const faq = [{
        title: '1. O que é superendividamento? Quando o servidor público está superendividado?', text: 'O superendividamento ocorre quando uma pessoa acumula dívidas que ultrapassam sua capacidade de pagamento, comprometendo sua estabilidade financeira.'
    },
    { title: '2. Como identificar se estou superendividado?', text: 'Alguns sinais de superendividamento incluem dificuldade em pagar as contas mensais, dependência de crédito para suprir as necessidades básicas, atrasos constantes no pagamento das dívidas e falta de recursos para arcar com despesas essenciais.' },
    { title: '3. Quais tipos de dívidas podem levar ao superendividamento?', text: 'O superendividamento pode ser causado por diversos tipos de dívidas, como empréstimos pessoais, financiamentos, cartões de crédito, contas médicas, despesas com educação e outras obrigações financeiras.' },
    { title: '4. As dívidas precisam estar vencidas para caracterizar o superendividamento?', text: 'Não necessariamente. O superendividamento envolve a incapacidade de pagar as dívidas dentro dos prazos e condições estabelecidos, independentemente de estarem vencidas ou não.' },
    { title: '5. O superendividamento leva em consideração a minha renda? Está relacionado a pobreza?', text: 'Não. O superendividamento pode afetar pessoas de diferentes níveis de renda. Embora seja mais comum em famílias com menor capacidade financeira, o superendividamento pode ocorrer independentemente do nível de renda.' },
    { title: '6. O tratamento do superendividamento só se aplica a contratos novos?', text: 'Não, o tratamento do superendividamento pode abranger tanto contratos novos como antigos. O objetivo é buscar alternativas para aliviar o peso das dívidas e reequilibrar a situação financeira.' },
    { title: '7. O tratamento do superendividamento é um perdão de dívidas?', text: 'O tratamento do superendividamento não implica necessariamente no perdão total das dívidas. Visa, principalmente, buscar soluções que permitam ao devedor quitar suas obrigações de forma adequada, considerando sua capacidade financeira.' }
    ]

    let cont = 0
    useEffect(() => {
        if (cont === 0) {
          const script = document.createElement('script');
          script.src = 'https://lauromts.activehosted.com/f/embed.php?id=21';
          script.type = 'text/javascript';
          script.charset = 'utf-8';
          script.async = true;
    
          document.body.appendChild(script);
          cont++;
        }
    }, []); 

    return (
        <Template>
            <div className={styles.logoDiv}>
                <img className={styles.logo} src="./imagesPv/logo.png" alt="Escritório de advocacia Krüger Toledo" />
            </div>
            <Header text="Vítima do golpe da falsa portabilidade? Entenda como pode solucionar o seu caso!">
                <Subtitle>
                Esse golpe tem crescido absurdamente por meio de ligações com falsas promessas de <strong>reduzir a parcela de seus empréstimos consignados</strong>. Se você foi vítima desta fraude, saiba que seu caso tem solução! <strong>Pare de pagar uma conta que não é sua</strong>!
                </Subtitle>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="./imagesPv/bg.png" alt="" className={styles.img} />
                </div>
                <div className={styles.top_button}>
                    <Button link={true} path="#formulario">
                        Quero solucionar meu caso
                    </Button>
                </div>
                <Section>
                    <Text bottom={true} bg={true} tag="h2">Saiba se você foi vítima do Golpe de Portabilidade Falsa </Text>
                    <div className={styles.check_div}>
                        <Subtitle>Um dia, alguém entra em contato com você oferecendo a seguinte oferta: transferir as dívidas para outro banco, com o objetivo de reduzir os juros e consequentemente o valor das parcelas mensais.</Subtitle>
                        <Subtitle>Eles afirmam que tudo o que você precisa fazer para garantir essa redução é fornecer alguns dados e aceitar a portabilidade para o novo banco dos seus empréstimos.</Subtitle>
                        <Subtitle>Então, você, interessado na proposta, fornece os dados e aceita a portabilidade.</Subtitle>
                        <Subtitle>Nos casos mais graves os golpista ainda solicitam que seja feita uma transferência para uma conta deles com o valor do "troco recebido", que vai direto para o bolso deles...</Subtitle>
                        <Subtitle>Depois de um tempo, no entanto, você percebe que os seus empréstimos não foram quitados e que agora você possui uma nova dívida.</Subtitle>
                        <Subtitle>Se você passou por isso, você é uma vítima do golpe!</Subtitle>
                    </div>
                    <Button link={true} path="#formulario">
                        Quero solucionar meu caso
                    </Button>
                </Section>
            </Header>
            <main className={styles.main}>
                <Section>
                    <div className={styles.what}>
                        <Text bottom={true} bg={true} tag="h2">Observe na linha do tempo como funciona</Text>
                        <List porta={true} />
                    </div>
                </Section>
                <Section>
                    <Text bottom={true} bg={true} tag="h2">Como esse Golpe acontece?</Text>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '24px', marginTop: '12px' }}>
                        <Subtitle
                            left={true}
                        >A portabilidade de empréstimo consignado é a transferência de um contrato de crédito de uma instituição financeira para outra, mediante solicitação do cliente.</Subtitle>
                        <Subtitle
                            left={true}
                        >Com isso, você consegue negociar com a nova instituição financeira taxas de juros mais vantajosas no seu empréstimo consignado.</Subtitle>
                        <Subtitle
                            left={true}
                        >Essa operação é super comum e válida.</Subtitle>
                        <Subtitle
                            left={true}
                        >Porém, algumas vezes, a operação não era a que você esperava. Você queria reduzir sua dívida, mas acabou com mais uma. Imagine a seguinte situação: Você possui uma dívida de empréstimo consignado com o “Banco SuperBomDemais”.</Subtitle>
                        <Subtitle
                            left={true}
                        >Depois de algum tempo, recebe uma excelente proposta do “Banco +DinheiroJá”, para reduzir os juros e o valor das suas parcelas mensais.</Subtitle>
                        <Subtitle
                            left={true}
                        >Ao concordar com o “Banco +DinheiroJá”, você deseja realizar a portabilidade do seu empréstimo consignado para garantir essa redução.</Subtitle>
                        <Subtitle
                            left={true}
                        >Então um novo empréstimo é realizado com intuito de quitar o anterior.</Subtitle>
                        <Subtitle
                            left={true}
                        >Porém, não é feita a quitação do empréstimo anterior, e você fica com as dívidas tanto no “Banco SuperBomDemais” quanto no “Banco +DinheiroJá.</Subtitle>
                        <Subtitle
                            left={true}
                        >É exatamente isso que acontece no golpe da portabilidade de empréstimo consignado.</Subtitle>
                    </div>
                    <Button link={true} path="#formulario">
                        Quero solucionar meu caso
                    </Button>
                </Section>
                <Section >
                    <img src="./imagesPv/1.png" alt="Imagem icônica de direito" className={styles.lastImg} />
                    <div className={styles.about}>
                        <div style={{ marginBottom: '24px' }} className={styles.centralized}>
                            <Text tag="h2">O escritório Krüger Toledo</Text>
                        </div>
                        <div className={styles.text}>
                            <Subtitle justify={true}>
                                O escritório Krüger Toledo Advocacia, atua ajudando servidores públicos a superar o superendividamento. Com nossa ampla experiência no atendimento a inúmeros clientes e no gerenciamento de recursos significativos, estamos prontos para desenvolver estratégias jurídicas altamente eficazes para ajudar a reequilibrar suas finanças pessoais de maneira efetiva.
                            </Subtitle>
                        </div>
                        <Subtitle justify={true} left={true}>O escritório conta com uma equipe formada por:</Subtitle>
                        <ul style={{ marginLeft: '24px', marginTop: '24px', marginBottom: '24px' }}>
                            <li style={{ color: 'var(--pv-secondary-color)', maxWidth: '400px' }}>Advogados auxiliares;</li>
                            <li style={{ color: 'var(--pv-secondary-color)', maxWidth: '400px' }}>Contadores experientes;</li>
                            <li style={{ color: 'var(--pv-secondary-color)', maxWidth: '400px' }}>Técnicos contadores auxiliares;</li>
                            <li style={{ color: 'var(--pv-secondary-color)', maxWidth: '400px' }}>Equipe de apoio dedicada e proativa;</li>
                        </ul>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button link={true} path='#formulario'>Quero solucionar meu caso</Button>
                        </div>
                    </div>
                </Section>
                <Section top={true}>
                    <Text tag="h2" bg={true}>Onde estamos?</Text>
                    <Subtitle >Faça sua opção por atendimento presencial ou on-line</Subtitle>
                    <img src="./imagesPv/map.png" alt="Localização do escritório Krüger Toledo" className={styles.map} style={{ marginTop: '24px' }} />
                    <span style={{ marginTop: '24px' }}><Subtitle left={true} size={true}>Alvorada - Brasília: SHTN, Asa Norte Trecho 1 Golden Tulip, CEP 70.800-200</Subtitle></span>
                    {/* <img src="./imagesPv/map2.png" alt="Localização do escritório Krüger Toledo" className={ styles.map } style={{ marginTop: '24px'}}/> */}
                    {/* <span style={{ marginTop: '24px'}}><Subtitle left={true} size={true}>São Paulo/SP: Avenida Paulista, 1471, conjunto 511, Bela Vista, CEP 01.311-927</Subtitle></span> */}
                    <Button link={true} path='#formulario'>Quero solucionar meu caso</Button>
                </Section>
                // <Section sm={true}>
                //     <Text tag="h2" bottom={true}>Dúvidas Frequentes</Text>
                //     <Dropdown
                //         liDrowdown={faq}
                //     />
                // </Section>
                <div className={styles.formulario} id="formulario">
                    <div className={`${"_form_21"}  ${styles.border}`}></div>
                </div>
            </main>
            <Footer />
        </Template>
    )
}
