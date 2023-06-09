import styles from './HeroFlex.module.css'

export default function HeroFlex({imagePath, title, text, reverse}) {
    return (
        <div className={ styles["hero-flex"]}>
            <div className={ styles.img }>
                <img src={`./images/${imagePath}.png`} alt={title} />
            </div>
            <div className={ styles.text }>
                <h2>{title}</h2>
                {text}
            </div>
        </div>
    )
}