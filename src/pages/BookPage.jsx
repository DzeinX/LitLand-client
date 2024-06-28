import {useNavigate, useParams} from "react-router-dom"
import {memo, useEffect, useRef, useState} from "react"
import {Preloader} from "../components/Preloader"
import {BookInfo} from "../components/book/BookInfo"

export const BookPage = memo(() => {
    const hashRef = useRef(useParams().hash)
    const [book, setBook] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:9090/book/' + hashRef.current, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
            },
        }).then((response) => response.json())
            .then((data) => {
                if (data.verdict === "NOT_FOUND") navigate("/not-found")
                setBook(data.book)
            })
    }, [navigate]);

    return <>
        {book === null
            ? <Preloader/>
            : <div>
                <BookInfo book={book}/>
            </div>
        }
    </>
})