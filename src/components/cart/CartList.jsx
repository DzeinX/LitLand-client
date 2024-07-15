import {BookAmountControl} from "../book/BookAmountControl";
import {useSelector} from "react-redux";

export const CartList = ({setCartLength, setFullPrice, setMessage, setTypeMessage}) => {
    const cartReducer = useSelector(state => state.cartReducer)

    return <div>
        {
            cartReducer.map((book, key) => {
                return <BookAmountControl
                    key={key}
                    book={book}
                    setCartLength={setCartLength}
                    setFullPrice={setFullPrice}
                    setMessage={setMessage}
                    setTypeMessage={setTypeMessage}
                    index={key}
                />
            })
        }
    </div>
}