import {memo} from "react";
import styles from "../static/css/Header.module.css"

export const Header = memo(({cartLength, local}) => {
    // localStorage.clear()
    return <header className={styles["header"]}>
        <a href="/" title="Каталок книг"></a>
        {local.role === "ROLE_ADMIN"
            ? <a href="/employee/add-book">Добавить книгу</a>
            : null
        }

        {local.token !== null
            ? <div className={styles["line"]}>
                <a title="Профиль" href="/auth" style={{marginRight: "15px"}}>{local.sub}</a>
                <a title="Корзина" href="/cart">Корзина{cartLength === 0 ? " " : " (" + cartLength + ")"}</a>
            </div>
            : <a href="/auth">Войти</a>
        }
    </header>
})