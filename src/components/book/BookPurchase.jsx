export const BookPurchase = ({book}) => {
    return <div className="book-purchase">
        <button type="button">Купить за <span>{book.price}</span> рублей</button>
        <button type="button">Добавить в корзину</button>
    </div>
}