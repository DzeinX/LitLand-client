import useSWR from "swr";
import {Pagination} from "./Pagination";
import {fetcherGet} from "../../fetchers/fetcher";

export const BookPaginationController = ({page, pageSize, setPage, setPageSize}) => {
    const url = 'http://localhost:9090/book/amount-pages?size=' + pageSize
    const {data, error, isLoading} = useSWR(url, fetcherGet)

    if (isLoading || error !== undefined) return null

    if (page > data.totalPages) {
        setPage(data.totalPages)
    }

    return <Pagination
        page={page}
        pageSize={pageSize}
        setPage={setPage}
        setPageSize={setPageSize}
        amountPages={data.totalPages}
    />
}