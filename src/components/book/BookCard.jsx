import {BookCoverImage} from "./BookCoverImage"
import {useNavigate} from "react-router-dom"
import styles from "../../static/css/BookCard.module.css"

export const BookCard = ({book}) => {
    const navigate = useNavigate()

    return <div
        className={styles["book-card"]}
        onClick={() => navigate("/book/" + book.hash)}
    >
        <div className={styles["image-box"]}>
            <BookCoverImage book={book}/>
        </div>
        <div className={styles["card-content"]}>
            <div className={styles["title"]}>{book.name}</div>
            <div className={styles["book-authors"]}>{book.authors}</div>
        </div>
    </div>
}