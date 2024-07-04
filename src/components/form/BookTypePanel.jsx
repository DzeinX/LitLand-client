import styles from "../../static/css/AddBookForm.module.css";
import {DigitalType} from "./DigitalType";
import {PhysicalType} from "./PhysicalType";

export const BookTypePanel = ({bookTypeVisibility, bookType, setBookType}) => {
    if (!bookTypeVisibility) return null

    return <div className={styles["book-types"]}>
        <div className={styles["types"]}>
            <DigitalType setBookType={setBookType} bookType={bookType} />
            <PhysicalType setBookType={setBookType} bookType={bookType} />
        </div>
    </div>
}