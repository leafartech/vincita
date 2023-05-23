import { useState } from 'react'
import Subtitle from '../Subtitle'
import Text from '../Text'
import styles from './Modal.module.css'
import Button from '../Button'

export default function Modal({ modalState, modalChange }) {
    const [ salario, setSalario ] = useState('')
    const [ custo, setCusto ] = useState('')
    const [ divida, setDivida ] = useState('')
    const [ indicacao, setIndicacao ] = useState(0)
    const [ error, setError ] = useState({})

    function inptChange(e) {
        const { name, value } = e.target

        if (name === 'salario') setSalario(value)
        if (name === 'custo') setCusto(value)
        if (name === 'divida') setDivida(value)
    }

    function calculate(e) {
        if (salario === '' )  return setError({salario: true})
        if (custo === '')  return setError({custo: true})
        if (divida === '')  return setError({divida: true})
        console.log(salario)

        let percentage = parseInt(salario) * 35 / 100
        if (( parseInt(custo) + parseInt(divida)) >= percentage) return setIndicacao(100)

        //SE CHEGOU AQUI, É PORQUE NÃO HÁ ENDIVIDAMENTO.
        setIndicacao(1)
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
                        <label>Custo</label>
                        <input onChange={e => inptChange(e)} name="custo" type="number" value={custo} />
                        {error['custo'] ?
                        <p className={ styles.error }>Preencha o campo acima com apenas números</p>
                        :''}
                    </div>
                    <div className={ styles['form-control']} >
                        <label>Dívidas</label>
                        <input onChange={e => inptChange(e)} name="divida" type="number" value={divida} />
                        {error['divida'] ?
                        <p className={ styles.error }>Preencha o campo acima com apenas números</p>
                        :''}
                    </div>
                    <div className={ styles.progressDiv}>
                        {indicacao > 0 ?
                        <>
                            {indicacao === 1 ?
                            <>
                                <p>Você não esta superendividado(a)!</p>
                                <span onClick={e => calculate(e)} style={{ fontFamily: 'Lato, sans-serif', color: 'var(--main-color)', textDecoration: 'underline'}}>Calcular nível de indicação</span>
                            </>

                            :
                            <>
                                <h5>Nível de indicação</h5>
                                <div className={ styles.progress }>
                                    <div className={ styles.bar} style={{ width: `${indicacao}%`}}></div>
                                </div>
                            </>
                            }
                        </>
                        :
                        <span onClick={e => calculate(e)} style={{ fontFamily: 'Lato, sans-serif', color: 'var(--main-color)', textDecoration: 'underline'}}>Calcular nível de indicação</span>
                        }
                    </div>
                    <Button modalChange={e => modalChange(e)} path="/#formulario" link={true}>Saia do superendividamento!</Button>
                    <div className={ styles.bottom }>
                        <Subtitle bg={true} size={true}><span className="strong">Nenhum dado inserido será < br/> salvo pelo sistema</span>.</Subtitle>
                    </div>
                </form>
            </div>
        )
    }
}