import styles from './Section.module.css'

export default function Section({children, top}) {
    return (    
        <section className={ `${top ? styles.top : ''} ${styles.section}` }>
            <div className={ styles.container}>
                {children}
            </div>
        </section>
    )
}