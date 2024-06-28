export const getReadableStorageStatus = (storageStatus) => {
    const STATUS_OUT_OF_PRODUCT = "Товар закончился"
    const STATUS_NOT_MUCH_LEFT = "Осталось мало"
    const STATUS_PLENTY = "Товара много"

    if (storageStatus === null) return STATUS_OUT_OF_PRODUCT;

    if (storageStatus === 0) {
        return STATUS_OUT_OF_PRODUCT; // "Товар закончился"
    } else if (storageStatus === 1) {
        return STATUS_NOT_MUCH_LEFT; // "Товара много"
    } else {
        return STATUS_PLENTY; // "Товара мало"
    }
}