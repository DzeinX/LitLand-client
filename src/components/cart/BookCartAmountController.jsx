import styles from "../../static/css/BookAmountControl.module.css";
import {AddRemoveCartWidget} from "../book/AddRemoveCartWidget";
import {BookCartTotal} from "./BookCartTotal";
import {useState} from "react";


export const BookCartAmountController = ({book, setCartLength, setFullPrice, setMessage, setTypeMessage}) => {
    const [cart, setCart] = useState(book)

    return <div className={styles["amount-controller"]}>
        <div className={styles["widget"]}>
            <AddRemoveCartWidget
                hash={book.hash}
                setCart={setCart}
                cart={(cart === null ? book : cart)}
                setCartLength={setCartLength}
                setFullPrice={setFullPrice}
                setMessage={setMessage}
                setTypeMessage={setTypeMessage}
            />
        </div>
        <BookCartTotal book={book} />
    </div>
}