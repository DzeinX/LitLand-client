import {useEffect, useState} from "react"
import {FirstInTheCart} from "./FirstInTheCart"
import {AddRemoveCartWidget} from "./AddRemoveCartWidget"
import styles from "../../static/css/BookPurchase.module.css"

export const BookPurchase = ({book, cartReducer, setCartLength, setMessage, setTypeMessage}) => {
    const [cart, setCart] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        for (const bookInCart of cartReducer) {
            if (bookInCart.hash === book.hash) {
                setCart(bookInCart)
                break
            }
        }
    }, [book.hash, cartReducer]);

    return <div className={styles["book-purchase"]}>
        <div className={styles["price"]}>
            {book.price} ₽
        </div>
        <div className={styles["buttons"]}>
            {(cart === null && !isLoading) && <FirstInTheCart
                book={book}
                cartReducer={cartReducer}
                setCart={setCart}
                setCartLength={setCartLength}
                setFullPrice={() => {}}
                setMessage={setMessage}
                setTypeMessage={setTypeMessage}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />}
            {(cart !== null || isLoading) && <AddRemoveCartWidget
                book={book}
                cartReducer={cartReducer}
                setCart={setCart}
                cart={cart}
                setCartLength={setCartLength}
                setFullPrice={() => {}}
                setMessage={setMessage}
                setTypeMessage={setTypeMessage}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />}
        </div>
    </div>
}