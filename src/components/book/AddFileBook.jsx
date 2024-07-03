import {useState} from "react"
import styles from "../../static/css/AddFileBook.module.css"
import {Preloader} from "../Preloader";

export const AddFileBook = ({setMessage, bookHash, setLevel, setTypeMessage}) => {
    const [file, setFile] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const submitFormCover = (e) => {
        e.preventDefault()
        setIsLoading(true)

        const data = new FormData()
        console.log(file)
        data.append("file", file);

        fetch('http://localhost:9090/employee/add-file/' + bookHash.current, {
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
                    setMessage("Файл успешно загружен")
                    setTypeMessage("success")
                    setLevel(3)
                } else {
                    setMessage("Не удалось загрузить файл, возможно, не тот формат (допустимые форматы: pdf, docx, doc, epub, fb2, mobi, kf8, azw, lrf)")
                    setTypeMessage("warning")
                }
            }).finally(() => setIsLoading(false))
    }

    function handleFileChange(e) {
        if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
    }

    return <div className={styles["add-file-book"]}>
        <div className={styles["title"]}>Загрузите файл книги</div>
        <form onSubmit={submitFormCover} method="POST" encType="multipart/form-data">
            <input type="file" accept="application/pdf, application/msword, application/epub, application/fb2, application/mobi, application/kf8, application/azw, application/lrf" name="fileName" required
                   onChange={handleFileChange}/>
            <button type="submit">
                {isLoading
                    ? <Preloader size={"small"} color={"#fff"} />
                    : "Загрузить"}
            </button>
        </form>
    </div>
}