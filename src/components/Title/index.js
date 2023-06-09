import styles from './Title.module.css'

export default function Title({children, tag, top, bot, left, animation, bg, mt}) {
    const Tag = tag || 'h2'
    return (
        <div className={ `${mt && styles['margin-top']} ${bg && styles.bg} ${animation && styles["tracking-in-contract"]} ${left ? styles.left : ''} ${bot ? styles.bot : ''} ${styles.title}` }>
            <h5>{top}</h5>
            <Tag>{children}</Tag>
        </div>
    )
}