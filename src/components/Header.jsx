import {memo} from "react";
import styles from "../static/css/Header.module.css"
import {IoCartOutline} from "react-icons/io5"
import { PiSmileySticker } from "react-icons/pi"

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
                <a title="Корзина" href="/cart">
                    <div className={styles["cart"]}>
                        <IoCartOutline size="20" className={styles["no-absolute"]}/>
                        {cartLength >= 10
                            ? <PiSmileySticker color="#fff" size="16"/>
                            : cartLength === 0
                                ? null
                                : <div className={styles["cart-length"]}>{cartLength}</div>
                        }
                    </div>
                </a>
            </div>
            : <a href="/auth">Войти</a>
        }
    </header>
})