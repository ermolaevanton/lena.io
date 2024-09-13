import styles from './style/Register.module.css'

export function Register({ isOpen, onRequestClose }) {
    if (!isOpen) return null;

    return (
        <div className={styles.registerOverlay}>
            <div className={styles.registerContent}>
                <button className={styles.closeButton}
                    onClick={onRequestClose}>x</button>
                <h2>Регистрация</h2>
                <form>
                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        Пароль:
                        <input type="password" name="password" required />
                    </label>
                    <button type="submit">Регистрация</button>
                </form>

            </div>
        </div>
    );
}