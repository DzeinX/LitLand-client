import {getReadableLanguage} from "../../helpers/getReadableLanguage"
import {useSelector} from "react-redux"
import styles from "../../static/css/BookDetails.module.css"

export const BookDetails = ({book}) => {
    const languageReducer = useSelector(state => state.languageReducer)

    return <div className={styles["details"]}>
        <div className={styles["title"]}>Подробности</div>
        <div className={styles["details-list"]}>
            {book.language && <div className={styles["list-entry"]}>
                <div className={styles["left"]}>Язык</div>
                <div className={styles["right"]}>{getReadableLanguage(book.language, languageReducer)}</div>
            </div>}
            {book.pages && <div className={styles["list-entry"]}>
                <div className={styles["left"]}>Количество страниц</div>
                <div className={styles["right"]}>{book.pages}</div>
            </div>}
            {book.isbnnumber && <div className={styles["list-entry"]}>
                <div className={styles["left"]}>Номер ISBN</div>
                <div className={styles["right"]}>{book.isbnnumber}</div>
            </div>}
            {book.publicationYear && <div className={styles["list-entry"]}>
                <div className={styles["left"]}>Год издания</div>
                <div className={styles["right"]}>{book.publicationYear}</div>
            </div>}
            {book.publisher && <div className={styles["list-entry"]}>
                <div className={styles["left"]}>Издательство</div>
                <div className={styles["right"]}>{book.publisher}</div>
            </div>}
            {book.genre && <div className={styles["list-entry"]}>
                <div className={styles["left"]}>Жанр</div>
                <div className={styles["right"]}>{book.genre}</div>
            </div>}
        </div>
    </div>
}