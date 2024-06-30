import {useEffect, useState} from "react"
import {FirstInTheCart} from "./FirstInTheCart"
import {AddRemoveCartWidget} from "./AddRemoveCartWidget"
import styles from "../../static/css/BookPurchase.module.css"

export const BookPurchase = ({book, cartReducer, setCartLength, setMessage, setTypeMessage}) => {
    const [cart, setCart] = useState(null)

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
        {cart === null && <FirstInTheCart
            book={book}
            cartReducer={cartReducer}
            setCart={setCart}
            setCartLength={setCartLength}
            setFullPrice={() => {}}
            setMessage={setMessage}
            setTypeMessage={setTypeMessage}
        />}
        {cart !== null && <AddRemoveCartWidget
            book={book}
            cartReducer={cartReducer}
            setCart={setCart}
            cart={cart}
            setCartLength={setCartLength}
            setFullPrice={() => {}}
            setMessage={setMessage}
            setTypeMessage={setTypeMessage}
        />}
        {/*<button type="button">Добавить в корзину</button>*/}
    </div>
}