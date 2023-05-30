import { useState } from 'react'
import styles from './Dropdown.module.css'

export default function Dropdown({ liDrowdown, dropdownId, pills }) {
    const [ activeDropdown, setActiveDropdown ] = useState([])

    function dropdownActive(event) {
        // console.log(event.target.id)
        let dropdownElement = document.querySelector(`#dropdown-text-${event.target.id}`)

        if (activeDropdown.length > 0) {
            document.querySelector(`#dropdown-text-${activeDropdown[0]}`).classList.remove('dropdownActived')
            setActiveDropdown([])
        } else {
            dropdownElement.classList.add("dropdownActived")
            setActiveDropdown([event.target.id])
        }
        
    }

    return (
        <div className={ styles.dropdownBig }>
            { pills ? 
                <img className={ styles.pills } src="./img/MetabolicPage/pills.png" alt="Unidades do Metabolic" />
            : ''}
            <ul className={ styles.dropdown }>
                { liDrowdown.map((item, index) => (
                    <li key={ index } id={ `${dropdownId}-${index}` } onClick={e => dropdownActive(e) }>
                        <div id={ `${dropdownId}-${index}` } className={ styles.dropTitle }>
                            <span id={ `${dropdownId}-${index}` }>{ item.title }</span>
                            <div id={ `${dropdownId}-${index}` }>
                                <svg xmlns="http://www.w3.org/2000/svg" id={ `${dropdownId}-${index}` } viewBox="0 0 24 24" width="512" height="512"><path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"/></svg>
                            </div>
                        </div>
                        <div className={ styles.dropdownDiv } id={ `dropdown-text-${dropdownId}-${index}` }>
                            {item.text}
                        </div>
                    </li>
                )) }
            </ul>
        </div>
    )
}