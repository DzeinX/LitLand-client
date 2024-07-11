import {useSelector} from "react-redux"
import {useState} from "react"
import styles from "../static/css/Page.module.css"
import {PageWrap} from "../components/PageWrap"
import {useAuth} from "../hooks/useAuth"
import {CartController} from "../components/cart/CartController"

export const CartPage = () => {
    const cartReducer = useSelector(state => state.cartReducer)
    const [cartLength, setCartLength] = useState(cartReducer.length)

    const local = useAuth(false)

    return <div className={styles["page"]}>
        <PageWrap cartLength={cartLength} local={local}>
            <CartController cartLength={cartLength} setCartLength={setCartLength}/>
        </PageWrap>
    </div>
}