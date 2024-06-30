import {useNavigate, useParams} from "react-router-dom"
import {memo, useEffect, useRef, useState} from "react"
import {Preloader} from "../components/Preloader"
import {BookInfo} from "../components/book/BookInfo"
import {Header} from "../components/Header"
import {useSelector} from "react-redux"
import styles from "../static/css/Page.module.css"

export const BookPage = memo(() => {
    const cartReducer = useSelector(state => state.cartReducer)
    const [cartLength, setCartLength] = useState(cartReducer.length)
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

    return <div className={styles["page"]}>
        <Header cartLength={cartLength} />
        {book === null
            ? <Preloader/>
            : <div>
                <BookInfo book={book} cartReducer={cartReducer} setCartLength={setCartLength}/>
            </div>
        }
    </div>
})