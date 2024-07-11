import {useState} from "react"
import styles from "../../static/css/FillNecessaryInfoPhysicalBook.module.css"
import {SubmitButton} from "../form/SubmitButton"
import {RequiredBookInformation} from "../form/RequiredBookInformation"

export const FillNecessaryInfoPhysicalBook = ({setMessage, bookHash, setLevel, setBookTypeVisibility, setTypeMessage}) => {
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
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
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
        className={styles["fill-necessary-info-physical-book"]}
    >
        <RequiredBookInformation />
        <input type="number" name="storageAmount" placeholder="На складе" required/>
        <SubmitButton isLoading={isLoading}>Создать книгу</SubmitButton>
    </form>
}