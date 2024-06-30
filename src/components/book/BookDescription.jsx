import styles from "../../static/css/BookDescription.module.css"

export const BookDescription = ({book}) => {
    return <div className={styles["book-description"]}>
        {
            book.description && <div className={styles["description"]}>
                <div className={styles["title"]}>Описание книги</div>
                <div className={styles["content"]}>{book.description}</div>
            </div>
        }
    </div>
}