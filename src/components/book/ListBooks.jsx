import {BookPaginationController} from "./BookPaginationController"
import useSWR from "swr";
import {AwaitTableBooks} from "./AwaitTableBooks";
import {usePage} from "../../hooks/usePage";
import {fetcherGet} from "../../fetchers/fetcher";

export const ListBooks = () => {
    const {page, setPage, pageSize, setPageSize} = usePage(1, 5)
    const url = 'http://localhost:9090/?page=' + (page - 1) + '&size=' + pageSize
    const {data, error, isLoading} = useSWR(url, fetcherGet)

    return <>
        <BookPaginationController
            page={page}
            pageSize={pageSize}
            setPage={setPage}
            setPageSize={setPageSize}
        />
        <AwaitTableBooks
            isLoading={isLoading}
            error={error}
            data={data}
        />
    </>
}