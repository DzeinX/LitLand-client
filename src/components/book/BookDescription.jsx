export const BookDescription = ({book}) => {
    return <div className="book-description">
        {
            book.description && <div className="description">
                <div className="title">Описание книги</div>
                <div className="content">{book.description}</div>
            </div>
        }
    </div>
}