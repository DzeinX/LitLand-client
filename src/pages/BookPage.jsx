import {memo, useState} from "react"
import {useSelector} from "react-redux"
import {PageWrap} from "../components/PageWrap"
import {BookView} from "../components/book/BookView"
import styles from "../static/css/Page.module.css";
import {useAuth} from "../hooks/useAuth";

export const BookPage = memo(() => {
    const cartReducer = useSelector(state => state.cartReducer)
    const [cartLength, setCartLength] = useState(cartReducer.length)
    const local = useAuth(false)

    return <div className={styles["page"]}>
        <PageWrap cartLength={cartLength} local={local}>
            <BookView setCartLength={setCartLength}/>
        </PageWrap>
    </div>
})