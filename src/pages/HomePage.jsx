import {ListBooks} from "../components/book/ListBooks"
import {Header} from "../components/Header";
import {useSelector} from "react-redux";
import styles from "../static/css/Page.module.css";

export const HomePage = () => {
    const cartReducer = useSelector(state => state.cartReducer)

    return <div className={styles["page"]}>
        <Header cartLength={cartReducer.length}/>
        <ListBooks/>
    </div>
}