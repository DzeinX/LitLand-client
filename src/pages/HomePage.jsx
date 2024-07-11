import {ListBooks} from "../components/book/ListBooks"
import {useSelector} from "react-redux"
import styles from "../static/css/Page.module.css"
import {PageWrap} from "../components/PageWrap"
import {useAuth} from "../hooks/useAuth"

export const HomePage = () => {
    const cartReducer = useSelector(state => state.cartReducer)
    const local = useAuth(false)

    return <div className={styles["page"]}>
        <PageWrap cartLength={cartReducer.length} local={local}>
            <ListBooks/>
        </PageWrap>
    </div>
}