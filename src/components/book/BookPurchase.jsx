import {useEffect, useState} from "react"
import {FirstInTheCart} from "./FirstInTheCart"
import {AddRemoveCartWidget} from "./AddRemoveCartWidget"

export const BookPurchase = ({book, cartReducer, setCartLength}) => {
    const [cart, setCart] = useState(null)

    useEffect(() => {
        for (const bookInCart of cartReducer) {
            if (bookInCart.hash === book.hash) {
                setCart(bookInCart)
                break
            }
        }
    }, [book.hash, cartReducer]);

    return <div className="book-purchase">
        {cart === null && <FirstInTheCart
            book={book}
            cartReducer={cartReducer}
            setCart={setCart}
            setCartLength={setCartLength}
            setFullPrice={() => {}}
        />}
        {cart !== null && <AddRemoveCartWidget
            book={book}
            cartReducer={cartReducer}
            setCart={setCart}
            cart={cart} setCartLength={setCartLength}
            setFullPrice={() => {}}
        />}
        {/*<button type="button">Добавить в корзину</button>*/}
    </div>
}