import Subtitle from '../Subtitle'
import styles from './List.module.css'

export default function List() {
    return (
        <ul className={ styles.list }>
            <li>
                <div className={ styles.path}>
                    <div className={ styles['path-round-item']}></div>
                    <div className={ styles['path-item']}></div>
                    <div className={ styles['path-item']}></div>
                    <div className={ styles['path-item']}></div>
                    <div className={ styles['path-item']}></div>
                    <div className={ styles['path-item']}></div>
                </div>
                <img className={ styles['list-icon'] } src="./imagesPv/icon.png" alt="ícone" />
                <h4>1 - EXECUÇÃO DO PLANO REPACTUAÇÃO:</h4>
                <Subtitle size={true} justify={true}>
                1.1 Com base nas informações e documentos que você nos conceder, desenvolveremos o plano de pagamento de acordo com as suas possibilidades, sem apertos no final do mês e sem deixar de pagar o principal.
                </Subtitle>
            </li>
            <li>
                <div className={ styles.path}>
                    <div className={ styles['path-round-item']}></div>
                    <div className={ styles['path-item']}></div>
                    <div className={ styles['path-item']}></div>
                    <div className={ styles['path-item']}></div>
                    <div className={ styles['path-item']}></div>
                    <div className={ styles['path-item']}></div>
                </div>
                <img className={ styles['list-icon'] } src="./imagesPv/icon.png" alt="ícone" />
                <h4>2 - PROPOSTA DE PAGAMENTO EXTRAJUDICIAL:</h4>
                <Subtitle size={true} justify={true}>
                2.1 Extrajudicialmente, notificaremos todos os credores para que se adaptem a nova lei. Com isso muitos credores já reduzirão os valores
                </Subtitle>
            </li>
            <li>
                <div className={ styles.path}>
                    <div className={ styles['path-round-item']}></div>
                    <div className={ styles['path-item']}></div>
                    <div className={ styles['path-item']}></div>
                    <div className={ styles['path-item']}></div>
                    <div className={ styles['path-item']}></div>
                    <div className={ styles['path-item']}></div>
                </div>
                <img className={ styles['list-icon'] } src="./imagesPv/icon.png" alt="ícone" />
                <h4>3 - JUDICIALIZAÇÃO DA PROPOSTA DE PAGAMENTO:</h4>
                <Subtitle size={true} justify={true}>
                3.1	Para os credores que não aceitarem a proposta extrajudicialmente, pediremos, com base na nova lei, que o juiz reduza imediatamente os valores de sua dívida, preservando 65% do seu rendimento, para suas necessidades básicas, mantendo seu mínimo existencial e sua dignidade. Estatisticamente, até aqui, suas dívidas estarão reduzidas em 40%!
                </Subtitle>
                <Subtitle size={true} justify={true}>
                3.2	Após isso, o juiz intimará os credores para se manifestarem nos autos sobre o plano de repactuação.
                </Subtitle>
            </li>
            <li>
                <div className={ styles.path}>
                    <div className={ styles['path-round-item']}></div>
                    <div className={ styles['path-item']}></div>
                    <div className={ styles['path-item']}></div>
                    <div className={ styles['path-item']}></div>
                    <div className={ styles['path-item']}></div>
                    <div className={ styles['path-item']}></div>
                </div>
                <img className={ styles['list-icon'] } src="./imagesPv/icon.png" alt="ícone" />
                <h4>4 - AUDIÊNCIA CONJUNTA DE CONCILIAÇÃO:</h4>
                <Subtitle size={true} justify={true}>
                4.1 O juiz designará audiência, com maior brevidade possível, onde todos comparecem de forma online, argumentam suas razões e procuram um consenso.
                </Subtitle>
                <Subtitle size={true} justify={true}>
                4.2 O credor que não comparecer, fica para o final da fila!
                </Subtitle>
            </li>
            <li>
                <div className={ styles.path}>
                    <div className={ styles['path-round-item']}></div>
                    <div className={ styles['path-item']}></div>
                    <div className={ styles['path-item']}></div>
                    <div className={ styles['path-item']}></div>
                    <div className={ styles['path-item']}></div>
                    <div className={ styles['path-item']}></div>
                </div>
                <img className={ styles['list-icon'] } src="./imagesPv/icon.png" alt="ícone" />
                <h4>5 - SENTENÇA DE REPACTUAÇÃO ou ABERTURA DE PROCESSO DE REPACTUAÇÃO:</h4>
                <Subtitle size={true} justify={true}>
                5.1 Se ainda sobrarem credores que não aceitem a proposta, o juiz determinará o aceite compulsório do nosso plano de pagamento, ou, ainda, produzirá perícias para analisar os contratos. Nessa análise será verificado se existem abusos ou ilegalidades nos contratos. Se existirem, você poderá reaver esses valores e pode haver a condenação dos credores ao pagamento de danos morais.
                </Subtitle>
            </li>
            <div className={ styles['final-arrow']}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 0H0L8.5 16L17 0H8.5Z" fill="#808080"/>
            </svg>
            </div>
        </ul>
    )
}