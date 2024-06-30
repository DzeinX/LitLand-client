import {MarkingBook} from "./MarkingBook"
import {BookPurchase} from "./BookPurchase"
import {BookCover} from "./BookCover"
import {BookStorageStatus} from "./BookStorageStatus"

export const BookPurchaseOffer = ({book, cartReducer, setCartLength}) => {
    return <div className="purchase-offer">
        <BookCover book={book} size="large"/>
        <BookPurchase book={book} cartReducer={cartReducer} setCartLength={setCartLength}/>
        <BookStorageStatus book={book}/>
        <MarkingBook book={book}/>
    </div>
}