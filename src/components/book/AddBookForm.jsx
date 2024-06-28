import {useSelector} from "react-redux";
import {useRef} from "react";

export const AddBookForm = ({setMessage}) => {
    const languageReducer = useSelector(state => state.languageReducer)
    const buttonRef = useRef();

    const submitForm = (e) => {
        e.preventDefault()
        buttonRef.current.innerHTML = "Загрузка...";

        const data = new FormData(e.target)
        console.log(typeof data.get("language"))

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
                isNew: data.get("isNew") === "on",
                storageAmount: data.get("storageAmount"),
                description: data.get("description"),
                fileName: data.get("fileName"),
                coverName: data.get("coverName"),
                publicationYear: data.get("publicationYear"),
                rating: data.get("rating"),
                publisher: data.get("publisher"),
                genre: data.get("genre"),
                authors: data.get("authors"),
                isbnnumber: data.get("ISBNNumber"),
            }),
        }).then(response => response.json())
            .then(data => {
                if (data.errorCode === -1) {
                    setMessage("Успешно добавлена")
                } else {
                    setMessage("Ошибка добавления книги")
                }
            }).finally(() => buttonRef.current.innerHTML = "Добавить")
    }

    return <form onSubmit={submitForm} method="POST"
                 style={{display: 'flex', flexDirection: 'column', gap: "10px", width: "50%", margin: "0 auto"}}>
        <input type="text" name="name" placeholder="Название книги" required/>
        <select name="language" required>
            {
                languageReducer.map((language) => {
                    return <option key={language.code}
                                   value={language.code}>{language.languageName}</option>
                })
            }
        </select>
        <input type="number" name="price" placeholder="Цена" required/>
        <label>
            Это новинка <input type="checkbox" name="isNew" placeholder="Новинка"/>
        </label>
        <input type="number" name="storageAmount" placeholder="На складе" required/>
        <input type="text" name="description" placeholder="Описание"/>
        <input type="text" accept="pdf,epub" name="fileName" placeholder="Файл книги"/>
        <input type="text" accept="jpg,png" name="coverName" placeholder="Файл обложки"/>
        <input type="number" name="publicationYear" placeholder="Год издания" required/>
        <input type="number" name="rating" placeholder="Рейтинг"/>
        <input type="text" name="publisher" placeholder="Издание"/>
        <input type="text" name="genre" placeholder="Жанр"/>
        <input type="text" name="authors" placeholder="Автор" required/>
        <input type="text" name="ISBNNumber" placeholder="Номер ISBN"/>
        <button ref={buttonRef} type="submit">Добавить</button>
    </form>
}