import styles from './TypingIndicator.module.css';

export const TypingIndicator = () => {
    return (
        <div className={styles.typing-indicator} {...props}>
            <span className={styles.typing-indicator__dot}></span>
            <span className={styles.typing-indicator__dot}></span>
            <span className={styles.typing-indicator__dot}></span>
        </div>
    )
}