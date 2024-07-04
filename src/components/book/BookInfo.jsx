import {BookPurchaseOffer} from "./BookPurchaseOffer"
import {BookMainInfo} from "./BookMainInfo"
import {BookDescription} from "./BookDescription"
import {BookDetails} from "./BookDetails"
import styles from "../../static/css/BookInfo.module.css"
import {MessageToUser} from "../MessageToUser"
import {useMessage} from "../../hooks/useMessage"

export const BookInfo = ({book, setCartLength}) => {
    const {message, setMessage, typeMessage, setTypeMessage} = useMessage()

    return <div className={styles["book-info"]}>
        <MessageToUser message={message} setMessage={setMessage} type={typeMessage}/>
        <div className={styles["sticky-panel"]}>
            <BookPurchaseOffer
                book={book}
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