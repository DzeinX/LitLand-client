import {BookCard} from "./BookCard";
import {useEffect, useState} from "react";

export const ListBooks = () => {
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:9090/', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
            },
        }).then((response) => {
            return response.json()
        }).then(
            (data) => {
                return setBooks(data)
            }
        )
    }, []);

    useEffect(() => {
        setIsLoading(false)
    }, [books])

    return <>
        {isLoading
            ? <div>Загрузка...</div>
            : <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem'}}>
                {
                    books.length === 0
                        ? "Книг пока что нету"
                        : books.map(book => <BookCard key={book.id} book={book}/>)
                }
            </div>
        }
    </>
}