export const BookMainInfo = ({book}) => {
    return <div className="book-main-info">
        <div className="book-name">{book.name}</div>
        <div className="book-authors">{book.authors}</div>
        <div className="book-rating">{book.rating}</div>
    </div>
}