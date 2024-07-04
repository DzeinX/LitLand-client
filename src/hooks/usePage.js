import {useState} from "react";

export const usePage = (pageInit, amountInit) => {
    const [page, setPage] = useState(pageInit)
    const [pageSize, setPageSize] = useState(amountInit)

    return {
        page: page,
        setPage: setPage,
        pageSize: pageSize,
        setPageSize: setPageSize,
    }
}