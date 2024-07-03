import styles from "../static/css/Preloader.module.css"

export const Preloader = ({size, color}) => {
    return <div className={styles["root-preloader"]} style={{"--color": color}}>
        <div className={styles["preloader"] + " " + (size === null ? "" : styles[size])}>Lit</div>
        <div className={styles["dimming-film"]}></div>
    </div>
}