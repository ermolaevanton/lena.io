import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './style/Navigation.module.css';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';

export function Navigation() {
    const [isOpenNav, setIsOpenNav] = useState(false);
    const toggleMenu = () => setIsOpenNav(!isOpenNav);

    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const openLogin = () => setIsOpenLogin(true);
    const closeLogin = () => setIsOpenLogin(false);

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <nav className={styles.navigation}>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
            <ul className={`${styles.navList} ${isOpenNav ? styles.navListOpen : ''}`}>
                <li className={styles.link}>
                    <NavLink to='courses'>Курсы</NavLink>
                </li>
                <li className={styles.link}>
                    <NavLink to='contacts'>Контакты</NavLink>
                </li>
                <button onClick={openLogin}>Вход</button>
                <button onClick={openModal}>Регистрация</button>
                <Login isOpen={isOpenLogin} onRequestClose={closeLogin} />
                <Register isOpen={isOpen} onRequestClose={closeModal} />
            </ul>
        </nav>
    );
}