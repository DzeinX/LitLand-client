const WE_HAVE_NO_BOOKS = "Книг пока что нету"

export const NoBooksFound = () => {
    return <div className="no-books-found">
        <div>{WE_HAVE_NO_BOOKS}</div>
        <div className="solution">
            <a href="/employee/add-book">Добавить перую книгу</a>
        </div>
    </div>
}