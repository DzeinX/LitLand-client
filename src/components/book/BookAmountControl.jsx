import {useState} from "react"
import {AddRemoveCartWidget} from "./AddRemoveCartWidget"

export const BookAmountControl = ({book, cartReducer, setCartLength, setFullPrice, setMessage, setTypeMessage}) => {
    const [cart, setCart] = useState(book)

    return <div className="book-purchase">
            <a href={"/book/" + book.hash}>
                <span>{book.name}</span> | <span>{book.authors}</span> | <span>{book.price}</span>
            </a>
            <AddRemoveCartWidget
                book={book}
                cartReducer={cartReducer}
                setCart={setCart}
                cart={(cart === null ? book : cart)}
                setCartLength={setCartLength}
                setFullPrice={setFullPrice}
                setMessage={setMessage}
                setTypeMessage={setTypeMessage}
            />
    </div>
}