import styles from "../../static/css/AddBookForm.module.css";

export const DigitalType = ({bookType, setBookType}) => {
    return <label className={styles["type"] + " " + (bookType === 0 ? styles["active"] : "")}>
        <input
            checked={bookType === 0}
            onClick={() => setBookType(0)}
            type="radio"
            name="book-type"
            hidden={true}
        /> Электронная
    </label>
}