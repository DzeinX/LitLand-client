import {useEffect, useState} from "react";

export const BookCover = ({size, book}) => {
    const [img, setImg] = useState("");

    useEffect(() => {
        fetch("http://localhost:9090/book/image/" + (book.coverName === null ? "default.png" : book.coverName), {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
            },
        })
            .then((response) => response.blob())
            .then((blob) => {
                setImg(URL.createObjectURL(blob))
            })
    }, []);

    return <div className={"book-cover " + size}>
        <img src={img} alt="Обложка"/>
        <span className="is-new">{book.isNew ? "Новинка" : ""}</span>
    </div>
}