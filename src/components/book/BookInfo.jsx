import {BookPurchaseOffer} from "./BookPurchaseOffer"
import {BookMainInfo} from "./BookMainInfo"
import {BookDescription} from "./BookDescription"
import {BookDetails} from "./BookDetails"
import styles from "../../static/css/BookInfo.module.css"
import {MessageToUser} from "../MessageToUser";
import {useState} from "react";

export const BookInfo = ({book, cartReducer, setCartLength}) => {
    const [message, setMessage] = useState("");
    const [typeMessage, setTypeMessage] = useState("warning");

    return <div className={styles["book-info"]}>
        <MessageToUser message={message} setMessage={setMessage} type={typeMessage}/>

        <div className={styles["sticky-panel"]}>
            <BookPurchaseOffer
                book={book}
                cartReducer={cartReducer}
                setCartLength={setCartLength}
                setMessage={setMessage}
                setTypeMessage={setTypeMessage}
            />
        </div>
        <div className={styles["book-info-content"]}>
            <BookMainInfo book={book}/>
            <BookDescription book={book}/>
            <BookDetails book={book}/>
        </div>
    </div>
}