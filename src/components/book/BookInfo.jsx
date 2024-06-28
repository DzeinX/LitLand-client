import {BookPurchaseOffer} from "./BookPurchaseOffer"
import {BookMainInfo} from "./BookMainInfo"
import {BookDescription} from "./BookDescription"
import {BookDetails} from "./BookDetails"

export const BookInfo = ({book}) => {
    return <div className="book-info">
        <div className="sticky-panel">
            <BookPurchaseOffer book={book}/>
        </div>
        <div className="book-info-content">
            <BookMainInfo book={book}/>
            <BookDescription book={book}/>
            <BookDetails book={book}/>
        </div>
    </div>
}