import {MarkingBook} from "./MarkingBook"
import {BookPurchase} from "./BookPurchase"
import {BookCover} from "./BookCover"
import {BookStorageStatus} from "./BookStorageStatus"
import styles from "../../static/css/BookPurchaseOffer.module.css"

export const BookPurchaseOffer = ({book, cartReducer, setCartLength, setMessage, setTypeMessage}) => {
    return <div className={styles["purchase-offer"]}>
        <BookCover
            book={book}
            size="large"
        />
        <BookPurchase
            book={book}
            cartReducer={cartReducer}
            setCartLength={setCartLength}
            setMessage={setMessage}
            setTypeMessage={setTypeMessage}
        />
        <BookStorageStatus
            book={book}
        />
        <MarkingBook
            book={book}
        />
    </div>
}