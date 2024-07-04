import {useState} from "react";
import styles from "../../static/css/AddBookForm.module.css"
import {BookTypePanel} from "../form/BookTypePanel";
import {FormContainer} from "../form/FormContainer";

export const AddBookForm = ({setMessage, setTypeMessage}) => {
    const [bookType, setBookType] = useState(0);
    const [bookTypeVisibility, setBookTypeVisibility] = useState(true);

    return <div className={styles["add-book-form"]}>
        <BookTypePanel
            bookTypeVisibility={bookTypeVisibility}
            bookType={bookType}
            setBookType={setBookType}
        />
        <FormContainer
            bookType={bookType}
            setMessage={setMessage}
            setTypeMessage={setTypeMessage}
            setBookTypeVisibility={setBookTypeVisibility}
        />
    </div>
}