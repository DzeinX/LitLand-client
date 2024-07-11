import styles from "../../static/css/BookPaginationController.module.css"

export const Pagination = ({page, setPage, pageSize, setPageSize, amountPages}) => {
    const nextPage = () => {
        if (page === amountPages) return
        setPage((prev) => prev + 1)
    }

    const prevPage = () => {
        if (page < 1) return
        setPage((prev) => prev - 1)
    }

    const changePageSize = (value) => {
        if (value < 1) return
        setPageSize(value)
    }

    return <div className={styles["pagination-controller"]}>
        <button onClick={prevPage} disabled={page === 1}>
            Предыдущая страница
        </button>
        <div className={styles["page-number"]}>
            {page} из {amountPages}
        </div>
        <input
            type="number"
            onChange={e => changePageSize(e.target.value)}
            defaultValue={pageSize}
        />
        <button onClick={nextPage} disabled={page === amountPages}>
            Следующая страница
        </button>
    </div>
}