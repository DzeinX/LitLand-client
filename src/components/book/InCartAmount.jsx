import styles from "../../static/css/AddRemoveCartWidget.module.css";
import {Preloader} from "../Preloader";

export const InCartAmount = ({isLoading, amount}) => {
    if (isLoading) return <div className={styles["amount"]} title={"Загрузка..."}>
        <Preloader size={"small"} color={"#fff"}/>
    </div>

    return <div className={styles["amount"]} title={"Сейчас в корзине " + amount + " шт"}>{amount}</div>
}