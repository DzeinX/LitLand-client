export const getReadableStorageStatus = (storageStatus) => {
    const STATUS_OUT_OF_PRODUCT = "Товар закончился"
    const STATUS_NOT_MUCH_LEFT = "Осталось мало"
    const STATUS_PLENTY = "Товара много"
    const DIGITAL_BOOK = "Электронная книга"

    if (storageStatus === -1) return DIGITAL_BOOK

    if (storageStatus === 0) return STATUS_OUT_OF_PRODUCT // "Товар закончился"

    if (storageStatus === 1) return STATUS_NOT_MUCH_LEFT // "Товара мало"

    if (storageStatus === 2) return STATUS_PLENTY // "Товара много"

    return STATUS_OUT_OF_PRODUCT
}