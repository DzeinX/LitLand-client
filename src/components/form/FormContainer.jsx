import styles from "../../static/css/AddBookForm.module.css"
import {AddDigitalBook} from "../book/AddDigitalBook"
import {AddPhysicalBook} from "../book/AddPhysicalBook"

export const FormContainer = ({bookType, setMessage, setBookTypeVisibility, setTypeMessage}) => {
    if (bookType === 0) return <div className={styles["form-container"]}>
        <AddDigitalBook
            setMessage={setMessage}
            setBookTypeVisibility={setBookTypeVisibility}
            setTypeMessage={setTypeMessage}
        />
    </div>

    if (bookType === 1) return <div className={styles["form-container"]}>
        <AddPhysicalBook
            setMessage={setMessage}
            setBookTypeVisibility={setBookTypeVisibility}
            setTypeMessage={setTypeMessage}
        />
    </div>

    return null
}