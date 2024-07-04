import {memo, useState} from "react"
import {useSelector} from "react-redux"
import {PageWrap} from "../components/PageWrap"
import {BookView} from "../components/book/BookView"
import styles from "../static/css/Page.module.css";

export const BookPage = memo(() => {
    const cartReducer = useSelector(state => state.cartReducer)
    const [cartLength, setCartLength] = useState(cartReducer.length)

    return <div className={styles["page"]}>
        <PageWrap cartLength={cartLength}>
            <BookView setCartLength={setCartLength}/>
        </PageWrap>
    </div>
})