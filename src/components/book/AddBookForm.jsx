import {useRef, useState} from "react";
import {AddDigitalBook} from "./AddDigitalBook";
import {AddPhysicalBook} from "./AddPhysicalBook";
import styles from "../../static/css/AddBookForm.module.css"

export const AddBookForm = ({setMessage, setTypeMessage}) => {
    const bookHash = useRef("")
    const [bookType, setBookType] = useState(0);
    const [bookTypeVisibility, setBookTypeVisibility] = useState(true);

    return <div className={styles["add-book-form"]}>
        {bookTypeVisibility && <div className={styles["book-types"]}>
            <div className={styles["types"]}>
                <label className={styles["type"] + " " + (bookType === 0 ? styles["active"] : "")}>
                    <input
                        checked={bookType === 0}
                        onClick={() => setBookType(0)}
                        type="radio"
                        name="book-type"
                        hidden={true}
                    /> Электронная
                </label>
                <label className={styles["type"] + " " + (bookType === 1 ? styles["active"] : "")}>
                    <input
                        checked={bookType === 1}
                        onClick={() => setBookType(1)}
                        type="radio"
                        name="book-type"
                        hidden={true}
                    /> Физическая
                </label>
            </div>
        </div>}
        <div className={styles["form-container"]}>
            {bookType === 0 && <AddDigitalBook
                setMessage={setMessage}
                bookHash={bookHash}
                setBookTypeVisibility={setBookTypeVisibility}
                setTypeMessage={setTypeMessage}
            />}
            {bookType === 1 && <AddPhysicalBook
                setMessage={setMessage}
                bookHash={bookHash}
                setBookTypeVisibility={setBookTypeVisibility}
                setTypeMessage={setTypeMessage}
            />}
        </div>
    </div>
}