import Title from '../Title'
import styles from './HeroFlex.module.css'

export default function HeroFlex({imagePath, title, children, reverse, bg}) {
    if (reverse) {
        return (
        <div className={ `${styles["hero-flex"]} ${styles['reverse']}`}>
            <div className={ `${bg && styles.bg} ${styles.text}` }>
                {title && <Title bg={bg} left={true} col={true}>{title}</Title>}
                {children}
            </div>
            <div className={ styles.img }>
                <img src={`./images/${imagePath}.png`} alt={title} />
            </div>
        </div>
        )
    }
    return (
        <div className={ `${styles["hero-flex"]}`}>
            <div className={ styles.img }>
                <img src={`./images/${imagePath}.png`} alt={title} />
            </div>
            <div className={ `${bg && styles.bg} ${styles.text}` }>
                {title && <Title bg={bg} left={true} col={true}>{title}</Title>}
                {children}
            </div>
        </div>
    )
}