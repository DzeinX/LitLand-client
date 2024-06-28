export const BookCover = ({size, book}) => {
    return <div className={"book-cover " + size}>
        <img src="#" alt="Обложка"/>
        <span className="is-new">{book.isNew ? "Новинка" : ""}</span>
    </div>
}