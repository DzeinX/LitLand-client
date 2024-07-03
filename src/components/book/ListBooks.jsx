import {TableBooks} from "./TableBooks"
import {useEffect, useState} from "react"
import {Preloader} from "../Preloader"
import {NoBooksFound} from "./NoBooksFound"
import {BookPaginationController} from "./BookPaginationController";


export const ListBooks = () => {
    const [books, setBooks] = useState(null)
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(2)

    useEffect(() => {
        fetch('http://localhost:9090/?page=' + (page - 1) + '&size=' + pageSize, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
            },
        })
            .then((response) => response.json())
            .then((data) => setBooks(data))
    }, [page, pageSize]);



    return <>
        <BookPaginationController
            page={page}
            pageSize={pageSize}
            setPage={setPage}
            setPageSize={setPageSize}
            setBooks={setBooks}
        />
        {books === null
            ? <Preloader/>
            : books.length === 0 ? <NoBooksFound/> : <TableBooks books={books}/>
        }
    </>
}