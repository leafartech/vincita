import styles from './Title.module.css'

export default function Title({children, tag, top, bot, left}) {
    const Tag = tag || 'h2'
    return (
        <div className={ `${left ? styles.left : ''} ${bot ? styles.bot : ''} ${styles.title}` }>
            <h5>{top}</h5>
            <Tag>{children}</Tag>
        </div>
    )
}