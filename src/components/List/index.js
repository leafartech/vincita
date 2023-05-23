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
                <img className={ styles['list-icon'] } src="./images/icon.png" alt="ícone" />
                <h4>1 - Desenvolvimento de repactuação</h4>
                <Subtitle size={true} left={true}>
                Com base nas informações que você nos conceder, iremos desenvolver um <span className="strong">plano de pagamento das dívidas que cabe no teu bolso.</span>
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
                <img className={ styles['list-icon'] } src="./images/icon.png" alt="ícone" />
                <h4>2 - Tentativa de acordo extrajudicial dos credores</h4>
                <Subtitle size={true} left={true}>
                Antes de ajuizar a ação, tentaremos <span className="strong">fechar acordo extrajudicial</span> para que <span className="strong">você passe a pagar menos</span> o mais rápido possível.
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
                <img className={ styles['list-icon'] } src="./images/icon.png" alt="ícone" />
                <h4>3 - Proposta de pagamento judicial</h4>
                <Subtitle size={true} left={true}>
                Nesse momento alguns credores irão <span className="strong">aceitar nossa proposta de pagamento</span> e parte da <span className="strong">sua dívida já irá diminuir.</span>
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
                <img className={ styles['list-icon'] } src="./images/icon.png" alt="ícone" />
                <h4>4 - Análise judicial das dívidas remanescentes</h4>
                <Subtitle size={true} left={true}>
                O juiz irá fazer uma análise das dívidas com os credores que não aceitaram acordo
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
                <img className={ styles['list-icon'] } src="./images/icon.png" alt="ícone" />
                <h4>5 - Sentença com plano compulsório de pagamento</h4>
                <Subtitle size={true} left={true}>
                O juiz irá determinar a forma como os credores irão receber os valores
                </Subtitle>
            </li>
            <div className={ styles['final-arrow']}>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 0H0L8.5 16L17 0H8.5Z" fill="#ED8428"/>
                </svg>
            </div>
        </ul>
    )
}