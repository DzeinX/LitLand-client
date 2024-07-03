import {useState} from "react"
import {useSelector} from "react-redux"
import styles from "../../static/css/FillNecessaryInfoDigitalBook.module.css"
import {Preloader} from "../Preloader";

export const FillNecessaryInfoDigitalBook = ({setMessage, bookHash, setLevel, setBookTypeVisibility, setTypeMessage}) => {
    const languageReducer = useSelector(state => state.languageReducer)
    const genreReducer = useSelector(state => state.genreReducer)
    const publisherReducer = useSelector(state => state.publisherReducer)
    const [isLoading, setIsLoading] = useState(false)

    const submitFormBook = (e) => {
        e.preventDefault()
        setIsLoading(true)

        const data = new FormData(e.target)

        fetch('http://localhost:9090/employee/add-book', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
            },
            body: JSON.stringify({
                name: data.get("name"),
                language: data.get("language"),
                price: data.get("price"),
                pages: data.get("pages"),
                isNew: data.get("isNew") === "on",
                storageAmount: data.get("storageAmount"),
                description: data.get("description"),
                publicationYear: data.get("publicationYear"),
                rating: data.get("rating"),
                publisher: data.get("publisher"),
                genre: data.get("genre"),
                authors: data.get("authors"),
                isbnnumber: data.get("ISBNNumber"),
            }),
        }).then(response => response.json())
            .then(data => {
                if (data.verdict === "SUCCESS") {
                    setMessage("Успешно добавлена")
                    setTypeMessage("success")
                    bookHash.current = data.hash
                    setLevel(2)
                    setBookTypeVisibility(false)
                } else {
                    setMessage("Ошибка добавления книги")
                    setTypeMessage("error")
                }
            }).finally(() => setIsLoading(false))
    }

    return <form
        onSubmit={submitFormBook}
        method="POST"
        className={styles["fill-necessary-info-digital-book"]}
    >
        <input type="text" name="name" placeholder="Название книги" required/>
        <select name="language" required>
            {
                languageReducer.map((language, key) => {
                    return <option key={key}
                                   value={language.code}>{language.languageName}</option>
                })
            }
        </select>
        <input type="number" name="price" placeholder="Цена" required/>
        <input type="number" name="pages" placeholder="Количество страниц" required/>
        <textarea style={{resize: 'vertical'}} name="description" placeholder="Описание"/>
        <input type="number" name="publicationYear" placeholder="Год издания" required/>
        <input type="number" name="rating" placeholder="Рейтинг"/>
        <select name="publisher" required>
            {
                publisherReducer.map((publisher, key) => {
                    return <option key={key}
                                   value={publisher.hash}>{publisher.name}</option>
                })
            }
        </select>
        <select name="genre" required>
            {
                genreReducer.map((genre, key) => {
                    return <option key={key}
                                   value={genre.hash}>{genre.name}</option>
                })
            }
        </select>
        <input type="text" name="authors" placeholder="Автор" required/>
        <input type="text" name="ISBNNumber" placeholder="Номер ISBN"/>
        <label>
            <span>Это новинка</span>
            <input type="checkbox" name="isNew" placeholder="Новинка"/>
        </label>
        <button type="submit">
            {isLoading
                ? <Preloader size={"small"} color={"#fff"}/>
                : "Создать книгу"}
        </button>
    </form>
}