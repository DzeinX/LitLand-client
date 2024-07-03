import {useState} from "react"
import {AddRemoveCartWidget} from "./AddRemoveCartWidget"
import styles from "../../static/css/BookAmountControl.module.css"

export const BookAmountControl = ({book, cartReducer, setCartLength, setFullPrice, setMessage, setTypeMessage}) => {
    const [cart, setCart] = useState(book)
    const [isLoading, setIsLoading] = useState(false)

    return <div className={styles["book-purchase"]}>
        <a href={"/book/" + book.hash}>
            <div>{book.name}</div>
            <div>{book.authors}</div>
        </a>
        <div className={styles["amount-controller"]}>
            <div className={styles["widget"]}>
                <AddRemoveCartWidget
                    book={book}
                    cartReducer={cartReducer}
                    setCart={setCart}
                    cart={(cart === null ? book : cart)}
                    setCartLength={setCartLength}
                    setFullPrice={setFullPrice}
                    setMessage={setMessage}
                    setTypeMessage={setTypeMessage}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
            </div>
            <div className={styles["book-total"]}>
                <div>{(book.amount > 1 ? (book.amount + " × " + book.price + " = ") : "")}<span>{book.amount * book.price} руб</span></div>
            </div>
        </div>
    </div>
}