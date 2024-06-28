import {TableBooks} from "./TableBooks"
import {useEffect, useState} from "react"
import {Preloader} from "../Preloader"
import {NoBooksFound} from "./NoBooksFound"


export const ListBooks = () => {
    const [books, setBooks] = useState(null)

    useEffect(() => {
        fetch('http://localhost:9090/', {
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
    }, []);

    return <>
        {books === null
            ? <Preloader/>
            : books.length === 0 ? <NoBooksFound/> : <TableBooks books={books}/>
        }
    </>
}