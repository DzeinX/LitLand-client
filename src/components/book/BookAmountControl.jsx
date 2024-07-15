import styles from "../../static/css/BookAmountControl.module.css"
import {BookCartImage} from "../cart/BookCartImage"
import {BookCartInfo} from "../cart/BookCartInfo";

export const BookAmountControl = ({book, setCartLength, setFullPrice, setMessage, setTypeMessage, index}) => {
    return <div className={styles["book-purchase"]} style={{"--delay": index * 0.1 + "s"}}>
        <BookCartImage book={book} />
        <BookCartInfo
            book={book}
            setCartLength={setCartLength}
            setFullPrice={setFullPrice}
            setMessage={setMessage}
            setTypeMessage={setTypeMessage}
        />
    </div>
}