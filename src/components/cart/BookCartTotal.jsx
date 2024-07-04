import styles from "../../static/css/BookAmountControl.module.css";

export const BookCartTotal = ({book}) => {
    if (book.amount > 1) return <div className={styles["book-total"]}>
        <div>
            {book.amount + " × " + book.price + " = "}
            <span>{book.amount * book.price} руб</span>
        </div>
    </div>

    return <div className={styles["book-total"]}>
        <div><span>{book.amount * book.price} руб</span></div>
    </div>
        }