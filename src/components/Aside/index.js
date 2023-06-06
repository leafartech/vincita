import MyLink from '../MyLink'
import styles from './Aside.module.css'
import json from '@/json/db.json'

export default function Aside() {
    const team = json
    return (
        <nav className={ styles.aside }>
            <ul>
                <h4>Advogados<span>(arraste para o lado)</span></h4>
                <li>
                    <MyLink path={`/equipe`}>Todos</MyLink>
                </li>
                <li>
                    <MyLink path={`/equipe/${team[0].name.toLowerCase()}`}>Bossuet</MyLink>
                </li>
                <li>
                    <MyLink path={`/equipe/${team[1].name.toLowerCase()}`}>Zola</MyLink>
                </li>
                <li>
                    <MyLink path={`/equipe/${team[2].name.toLowerCase()}`}>Dante Alighieri</MyLink>
                </li>
                <li>
                    <MyLink path={`/equipe/${team[3].name.toLowerCase()}`}>Victor Hugo</MyLink>
                </li>
                <li>
                    <MyLink path={`/equipe/${team[3].name.toLowerCase()}`}>Victor Hugo</MyLink>
                </li>
                <li>
                    <MyLink path={`/equipe/${team[3].name.toLowerCase()}`}>Victor Hugo</MyLink>
                </li>
                <li>
                    <MyLink path={`/equipe/${team[3].name.toLowerCase()}`}>Victor Hugo</MyLink>
                </li>
            </ul>
        </nav>
    )
}