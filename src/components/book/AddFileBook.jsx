import {useRef, useState} from "react";

export const AddFileBook = ({setMessage, bookHash, setLevel}) => {
    const buttonCoverRef = useRef();
    const [file, setFile] = useState("");

    const submitFormCover = (e) => {
        e.preventDefault()
        buttonCoverRef.current.innerHTML = "Загрузка...";

        const data = new FormData()
        console.log(file)
        data.append("file", file);

        fetch('http://localhost:9090/employee/add-file/' + bookHash.current, {
            method: 'POST',
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
                    setLevel(3)
                } else {
                    setMessage("Не удалось загрузить файл, возможно, не тот формат (допустимые форматы: pdf, docx, doc, epub, fb2, mobi, kf8, azw, lrf)")
                }
            }).finally(() => buttonCoverRef.current.innerHTML = "Загрузить")
    }

    function handleFileChange(e) {
        if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
    }

    return <div>
        <div className="title">Загрузите файл книги</div>
        <form onSubmit={submitFormCover} method="POST" encType="multipart/form-data">
            <input type="file" accept="pdf,docx,doc,epub,fb2,mobi,kf8,azw,lrf" name="fileName" required
                   onChange={handleFileChange}/>
            <button ref={buttonCoverRef} type="submit">Загрузить</button>
        </form>
    </div>
}