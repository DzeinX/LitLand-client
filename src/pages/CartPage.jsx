import {Header} from "../components/Header"
import {useSelector} from "react-redux"
import {useState} from "react"
import {BookAmountControl} from "../components/book/BookAmountControl";

export const CartPage = () => {
    const cartReducer = useSelector(state => state.cartReducer)
    const [cartLength, setCartLength] = useState(cartReducer.length)
    const [fullPrice, setFullPrice] = useState(() => {
        let sum = 0;
        for (const book of cartReducer) {
            sum += book.price * book.amount
        }
        return sum
    })

    return <div>
        <Header cartLength={cartLength}/>
        {
            cartReducer.map((book, index) => {
                return <div className="cart-entry" key={index}>
                    <a href={"/book/" + book.hash}>
                        <span>{book.name}</span> | <span>{book.authors}</span> | <span>{book.price}</span>
                    </a>
                    <BookAmountControl
                        book={book}
                        cartReducer={cartReducer}
                        setCartLength={setCartLength}
                        setFullPrice={setFullPrice}
                    />
                </div>
            })
        }
        ИТОГО {fullPrice} руб
    </div>
}