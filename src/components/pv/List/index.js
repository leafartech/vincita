import Subtitle from '../Subtitle'
import styles from './List.module.css'

export default function List({ porta }) {

    if (porta) {
        return (
            <ul className={styles.list}>
                <li>
                    <div className={styles.path}>
                        <div className={styles['path-round-item']}></div>
                        <div className={styles['path-item']}></div>
                        <div className={styles['path-item']}></div>
                        <div className={styles['path-item']}></div>
                        <div className={styles['path-item']}></div>
                        <div className={styles['path-item']}></div>
                    </div>
                    <img className={styles['list-icon']} src="./imagesPv/icon.png" alt="ícone" />
                    <h4>1 -  NOTIFICAÇÃO EXTRAJUDICIAL:</h4>
                    <Subtitle size={true} justify={true}>
                        Notificação extrajudicial para solicitação de informações e tentativa de suspensão de cobranças administrativamente;
                    </Subtitle>
                </li>
                <li>
                    <div className={styles.path}>
                        <div className={styles['path-round-item']}></div>
                        <div className={styles['path-item']}></div>
                        <div className={styles['path-item']}></div>
                        <div className={styles['path-item']}></div>
                        <div className={styles['path-item']}></div>
                        <div className={styles['path-item']}></div>
                    </div>
                    <img className={styles['list-icon']} src="./imagesPv/icon.png" alt="ícone" />
                    <h4>2 - JUDICIALIZAÇÃO DA DEMANDA:</h4>
                    <Subtitle size={true} justify={true}>
                        Em caso de negativa da instituição financeira em relação às notificações enviadas, entraremos com uma ação judicial contra a instituição financeira;
                    </Subtitle>
                </li>
                <li>
                    <div className={styles.path}>
                        <div className={styles['path-round-item']}></div>
                        <div className={styles['path-item']}></div>
                        <div className={styles['path-item']}></div>
                        <div className={styles['path-item']}></div>
                        <div className={styles['path-item']}></div>
                        <div className={styles['path-item']}></div>
                    </div>
                    <img className={styles['list-icon']} src="./imagesPv/icon.png" alt="ícone" />
                    <h4>3 - SUSPENSÃO DA PARCELA:</h4>
                    <Subtitle size={true} justify={true}>
                        Em casos de sucesso, podemos conseguir a suspensão da cobrança da parcela até a sentença final. Já nos aconteceu da parcela ser suspensa em menos de uma semana após o ajuizamento da ação;
                    </Subtitle>
                </li>
                <li>
                    <div className={styles.path}>
                        <div className={styles['path-round-item']}></div>
                        <div className={styles['path-item']}></div>
                        <div className={styles['path-item']}></div>
                        <div className={styles['path-item']}></div>
                        <div className={styles['path-item']}></div>
                        <div className={styles['path-item']}></div>
                    </div>
                    <img className={styles['list-icon']} src="./imagesPv/icon.png" alt="ícone" />
                    <h4>4 - DISCUSSÃO DO MÉRITO:</h4>
                    <Subtitle size={true} justify={true}>
                        O juiz abrirá prazo para que o banco "se explique" sobre o que aconteceu. Depois, nós rebateremos os argumentos do banco;
                    </Subtitle>
                </li>
                <li>
                    <div className={styles.path}>
                        <div className={styles['path-round-item']}></div>
                        <div className={styles['path-item']}></div>
                        <div className={styles['path-item']}></div>
                        <div className={styles['path-item']}></div>
                        <div className={styles['path-item']}></div>
                        <div className={styles['path-item']}></div>
                    </div>
                    <img className={styles['list-icon']} src="./imagesPv/icon.png" alt="ícone" />
                    <h4>5 - DEVOLUÇÃO DE TODOS VALORES PAGOS:</h4>
                    <Subtitle size={true} justify={true}>
                    Nos casos de sucesso, podemos conseguir a devolução de todos os valores pagos e, eventualmente, ainda podemos conseguir danos morais para tentar compensar os prejuízos sofridos.
                    </Subtitle>
                </li>
                <div className={styles['final-arrow']}>
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 0H0L8.5 16L17 0H8.5Z" fill="#808080" />
                    </svg>
                </div>
            </ul>
        )
    }
    return (
        <ul className={styles.list}>
            <li>
                <div className={styles.path}>
                    <div className={styles['path-round-item']}></div>
                    <div className={styles['path-item']}></div>
                    <div className={styles['path-item']}></div>
                    <div className={styles['path-item']}></div>
                    <div className={styles['path-item']}></div>
                    <div className={styles['path-item']}></div>
                </div>
                <img className={styles['list-icon']} src="./imagesPv/icon.png" alt="ícone" />
                <h4>1 - EXECUÇÃO DO PLANO REPACTUAÇÃO:</h4>
                <Subtitle size={true} justify={true}>
                    1.1 Com base nas informações e documentos que você nos conceder, desenvolveremos o plano de pagamento de acordo com as suas possibilidades, sem apertos no final do mês e sem deixar de pagar o principal.
                </Subtitle>
            </li>
            <li>
                <div className={styles.path}>
                    <div className={styles['path-round-item']}></div>
                    <div className={styles['path-item']}></div>
                    <div className={styles['path-item']}></div>
                    <div className={styles['path-item']}></div>
                    <div className={styles['path-item']}></div>
                    <div className={styles['path-item']}></div>
                </div>
                <img className={styles['list-icon']} src="./imagesPv/icon.png" alt="ícone" />
                <h4>2 - PROPOSTA DE PAGAMENTO EXTRAJUDICIAL:</h4>
                <Subtitle size={true} justify={true}>
                    2.1 Extrajudicialmente, notificaremos todos os credores para que se adaptem a nova lei. Com isso muitos credores já reduzirão os valores.
                </Subtitle>
            </li>
            <li>
                <div className={styles.path}>
                    <div className={styles['path-round-item']}></div>
                    <div className={styles['path-item']}></div>
                    <div className={styles['path-item']}></div>
                    <div className={styles['path-item']}></div>
                    <div className={styles['path-item']}></div>
                    <div className={styles['path-item']}></div>
                </div>
                <img className={styles['list-icon']} src="./imagesPv/icon.png" alt="ícone" />
                <h4>3 - JUDICIALIZAÇÃO DA PROPOSTA DE PAGAMENTO:</h4>
                <Subtitle size={true} justify={true}>
                    3.1	Para os credores que não aceitarem a proposta extrajudicialmente, pediremos, com base na nova lei, que o juiz reduza imediatamente os valores de sua dívida, preservando 65% do seu rendimento, para suas necessidades básicas, mantendo seu mínimo existencial e sua dignidade. Estatisticamente, até aqui, suas dívidas estarão reduzidas em 40%!
                </Subtitle>
                <Subtitle size={true} justify={true}>
                    3.2	Após isso, o juiz intimará os credores para se manifestarem nos autos sobre o plano de repactuação.
                </Subtitle>
            </li>
            <li>
                <div className={styles.path}>
                    <div className={styles['path-round-item']}></div>
                    <div className={styles['path-item']}></div>
                    <div className={styles['path-item']}></div>
                    <div className={styles['path-item']}></div>
                    <div className={styles['path-item']}></div>
                    <div className={styles['path-item']}></div>
                </div>
                <img className={styles['list-icon']} src="./imagesPv/icon.png" alt="ícone" />
                <h4>4 - AUDIÊNCIA CONJUNTA DE CONCILIAÇÃO:</h4>
                <Subtitle size={true} justify={true}>
                    4.1 O juiz designará audiência, com maior brevidade possível, onde todos comparecem de forma online, argumentam suas razões e procuram um consenso.
                </Subtitle>
                <Subtitle size={true} justify={true}>
                    4.2 O credor que não comparecer, fica para o final da fila!
                </Subtitle>
            </li>
            <li>
                <div className={styles.path}>
                    <div className={styles['path-round-item']}></div>
                    <div className={styles['path-item']}></div>
                    <div className={styles['path-item']}></div>
                    <div className={styles['path-item']}></div>
                    <div className={styles['path-item']}></div>
                    <div className={styles['path-item']}></div>
                </div>
                <img className={styles['list-icon']} src="./imagesPv/icon.png" alt="ícone" />
                <h4>5 - SENTENÇA DE REPACTUAÇÃO ou ABERTURA DE PROCESSO DE REPACTUAÇÃO:</h4>
                <Subtitle size={true} justify={true}>
                    5.1 Se ainda sobrarem credores que não aceitem a proposta, o juiz determinará o aceite compulsório do nosso plano de pagamento, ou, ainda, produzirá perícias para analisar os contratos. Nessa análise será verificado se existem abusos ou ilegalidades nos contratos. Se existirem, você poderá reaver esses valores e pode haver a condenação dos credores ao pagamento de danos morais.
                </Subtitle>
            </li>
            <div className={styles['final-arrow']}>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 0H0L8.5 16L17 0H8.5Z" fill="#808080" />
                </svg>
            </div>
        </ul>
    )
}