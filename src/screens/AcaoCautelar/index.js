import Square from "@/components/Square";
import Button from "@/components/pv/Button";
import Header from "@/components/pv/Header";
import Section from "@/components/pv/Section";
import Subtitle from "@/components/pv/Subtitle";
import Template from "@/components/pv/Template";
import Text from "@/components/pv/Text";
import styles from './Home.module.css'
import Dropdown from "@/components/pv/Dropdown";
import TestmonialsSwiper from "@/components/pv/MySwiper";

export default function AcaoCautelarScreen() {
    const faq = [
        { title: '1. O que é ação cautelar?', text: 'Uma Ação Cautelar para Cessação de Descontos e Devolução de Valores Indevidamente Descontados é uma medida judicial preventiva adotada quando uma pessoa ou empresa está sofrendo descontos indevidos em sua conta bancária, salário ou outros meios de pagamento. Essa ação é uma forma de evitar danos imediatos e preservar os direitos do requerente enquanto o mérito da questão é discutido em um processo principal.' },
        { title: '2. Como identificar se tenho direito à ação cautelar?', text: 'Se sentir injustiçado pelos descontos mensais do banco, entre em contato e tire suas dúvidas.' },]

    return (
        <Template>
            <div className={styles.logoDiv}>
                <img className={styles.logo} src="./imagesPv/logo.png" alt="Escritório de advocacia Krüger Toledo" />
            </div>
            <Header text="Recupere os valores indevidamentes cobrados do seu salário">
                <Subtitle>
                    <span style={{fontWeight: 500}}>Através da ação cautelar, o banco pode parar de “comer” o seu salário!</span>
                </Subtitle>
                <div className={styles.video}>
                    <iframe className={styles['video-pv']} style={{ marginTop: '18px' }}
                        src="https://www.youtube.com/embed/_3ywoGuo68c?rel=0&modestbranding=1&showinfo=0"
                        title="Repactuação de Dívidas"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullscreen>
                    </iframe>
                </div>
                <Button link={true} path="#formulario">
                    Quero saber mais sobre como recuperar o meu salário!
                </Button>
            </Header>
            <main className={styles.main}>
                <Section>
                    <img src="./imagesPv/hlp.png" alt="imagem decorativa" className={styles['float-left']} />
                    <span style={{zIndex: 10}}><Text bottom={false} tag="h2">Um pedido de socorro legal enquanto o seu processo não anda!</Text>
                    <Subtitle>E como funciona a Ação Cautelar?</Subtitle>
                    <div className={styles.py}>
                        <Square
                            index={1}
                            title="1° - O que é?"
                            subtitle={`Imagine que você está enfrentando um problema urgente, como descontos indevidos em seu salário. Essa Ação Cautelar é um "pedido de socorro" legal, e por isso faremos pedido de liminar para impedir esses descontos enquanto a situação é analisada mais detalhadamente.`}
                        />
                        <Square
                            title="2° - Pedido de Tutela de Urgência:"
                            subtitle={`Você está solicitando ao tribunal uma decisão rápida para parar imediatamente esses descontos indevidos.`}
                        />
                        <Square
                            title="3° - Documentos e Provas:"
                            subtitle={`Etapa que apresenta evidências para provar o que está acontecendo. Como apresentar extratos bancários que demonstram os descontos.`}
                        />
                    </div></span>
                    <Button link={true} path="#formulario">Quero saber mais sobre ação cautelar!</Button>
                </Section>
                <Section>
                    <div className={styles.specialDiv}>
                        <Text bottom={false} tag="h2">Faça uma análise com um profissional!</Text>
                        <Subtitle>Envie seu último contracheque e extrato com os descontos em conta corrente para avaliar se pode ajuizar a ação.</Subtitle>
                        <Button link={true} path="#formulario">Quero fazer a análise</Button>
                    </div>
                </Section>
                <Section bg={false}>
                    <div className={`${styles.bottom} ${styles.size} ${styles.positive_check_div}`}>
                        <Text bottom={true} bg={true} tag="h2">Entenda se a Ação Cautelar serve para você:</Text>
                        <div className={`${styles.check_div}`}>
                            <div className={styles.listItem}>
                                <Text bottom={false} tag="h4" left={true} >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M382-232.348 146.348-468l64.891-64.891L382-362.131l366.761-366.76L813.652-664 382-232.348Z" /></svg>
                                    <span>Pessoas com Descontos Excessivos:</span>
                                </Text>
                                <Subtitle>
                                    <span>Se você percebe que estão tirando mais dinheiro do seu salário ou conta bancária do que deveriam.</span>
                                </Subtitle>
                            </div>
                            <div className={styles.listItem}>
                                <Text bottom={false} tag="h4" left={true} >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M382-232.348 146.348-468l64.891-64.891L382-362.131l366.761-366.76L813.652-664 382-232.348Z" /></svg>
                                    <span>Problemas Urgentes:</span>
                                </Text>
                                <Subtitle>Quando a situação exige uma resposta rápida do tribunal para evitar mais prejuízos financeiros.</Subtitle>
                            </div>
                            <div className={styles.listItem}>
                                <Text bottom={false} tag="h4" left={true} >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M382-232.348 146.348-468l64.891-64.891L382-362.131l366.761-366.76L813.652-664 382-232.348Z" /></svg>
                                    <span>Evidências Disponíveis:</span>
                                </Text>
                                <Subtitle>Se você possui documentos, como extratos bancários, que comprovam os descontos indevidos.</Subtitle>
                            </div>
                            <div className={styles.listItem}>
                                <Text bottom={false} tag="h4" left={true} >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M382-232.348 146.348-468l64.891-64.891L382-362.131l366.761-366.76L813.652-664 382-232.348Z" /></svg>
                                    <span>Negociações sem Sucesso:</span>
                                </Text>
                                <Subtitle>Se tentativas de resolver o problema diretamente com a outra parte não foram bem-sucedidas.</Subtitle>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.top} ${styles.size} ${styles.negative_check_div}`}>
                        <Text bottom={true} bg={true} tag="h2">Para quem não serve</Text>
                        <div className={`${styles.check_div}`}>
                            <div className={styles.listItem}>
                                <Text bottom={false} tag="h4" left={true} >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M256-192.348 192.348-256l224-224-224-224L256-767.652l224 224 224-224L767.652-704l-224 224 224 224L704-192.348l-224-224-224 224Z" /></svg>
                                    <span>Situações Não Urgentes:</span>
                                </Text>
                                <Subtitle>
                                    Se os descontos indevidos não estão causando danos imediatos e podem ser resolvidos em um ritmo mais lento.
                                </Subtitle>
                            </div>
                            <div className={styles.listItem}>
                                <Text bottom={false} tag="h4" left={true} >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M256-192.348 192.348-256l224-224-224-224L256-767.652l224 224 224-224L767.652-704l-224 224 224 224L704-192.348l-224-224-224 224Z" /></svg>
                                    <span>Falta de Evidências:</span>
                                </Text>
                                <Subtitle>Se não há documentos ou provas claras que respaldam a alegação de descontos indevidos.</Subtitle>
                            </div>
                            <div className={styles.listItem}>
                                <Text bottom={false} tag="h4" left={true}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M256-192.348 192.348-256l224-224-224-224L256-767.652l224 224 224-224L767.652-704l-224 224 224 224L704-192.348l-224-224-224 224Z" /></svg>
                                    <span>Questões não relacionadas a descontos bancários:</span>
                                </Text>
                                <Subtitle>Trabalhamos apenas no direito bancário.</Subtitle>
                            </div>
                        </div>
                    </div>
                    <Button link={true} path="#formulario">Quero saber mais sobre ação cautelar!</Button>
                </Section>
                <Section >
                    <img src="./imagesPv/1.png" alt="Imagem icônica de direito" className={styles.lastImg} />
                    <div className={styles.about}>
                        <div style={{ marginBottom: '24px' }} className={styles.centralized}>
                            <Text tag="h2">O escritório Krüger Toledo</Text>
                        </div>
                        <div className={styles.text}>
                            <Subtitle justify={true}>
                                A KRÜGER TOLEDO Advocacia é um escritório especializado em direito bancário, comprometido em valorizar seu dinheiro da forma que você merece. Buscamos os melhores ganhos possíveis através de uma assessoria individualizada. Destacamos alguns diferenciais que contribuirão para o sucesso do seu processo:
                            </Subtitle>
                        </div>
                        <Subtitle justify={true} left={true}>O escritório conta com uma equipe formada por:</Subtitle>
                        <ul style={{ marginLeft: '24px', marginTop: '24px', marginBottom: '24px' }}>
                            <li style={{ color: 'var(--pv-secondary-color)', maxWidth: '400px' }}>Vasta experiência com centenas de clientes.</li>
                            <li style={{ color: 'var(--pv-secondary-color)', maxWidth: '400px' }}>Atendimento personalizado.</li>
                            <li style={{ color: 'var(--pv-secondary-color)', maxWidth: '400px' }}>SMS para acompanhar a movimentação do processo.</li>
                            <li style={{ color: 'var(--pv-secondary-color)', maxWidth: '400px' }}>Entregamos nosso máximo em cada processo porque nosso objetivo é ajudar você a alcançar seus direitos.</li>
                        </ul>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            {/* <Button link={true} path='#formulario'>Conte com nossa ajuda</Button> */}
                        </div>
                    </div>
                </Section>
                <Section>
                    <Text tag="h2">O que dizem da Advocacia Krüger Toledo?</Text>
                    <TestmonialsSwiper />
                    <Button link={true} path='#formulario'>Quero saber mais sobre a ação cautelar!</Button>
                </Section>
                <Section sm={true}>
                    <Text tag="h2" bottom={true}>Dúvidas Frequentes</Text>
                    <Dropdown
                        liDrowdown={faq}
                    />
                </Section>
            </main>
        </Template>
    )
}