import Header from '@/components/Header'
import styles from './EquipeId.module.css'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Grid from '@/components/Grid'
import Aside from '@/components/Aside'
import Title from '@/components/Title'
import { useEffect, useState } from 'react'
import json from '@/json/db.json'
import { useRouter } from 'next/router'
import Subtitle from '@/components/Subtitle'

export default function EquipeScreen() {
    const [ personData, setPersonData ] = useState({})
    const router = useRouter()
    let name = router.query

    let id = 0
    useEffect(() => {  
        json.map((data, index) => {
            if ((data.name).toLowerCase() === name.name) {
                setPersonData(data)
            }
        })
    })

    return (
        <div className={ styles['equipe-screen']}>
            <Header secondary={ true }/>
            <Main>
                <Grid>
                    <Aside />
                    <div>
                        <Section>
                            {Object.keys(personData).length > 0 ?
                            <>
                            <Title bot={true} top={personData.position} left={true}>{personData.name}</Title>
                            <img className={ styles.img } src={ `../images/${personData.imagePath}.png` } alt="" />
                            <div className={ styles.description }>
                                {personData.description.map((text, index) => (
                                    <Subtitle left={true} key={index}>{text}</Subtitle>
                                ))}
                            </div>
                            </>
                            :
                            ''
                            }
                        </Section>
                    </div>
                </Grid>
            </Main>
            <Footer secondary={ true }/>
        </div>
    )
}