import styles from "../../static/css/AddBookForm.module.css";

export const PhysicalType = ({bookType, setBookType}) => {
    return <label className={styles["type"] + " " + (bookType === 1 ? styles["active"] : "")}>
        <input
            checked={bookType === 1}
            onClick={() => setBookType(1)}
            type="radio"
            name="book-type"
            hidden={true}
        /> Физическая
    </label>
}