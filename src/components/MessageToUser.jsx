import styles from "../static/css/MessageToUser.module.css"
import {useEffect, useState} from "react"

export const MessageToUser = ({message, setMessage, type}) => {
    const [closeStyle, setCloseStyle] = useState(false)

    const close = () => {
        setCloseStyle(true)
        setTimeout(() => {
            setMessage("")
            setCloseStyle(false);
        }, 800)
    }

    useEffect(() => {
        if (message !== "") {
            setTimeout(() => {
                close()
            }, 2000)
        }
    }, [message]);

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