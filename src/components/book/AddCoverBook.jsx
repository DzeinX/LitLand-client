import {useState} from "react"
import styles from "../../static/css/AddCoverBook.module.css"
import {SubmitButton} from "../form/SubmitButton"

export const AddCoverBook = ({setMessage, bookHash, setLevel, setBookTypeVisibility, setTypeMessage}) => {
    const [file, setFile] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const submitFormCover = (e) => {
        e.preventDefault()
        setIsLoading(true)

        const data = new FormData()
        data.append("cover", file);

        fetch('http://localhost:9090/employee/add-cover/' + bookHash.current, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
            },
            body: data
        })
            .then(response => response.json())
            .then(data => {
                if (data.verdict === "SUCCESS") {
                    setMessage("Обложка успешно загружена")
                    setTypeMessage("success")
                    bookHash.current = ""
                    setLevel(1)
                    setBookTypeVisibility(true)
                } else {
                    setMessage("Не удалось загрузить обложку, возможно, не тот формат (допустимые форматы: jpg, png, ico)")
                    setTypeMessage("warning")
                }
            }).finally(() => setIsLoading(false))
    }

    function handleFileChange(e) {
        if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
    }

    return <div className={styles["add-cover-book"]}>
        <div className={styles["title"]}>А теперь, пришло время добавить обложку</div>
        <form onSubmit={submitFormCover} method="POST" encType="multipart/form-data">
            <input type="file" accept="image/jpeg, image/png" name="coverName" placeholder="Файл обложки" required
                   onChange={handleFileChange}/>
            <SubmitButton isLoading={isLoading}/>
        </form>
    </div>
}