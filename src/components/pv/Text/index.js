import styles from './Text.module.css'

export default function Text({ small, children, tag, bottom, bg, left }) {
    const Tag = tag || 'h2'

    return (
        <div className={ `${small ? styles.small : ''} ${left ? styles.left : ''} ${bg ? styles.bg : ''} ${bottom ? styles.bottom : ''} ${styles.title}` }>
            <Tag>{children}</Tag>
        </div>
    )
}