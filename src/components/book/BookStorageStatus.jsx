import {getReadableStorageStatus} from "../../helpers/getReadableStorageStatus"
import styles from "../../static/css/BookStorageStatus.module.css"

export const BookStorageStatus = ({book}) => {
    return <div
        className={styles["storage-amount"]}
        title="На складе осталось мало товара"
    >{getReadableStorageStatus(book.storageStatus)}</div>
}