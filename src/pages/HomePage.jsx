import {ListBooks} from "../components/book/ListBooks"
import {useSelector} from "react-redux"
import styles from "../static/css/Page.module.css"
import {PageWrap} from "../components/PageWrap"

export const HomePage = () => {
    const cartReducer = useSelector(state => state.cartReducer)

    return <div className={styles["page"]}>
        <PageWrap cartLength={cartReducer.length}>
            <ListBooks/>
        </PageWrap>
    </div>
}