import {getReadableLanguage} from "../../helpers/getReadableLanguage"
import {useSelector} from "react-redux"

export const BookDetails = ({book}) => {
    const languageReducer = useSelector(state => state.languageReducer)

    return <div className="details">
        <div className="title">Подробности</div>
        <ul className="details-list">
            {book.language && <li className="list-entry">Язык: {getReadableLanguage(book.language, languageReducer)}</li>}
            {book.pages && <li className="list-entry">Количество страниц: {book.pages}</li>}
            {book.ISBNNumber && <li className="list-entry">Номер ISBN: {book.ISBNNumber}</li>}
            {book.publicationYear && <li className="list-entry">Год издания: {book.publicationYear}</li>}
            {book.publisher && <li className="list-entry">Издательство: {book.publisher}</li>}
            {book.genre && <li className="list-entry">Жанр: {book.genre}</li>}
        </ul>
    </div>
}