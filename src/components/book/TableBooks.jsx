import {useNavigate} from "react-router-dom"
import {getReadableStorageStatus} from "../../helpers/getReadableStorageStatus"
import {getReadableLanguage} from "../../helpers/getReadableLanguage"
import {useSelector} from "react-redux"


export const TableBooks = ({books}) => {
    const languageReducer = useSelector(state => state.languageReducer)
    const navigate = useNavigate()

    return <table style={{border: '1px solid #ccc', width: '100%', borderCollapse: 'collapse'}}>
        <thead style={{backgroundColor: 'goldenrod', color: 'white'}}>
        <tr style={{height: "30px"}}>
            <th>Название</th>
            <th>Язык</th>
            <th>Количество страниц</th>
            <th>Цена</th>
            <th>Новинка</th>
            <th>Статус книги</th>
            <th>Описание</th>
            <th>Год издания</th>
            <th>Рейтинг</th>
            <th>Издание</th>
            <th>Жанр</th>
            <th>Автор</th>
            <th>Номер ISBN</th>
        </tr>
        </thead>
        <tbody>
        {books.map(book => {
            return <tr className="book-card"
                       key={book.hash}
                       style={{
                           height: "40px",
                           cursor: "pointer"
                       }}
                       onClick={() => navigate("/book/" + book.hash)}
            >
                <td className="name" style={{padding: "5px 10px"}}>{book.name || "Нет"}</td>
                <td className="language"
                    style={{padding: "5px 10px"}}>{getReadableLanguage(book.language, languageReducer)}</td>
                <td className="pages" style={{padding: "5px 10px"}}>{book.pages || "Нет"}</td>
                <td className="price" style={{padding: "5px 10px"}}>{book.price || "Нет"}</td>
                <td className="isNew" style={{padding: "5px 10px"}}>{book.isNew ? "Да" : "Нет"}</td>
                <td className="storage-amount"
                    style={{padding: "5px 10px"}}>{getReadableStorageStatus(book.storageStatus)}</td>
                <td className="description" style={{padding: "5px 10px"}}>{book.description || "Нет"}</td>
                <td className="publication-year" style={{padding: "5px 10px"}}>{book.publicationYear || "Нет"}</td>
                <td className="rating" style={{padding: "5px 10px"}}>{book.rating || "Нет"}</td>
                <td className="publisher" style={{padding: "5px 10px"}}>{book.publisher.name || "Нет"}</td>
                <td className="genre" style={{padding: "5px 10px"}}>{book.genre.name || "Нет"}</td>
                <td className="authors"
                    style={{padding: "5px 10px"}}>{book.authors === null ? "Не найден" : book.authors}</td>
                <td className="isbnnumber" style={{padding: "5px 10px"}}>{book.isbnnumber || "Нет"}</td>
            </tr>
        })}
        </tbody>
    </table>
}
