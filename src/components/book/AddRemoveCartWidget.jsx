import {RemoveOneBookFromTheCart} from "./RemoveOneBookFromTheCart"
import {AddOneBookInTheCart} from "./AddOneBookInTheCart"
import {RemoveBookFromTheCart} from "./RemoveBookFromTheCart"
import styles from "../../static/css/AddRemoveCartWidget.module.css"

export const AddRemoveCartWidget = ({book, cart, cartReducer, setCart, setCartLength, setFullPrice, setMessage, setTypeMessage}) => {
    return <div className={styles["amount-control"]}>
        <div className={styles["amount-widget"]}>
            <RemoveOneBookFromTheCart
                book={book}
                cartReducer={cartReducer}
                setCart={setCart}
                cart={cart}
                setCartLength={setCartLength}
                setFullPrice={setFullPrice}
                setMessage={setMessage}
                setTypeMessage={setTypeMessage}
            />
            <div className={styles["amount"]} title={"Сейчас в корзине " + cart.amount + " шт"}>{cart.amount}</div>
            <AddOneBookInTheCart
                book={book}
                cartReducer={cartReducer}
                setCart={setCart}
                setFullPrice={setFullPrice}
                setMessage={setMessage}
                setTypeMessage={setTypeMessage}
            />
        </div>
        <div className={styles["remove-widget"]}>
            <RemoveBookFromTheCart
                book={book}
                cartReducer={cartReducer}
                setCart={setCart}
                setCartLength={setCartLength}
                setFullPrice={setFullPrice}
                setMessage={setMessage}
                setTypeMessage={setTypeMessage}
            />
        </div>
    </div>
}