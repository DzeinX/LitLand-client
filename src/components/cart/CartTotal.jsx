import styles from "../../static/css/Page.module.css";
import {useSelector} from "react-redux";

export const CartTotal = ({fullPrice}) => {
    const cartReducer = useSelector(state => state.cartReducer)

    return <div className={styles["total"]}
                style={{fontSize: "1.5rem", textAlign: "right", marginTop: "40px", fontWeight: "bold"}}>
        {cartReducer.length === 0 && "Вы ещё не выбрали книги"}
        {cartReducer.length !== 0 && ("ИТОГО " + fullPrice + " руб")}
    </div>
}