import {memo} from "react";
import styles from "../static/css/Header.module.css"

export const Header = memo(({cartLength}) => {
    return <header className={styles["header"]}>
        <a href="/">Книги</a>
        <a href="/employee/add-book">Добавить книгу</a>
        <a href="/cart">Корзина{cartLength === 0 ? " " : " (" + cartLength + ")"}</a>
    </header>
})