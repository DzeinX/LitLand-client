import React from "react"
import styles from "../static/css/Page.module.css";

export const NotFoundPage = () => {
    return <div className={styles["page"]}>
        <h1>Упс, мы не смогли это найти...</h1>
        <a href="/">На главную страницу</a>
    </div>
}