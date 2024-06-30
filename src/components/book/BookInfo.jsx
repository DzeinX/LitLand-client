import {BookPurchaseOffer} from "./BookPurchaseOffer"
import {BookMainInfo} from "./BookMainInfo"
import {BookDescription} from "./BookDescription"
import {BookDetails} from "./BookDetails"

export const BookInfo = ({book, cartReducer, setCartLength}) => {
    return <div className="book-info">
        <div className="sticky-panel">
            <BookPurchaseOffer book={book} cartReducer={cartReducer} setCartLength={setCartLength}/>
        </div>
        <div className="book-info-content">
            <BookMainInfo book={book}/>
            <BookDescription book={book}/>
            <BookDetails book={book}/>
        </div>
    </div>
}