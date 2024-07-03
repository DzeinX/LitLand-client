import styles from "../../static/css/BookPaginationController.module.css"
import {useEffect, useState} from "react"

export const BookPaginationController = ({page, pageSize, setPage, setPageSize, setBooks}) => {
    const [amountPages, setAmountPages] = useState(1)

    useEffect(() => {
        fetch('http://localhost:9090/book/amount-pages?size=' + pageSize, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.verdict !== "SUCCESS") return
                setAmountPages(data.totalPages)
            })
    }, [pageSize])

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
        setBooks(null)
        setPageSize(value)
    }

    return <>
        {
            amountPages !== -1 && <div className={styles["pagination-controller"]}>
                <button onClick={prevPage} disabled={page === 1}>Предыдущая страница</button>
                <div className={styles["page-number"]}>{page} из {amountPages}</div>
                <input type="number" onChange={e => changePageSize(e.target.value)} value={pageSize} defaultValue={pageSize} />
                <button onClick={nextPage} disabled={page === amountPages}>Следующая страница</button>
            </div>
        }
    </>
}