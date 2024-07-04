import {getReadableLanguage} from "../../helpers/getReadableLanguage";
import {getReadableStorageStatus} from "../../helpers/getReadableStorageStatus";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export const TableBooksEntry = ({book}) => {
    const languageReducer = useSelector(state => state.languageReducer)
    const navigate = useNavigate()

    return <tr className="book-card"
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
}