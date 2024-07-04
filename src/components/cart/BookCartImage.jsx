import styles from "../../static/css/BookAmountControl.module.css";
import {BookCoverImage} from "../book/BookCoverImage";
import {useNavigate} from "react-router-dom";

export const BookCartImage = ({book}) => {
    const navigate = useNavigate()

    return <div className={styles["image"]} onClick={() => navigate("/book/" + book.hash)}>
        <BookCoverImage book={book}/>
    </div>
}