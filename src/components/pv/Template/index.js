import styles from './Template.module.css'

export default function Template({children}) {
    return (
        <div className={ styles.template }>
            {children}
        </div>
    )
}