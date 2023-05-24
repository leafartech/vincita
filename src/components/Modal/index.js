import { useState } from 'react'
import Subtitle from '../Subtitle'
import Text from '../Text'
import styles from './Modal.module.css'
import Button from '../Button'

export default function Modal({ modalState, modalChange }) {
    const [ salario, setSalario ] = useState('')
    const [ custo, setCusto ] = useState('')
    const [ indicacao, setIndicacao ] = useState(0)
    const [ indicacaoMessage, setIndicacaoMessage ] = useState('')
    const [ error, setError ] = useState({})
    const [ animation, setAnimation ] = useState(false)

    function inptChange(e) {
        const { name, value } = e.target

        if (name === 'salario') setSalario(value)
        if (name === 'custo') setCusto(value)
        if (name === 'divida') setDivida(value)
    }

    function calculate(e) {
        setAnimation(false)
        if (salario === '' )  return setError({salario: true})
        if (custo === '')  return setError({custo: true})

        let percentageF = parseInt(salario) * 35 / 100
        let percentageS = parseInt(salario) * 40 / 100
        let percentageT = parseInt(salario) * 50 / 100
        let qq = (parseInt(custo) / parseInt(salario) * 100).toFixed(0)

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
            setIndicacaoMessage('Você está envididado')
            setAnimation(true)
        }
        if (parseInt(custo) >= percentageT) {
            setIndicacao(qq)
            setIndicacaoMessage('Você está super envididado')
            setAnimation(true)
        }
    }

    if (modalState) {
        return (
            <div className={ `${modalState ? styles.index : ''} ${styles.modalDiv}`}>
                <div className={ styles.bg } onClick={e => modalChange(e)}></div>
                <form className={ styles.forms }>
                    <Text>Repactuação de dívidas</Text>
                    <Subtitle bg={true}>Preencha os campos abaixo e saiba se essa lei é válida para você.</Subtitle>
                    <div className={ styles['form-control']} >
                        <label>Salário</label>
                        <input onChange={e => inptChange(e)} name="salario" type="number" value={salario} />
                        {error['salario'] ?
                        <p className={ styles.error }>Preencha o campo acima com apenas números</p>
                        :''}
                    </div>
                    <div className={ styles['form-control']} >
                        <label>Gastos totais</label>
                        <input onChange={e => inptChange(e)} name="custo" type="number" value={custo} />
                        {error['custo'] ?
                        <p className={ styles.error }>Preencha o campo acima com apenas números</p>
                        :''}
                    </div>
                    <div className={ styles.progressDiv}>
                        <>
                            <p className={ styles['alert'] }>{indicacao}% em gastos.</p>
                            <h5>{indicacaoMessage}</h5>
                        </>
                        <span onClick={e => calculate(e)} style={{ fontFamily: 'Lato, sans-serif', color: 'var(--main-color)', textDecoration: 'underline'}}>Calcular nível de indicação</span>
                    </div>
                    <Button modalChange={e => modalChange(e)} path="/#formulario" link={true} alert={ animation ? true : false}>Saia do superendividamento!</Button>
                    <div className={ styles.bottom }>
                        <Subtitle bg={true} size={true}><span className="strong">Nenhum dado inserido será < br/> salvo pelo sistema</span>.</Subtitle>
                    </div>
                </form>
            </div>
        )
    }
}