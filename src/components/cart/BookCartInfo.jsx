import styles from "../../static/css/BookAmountControl.module.css"
import {BookCartInfoName} from "./BookCartInfoName"
import {BookCartAmountController} from "./BookCartAmountController"

export const BookCartInfo = ({book, setCartLength, setFullPrice, setMessage, setTypeMessage}) => {
    return <div className={styles["info"]}>
        <BookCartInfoName book={book}/>
        <BookCartAmountController
            book={book}
            setCartLength={setCartLength}
            setFullPrice={setFullPrice}
            setMessage={setMessage}
            setTypeMessage={setTypeMessage}
        />
    </div>
}