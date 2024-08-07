import styles from "../../static/css/BookMainInfo.module.css"

export const BookMainInfo = ({book, bookRating}) => {
    return <div className={styles["book-main-info"]}>
        <div className={styles["book-name"]}>{book.name}</div>
        <div className={styles["book-authors"]}>{book.authors}</div>
        <div className={styles["book-rating"]} title={"Рейтинг этой книги " + bookRating}>{bookRating === null ? "Нет" : bookRating}</div>
    </div>
}