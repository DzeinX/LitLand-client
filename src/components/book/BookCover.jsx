import styles from "../../static/css/BookCover.module.css"
import {BookCoverImage} from "./BookCoverImage";

export const BookCover = ({size, book}) => {
    return <div className={styles["book-cover"] + " " + size + " " + (book.isNew ? styles["highlight"] : "")}>
        <BookCoverImage book={book}/>
    </div>
}