import {Preloader} from "../Preloader"
import styles from "../../static/css/SubmitButton.module.css"

export const SubmitButton = ({isLoading, children}) => {
    if (isLoading) return <button type="submit">
        <Preloader size={"small"} color={"#fff"}/>
    </button>

    return <button type="submit" className={styles["submit-button"]}>{children}</button>
}