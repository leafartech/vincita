import styles from './Section.module.css'

export default function Section({children, top, bg}) {
    return (    
        <section className={ `${bg && styles.bg} ${top ? styles.top : ''} ${styles.section}` }>
            <div className={ styles.container}>
                {children}
            </div>
        </section>
    )
}