import {useEffect, useState} from "react";
import styles from "../../static/css/BookCover.module.css"

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

    return <div className={styles["book-cover"] + " " + size + " " + (book.isNew ? styles["highlight"] : "")}>
        <img className={styles["image-root"]} src={img} alt="Обложка"/>
        {book.isNew && <div className={styles["is-new"]}>Новинка</div>}
    </div>
}