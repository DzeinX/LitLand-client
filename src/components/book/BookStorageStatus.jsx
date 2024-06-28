import {getReadableStorageStatus} from "../../helpers/getReadableStorageStatus"

export const BookStorageStatus = ({book}) => {
    return <div className="storage-amount">{getReadableStorageStatus(book.storageStatus)}</div>
}