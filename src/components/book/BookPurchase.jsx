import styles from "../../static/css/BookPurchase.module.css"
import {CartButtons} from "./CartButtons"

export const BookPurchase = ({book, setCartLength, setMessage, setTypeMessage}) => {
    return <div className={styles["book-purchase"]}>
        <div className={styles["price"]}>
            {book.price} ₽
        </div>
        <CartButtons
            book={book}
            setCartLength={setCartLength}
            setMessage={setMessage}
            setTypeMessage={setTypeMessage}
        />
    </div>
}