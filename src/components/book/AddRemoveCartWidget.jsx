import {RemoveOneBookFromTheCart} from "./RemoveOneBookFromTheCart";
import {AddOneBookInTheCart} from "./AddOneBookInTheCart";
import {RemoveBookFromTheCart} from "./RemoveBookFromTheCart";

export const AddRemoveCartWidget = ({book, cart, cartReducer, setCart, setCartLength, setFullPrice}) => {
    return <div className="amount-controll">
        <RemoveOneBookFromTheCart
            book={book}
            cartReducer={cartReducer}
            setCart={setCart}
            cart={cart}
            setCartLength={setCartLength}
            setFullPrice={setFullPrice}
        />
        <span>{cart.amount}</span>
        <AddOneBookInTheCart
            book={book}
            cartReducer={cartReducer}
            setCart={setCart}
            setFullPrice={setFullPrice}
        />
        <RemoveBookFromTheCart
            book={book}
            cartReducer={cartReducer}
            setCart={setCart}
            setCartLength={setCartLength}
            setFullPrice={setFullPrice}
        />
    </div>
}