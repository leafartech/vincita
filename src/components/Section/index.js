import styles from './Section.module.css'

export default function Section({ children, type, pd, bg, top }) {
    //MUDAR SECTION DE ACORDO COM O TYPE (FLEX-COL OU FLEX-ROW)

    return (
        <section className={ `${top ? styles.top : ''} ${ bg ? styles.bg : ''} ${pd ? styles.pd : ''} ${styles.section}` }>
            {children}
        </section>
    )
}