export const BookCard = ({book}) => {
    return <div className="book-card" style={{marginBottom: '30px'}}>
        <div className="name">Название: {book.name || "Нет"}</div>
        <div className="language">Язык: {book.language || "Нет"}</div>
        <div className="pages">Количеств страниц: {book.pages || "Нет"}</div>
        <div className="price">Цена: {book.price || "Нет"}</div>
        <div className="isNew">Новинка: {book.isNew ? "Да" : "Нет"}</div>
        <div className="storage-amount">На складе: {book.storageAmount || "Нет"}</div>
        <div className="description">Описание: {book.description || "Нет"}</div>
        <div className="file-name">Название файла: {book.fileName || "Нет"}</div>
        <div className="cover-name">Название обложки: {book.coverName || "Нет"}</div>
        <div className="publication-year">Год издания: {book.publicationYear || "Нет"}</div>
        <div className="rating">Рейтинг: {book.rating || "Нет"}</div>
        <div className="publisher">Издание: {book.publisher || "Нет"}</div>
        <div className="genre">Жанр: {book.genre || "Нет"}</div>
        <div className="authors">Автор: {book.authors === null ? "Не найден" : book.authors}</div>
        <div className="isbnnumber">Номер ISBN: {book.isbnnumber || "Нет"}</div>
    </div>
}