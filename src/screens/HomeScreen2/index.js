import Footer from '@/components/Footer'
import styles from './HomeScreenB.module.css'
import Main from '@/components/Main'
import Link from 'next/link'
import { useEffect } from 'react';

export default function HomeScreen2() {
    let cont = 0
    useEffect(() => {
        if (cont === 0) {
            const script = document.createElement('script');
            script.src = 'https://lauromts.activehosted.com/f/embed.php?id=7';
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            script.async = true;
        
            const div = document.querySelector('.form-container'); // Use a class or ID that matches your desired container
            div.appendChild(script);
            cont ++
        }
    
      }, []);

    return (
        <div className={styles['home-screen']}>
            <Link href="https://api.whatsapp.com/send?phone=5561981401978&text=Olá!%20Quero%20saber%20mais%20sobre%20os%20serviços%20do%20escritório%20Krüger%20Toledo%20Advocacia." target='_blank' className={styles.whatsapp}>
                <img src="./images/whatsapp.png" alt="Link para o Whatsapp Kruger Toledo" />
            </Link>
            <header className={styles.header}>
                <div className={styles.mainHeader}>
                    <img src="./imagesPv/logo.png" alt="" />
                </div>
                <div className={styles.bottomHeader}>
                    <h1>Conheça a Lei do Superendividamento e o que prevê em favor ao consumidor</h1>
                </div>
            </header>
            <main>
                <div className={styles.content}>
                    <img src="./imagesPv/bg1.png" alt="" />
                    <div className={`${styles.text} ${styles.textF}`}>
                        <p>Você já se viu em uma situação em que as dívidas parecem esmagadoras e sem saída? A boa notícia é que uma possível saída está prevista em lei se você estiver nessa situação! </p>
                        <p>A Lei do Superendividamento prevê medidas que possibilitam a quitação de dívidas,  oferecendo a oportunidade do consumidor apresentar uma proposta de plano de pagamento com prazo de cinco anos, preservando o seu mínimo existencial Assim, você pode conseguir reorganizar suas finanças e reconstruir sua estabilidade financeira. </p>
                        <p>Se você é um servidor público,está lidando com dívidas insustentáveis e não vê uma maneira de quitar tudo sem ajuda, este artigo é para você.</p>
                    </div>
                    <div className={styles.text}>
                        <h3>1. Repactuação de Dívidas: Uma Segunda Chance para um Novo Começo</h3>
                        <p>A Lei do Superendividamento permite que você dê um novo começo às suas finanças. Através do processo de repactuação de dívidas, você pode apresentar um plano de pagamento que se encaixe nas suas possibilidades, com um prazo máximo de 5 anos. Isso não apenas alivia o peso das dívidas, mas também preserva o mínimo essencial para garantir sua qualidade de vida.</p>
                    </div>
                    <div className={styles.text}>
                        <h3>2. Suspensão dos Encargos da Mora: Respirando Aliviado</h3>
                        <p>O que acontece se seus credores não comparecerem à audiência conciliatória? Uma pausa nos encargos da mora. Isso mesmo: a lei prevê que o não comparecimento injustificado dos credores leva à suspensão da exigibilidade do débito e à interrupção dos encargos da mora. Uma chance para você respirar aliviado e planejar sua estratégia sem a pressão constante das dívidas.</p>
                    </div>
                    <div className={styles.text}>
                        <h3>3. Exclusão de Dados de Inadimplência: Uma Nova Perspectiva</h3>
                        <p>O peso da inadimplência pode afetar a sua vida de várias maneiras, incluindo a dificuldade em obter crédito no futuro. Com a Lei do Superendividamento, o acordo resultante da conciliação ou repactuação pode incluir a exclusão do seu nome de bancos de dados e cadastros de inadimplentes. Isso significa uma nova perspectiva para você, sem as restrições que a inadimplência pode trazer.</p>
                    </div>
                    <div className={styles.text}>
                        <h3>4. Escritório de advocacia especializado em repactuação de dívidas</h3>
                        <p>Para ter êxito nesse tipo de ação, é preciso agir o quanto antes e contar com a orientação e serviços especializados. </p>
                        <p>Portanto, não é qualquer profissional que poderá assumir esse caso e conseguir resposta favorável ao candidato. </p>
                        <p>Sendo assim, a orientação mais certa é contratar os serviços de um escritório de advocacia especializado em repactuação de dívidas.</p>
                        <p>O escritório Krüger Toledo Advocacia tem uma equipe especializada nesse assunto. Trabalhamos com seriedade e compromisso com as questões dos nossos clientes, para oferecer os melhores serviços e melhores resultados. </p>
                        <p>Para mais informações, procure um escritório de advocacia especializado na Lei de Repactuação de Dívidas.</p>
                    </div>
                </div>
                <div className={ styles.last }>
                    <div className={styles.content}>
                        <div className={styles.text}>
                            <h2>Experiência real e resultados sólidos na área jurídica, com especialização em casos de superendividamento e litígios bancários</h2>
                            <p>O escritório Krüger Toledo Advocacia, atua ajudando servidores públicos a superar o superendividamento. Com nossa ampla experiência no atendimento a inúmeros clientes e no gerenciamento de recursos significativos, estamos prontos para desenvolver estratégias jurídicas altamente eficazes para ajudar a reequilibrar suas finanças pessoais de maneira efetiva.</p>
                            <p>O escritório conta com uma equipe formada por advogados auxiliares, contadores experientes, técnicos contadores auxiliares e uma equipe de apoio dedicada e proativa.</p>
                        </div>
                    </div>
                    <img src="./images/1.png" alt="" />
                </div>
                <div className="form-container"></div>;
            </main>
            <Footer />
        </div>
    )
}