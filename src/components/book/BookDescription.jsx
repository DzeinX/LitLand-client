import styles from "../../static/css/BookDescription.module.css"
import { MdOutlineDescription } from "react-icons/md"

export const BookDescription = ({book}) => {
    return <div className={styles["book-description"]}>
        {
            book.description && <div className={styles["description"]}>
                <div className={styles["title"]}>
                    <MdOutlineDescription />
                    Описание книги
                </div>
                <div className={styles["content"]}>{book.description}</div>
            </div>
        }
    </div>
}