import {useState} from "react"
import {AddRemoveCartWidget} from "./AddRemoveCartWidget"

export const BookAmountControl = ({book, cartReducer, setCartLength, setFullPrice}) => {
    const [cart, setCart] = useState(book)

    return <div className="book-purchase">
        <AddRemoveCartWidget
            book={book}
            cartReducer={cartReducer}
            setCart={setCart}
            cart={cart}
            setCartLength={setCartLength}
            setFullPrice={setFullPrice}
        />
    </div>
}