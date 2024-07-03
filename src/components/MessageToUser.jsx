import styles from "../static/css/MessageToUser.module.css"
import {useCallback, useEffect, useState} from "react"

export const MessageToUser = ({message, setMessage, type}) => {
    const [closeStyle, setCloseStyle] = useState(false)

    const close = useCallback(() => {
        setCloseStyle(true)
        setTimeout(() => {
            setMessage("")
            setCloseStyle(false);
        }, 800)
    }, [setMessage])

    useEffect(() => {
        if (message !== "") {
            setTimeout(() => {
                close()
            }, 2000)
        }
    }, [message, close]);

    return <>
        {
            message !== "" && <div className={styles["message"]
                + " " + styles[type] + " "
                + " " + (closeStyle ? styles["close"] : "")}
            >
                <div className={styles["message-box"]} onClick={close}>
                    <div className={styles["cross"]}>×</div>
                    <div className={styles["text"]}>{message}</div>
                </div>
            </div>
        }
    </>
}