import {useRef, useState} from "react";

export const AddCoverBook = ({setMessage, bookHash, setLevel, setBookTypeVisibility, setTypeMessage}) => {
    const buttonCoverRef = useRef();
    const [file, setFile] = useState("");

    const submitFormCover = (e) => {
        e.preventDefault()
        buttonCoverRef.current.innerHTML = "Загрузка...";

        const data = new FormData()
        console.log(file)
        data.append("cover", file);

        fetch('http://localhost:9090/employee/add-cover/' + bookHash.current, {
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
                    setMessage("Обложка успешно загружена")
                    setTypeMessage("success")
                    bookHash.current = ""
                    setLevel(1)
                    setBookTypeVisibility(true)
                } else {
                    setMessage("Не удалось загрузить обложку, возможно, не тот формат (допустимые форматы: jpg, png, ico)")
                    setTypeMessage("warning")
                }
            }).finally(() => buttonCoverRef.current.innerHTML = "Загрузить")
    }

    function handleFileChange(e) {
        if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
    }

    return <div>
        <div className="title">А теперь, пришло время добавить обложку</div>
        <form onSubmit={submitFormCover} method="POST" encType="multipart/form-data">
            {/*<input type="file" accept="pdf,epub" name="fileName" placeholder="Файл книги"/>*/}
            <input type="file" accept="jpg,png" name="coverName" placeholder="Файл обложки" required
                   onChange={handleFileChange}/>
            <button ref={buttonCoverRef} type="submit">Загрузить</button>
        </form>
    </div>
}