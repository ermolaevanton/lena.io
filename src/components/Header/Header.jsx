import classes from "./style/Header.module.css"
import { NavLink } from "react-router-dom"
import { Navigation } from "../Navigation/Navigation"

export function Header() {
    return (
        <header>
            <NavLink className={classes.logo} to="/">Logo</NavLink>
            <Navigation />
            {/* <nav className={classes.nav}>
                <ul className={classes.menu}>
                    <li>
                        <NavLink to='courses'>Курсы</NavLink>
                    </li>
                    <li>
                        <NavLink to='contacts'>Контакты</NavLink>
                    </li>
                    <li>
                        <NavLink to='account'>Личный кабинет</NavLink>
                    </li>
                </ul>
            </nav> */}
        </header>
    )
}