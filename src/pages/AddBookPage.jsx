import {useState} from "react";
import {Header} from "../components/Header";

export const AddBookPage = () => {
    const [message, setMessage] = useState('');


    const submitForm = (e) => {
        e.preventDefault()

        const data = new FormData(e.target)

        fetch('http://localhost:9090/add-book', {
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
                ISBNNumber: data.get("ISBNNumber"),
            }),
        }).then(response => {
            if (response.ok) {
                setMessage("Успешно добавлена")
            } else {
                setMessage("Ошибка добавления книги")
            }
        })
    }

    return <div>
        <Header/>
        <div>{message}</div>
        <form onSubmit={submitForm} method="POST">
            <input type="text" name="name" placeholder="Название книги" />
            <input type="text" name="language" placeholder="Язык"/>
            <input type="number" name="price" placeholder="Цена"/>
            <input type="checkbox" name="isNew" placeholder="Новинка"/>
            <input type="number" name="storageAmount" placeholder="На складе"/>
            <input type="text" name="description" placeholder="Описание"/>
            <input type="text" name="fileName" placeholder="Название файла"/>
            <input type="text" name="coverName" placeholder="Название обложки"/>
            <input type="number" name="publicationYear" placeholder="Год издания"/>
            <input type="number" name="rating" placeholder="Рейтинг"/>
            <input type="text" name="publisher" placeholder="Издание"/>
            <input type="text" name="genre" placeholder="Жанр"/>
            <input type="text" name="authors" placeholder="Автор"/>
            <input type="text" name="ISBNNumber" placeholder="Номер ISBN"/>
            <input type="submit" value="Отправить"/>
        </form>
    </div>;
}