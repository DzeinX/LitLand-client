import styles from "../../static/css/BookPurchase.module.css"
import {FirstInTheCart} from "./FirstInTheCart"
import {AddRemoveCartWidget} from "./AddRemoveCartWidget"
import {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import {useParams} from "react-router-dom"

export const CartButtons = ({book, setCartLength, setMessage, setTypeMessage}) => {
    const [cart, setCart] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const cartReducer = useSelector(state => state.cartReducer)
    const hash = useParams().hash

    useEffect(() => {
        for (const bookInCart of cartReducer) {
            if (bookInCart.hash === hash) {
                setCart(bookInCart)
                break
            }
        }
    }, [cartReducer, hash])

    if (cart === null && !isLoading) return <div className={styles["buttons"]}>
        <FirstInTheCart
            setCart={setCart}
            setCartLength={setCartLength}
            setMessage={setMessage}
            setTypeMessage={setTypeMessage}
            setIsLoading={setIsLoading}
        />
    </div>

    return <div className={styles["buttons"]}>
        <AddRemoveCartWidget
            hash={hash}
            setCart={setCart}
            cart={(cart === null ? book : cart)}
            setCartLength={setCartLength}
            setFullPrice={() => {}}
            setMessage={setMessage}
            setTypeMessage={setTypeMessage}
        />
    </div>
}