import styles from "../static/css/MessageToUser.module.css"
import {useState} from "react";

export const MessageToUser = ({message, setMessage, type}) => {
    const [closeStyle, setCloseStyle] = useState(false)

    const close = () => {
        setCloseStyle(true)
        setTimeout(() => {
            setMessage("")
            setCloseStyle(false);
        }, 800)
    }

    return <>
        {
            message !== "" && <div className={styles["message"] + " " + styles[type] + " " + " " + (closeStyle ? styles["close"] : "")}>
                <div className={styles["message-box"]} onClick={close}>
                    <div className={styles["cross"]}>×</div>
                    <div className={styles["text"]}>{message}</div>
                </div>
            </div>
        }
    </>
}