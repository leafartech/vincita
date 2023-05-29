import { useState } from 'react'
import Subtitle from '../Subtitle'
import Text from '../Text'
import styles from './Calculadora.module.css'
import Button from '../Button'

export default function Calculadora({ modalState, modalChange }) {
    const [ salario, setSalario ] = useState('')
    const [ custo, setCusto ] = useState('')
    const [ indicacao, setIndicacao ] = useState(0)
    const [ indicacaoMessage, setIndicacaoMessage ] = useState('')
    const [ error, setError ] = useState({})
    const [ animation, setAnimation ] = useState(false)
    const [ exib, setExib ] = useState(false)

    function inptChange(e) {
        const { name, value } = e.target

        if (name === 'salario') setSalario(value)
        if (name === 'custo') setCusto(value)
        if (name === 'divida') setDivida(value)
    }

    function calculate(e) {
        setAnimation(false)
        setError({})
        if (salario === '' )  return setError({salario: true})
        if (custo === '')  return setError({custo: true})

        let percentageF = parseInt(salario) * 35 / 100
        let percentageS = parseInt(salario) * 40 / 100
        let percentageT = parseInt(salario) * 50 / 100
        let qq = (parseInt(custo) / parseInt(salario) * 100).toFixed(0)
        setExib(true)

        if (parseInt(custo) <= percentageF) {
            setIndicacao(qq) //Suas finanças estão bem
            setIndicacaoMessage('Suas finanças estão bem')
        }
        if (parseInt(custo) > percentageF && custo <= percentageS) {
            setIndicacao(qq) //Seu mínimo existencial está comprometido
            setIndicacaoMessage('Seu mínimo existencial está comprometido')
            setAnimation(true)
        }
        if (parseInt(custo) > percentageS && custo < percentageT) {
            setIndicacao(qq) //Você está envididado
            setIndicacaoMessage('Você está endividado')
            setAnimation(true)
        }
        if (parseInt(custo) >= percentageT) {
            setIndicacao(qq)
            setIndicacaoMessage('Você está super endividado')
            setAnimation(true)
        }
    }

    return (
        <div className={ `${styles.calculadora}`} id="calculadora">
            <Text bottom={true}>A lei de repactuação recupera além de suas finanças, a sua dignidade!</Text>
            <div className={ styles.bg } onClick={e => modalChange(e)}></div>
            <form className={ styles.forms }>
                <Subtitle bg={true}>Preencha os campos abaixo para simular sua situação financeira.</Subtitle>
                <div className={ styles['form-control']} style={{marginTop: '24px'}}>
                    <label>Renda líquida</label>
                    <div>
                        <span>R$</span>
                        <input placeholder="000" onChange={e => inptChange(e)} name="salario" type="number" value={salario} />
                    </div>
                    {error['salario'] ?
                    <p className={ styles.error }>Preencha o campo acima com apenas números</p>
                    :''}
                </div>
                <div className={ styles['form-control']} >
                    <label>Gastos totais</label>
                    <div>
                        <span>R$</span>
                        <input placeholder="000" onChange={e => inptChange(e)} name="custo" type="number" value={custo} />
                    </div>
                    {error['custo'] ?
                    <p className={ styles.error }>Preencha o campo acima com apenas números</p>
                    :''}
                </div>
                <div className={ styles.progressDiv}>
                    <span onClick={e => calculate(e)} className={ styles.calc }>Clique para calcular nível de indicação</span>
                    <div className={ styles.bottom }>
                        <Subtitle bg={true} size={true}>Nenhum dado inserido será < br/> salvo pelo sistema.</Subtitle>
                    </div>
                    {exib ?
                    <div>
                        <p className={ styles['alert'] }>{indicacao}% em gastos.</p>
                        <h5>{indicacaoMessage}</h5>
                    </div>
                    :
                    ''}
                </div>
            </form>
            <Button path="/#formulario" link={true} alert={ animation ? true : false}>Recupere a sua estabilidade financeira agora!</Button>
        </div>
    )
}