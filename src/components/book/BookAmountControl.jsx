import {useEffect, useState} from "react"
import {AddRemoveCartWidget} from "./AddRemoveCartWidget"
import styles from "../../static/css/BookAmountControl.module.css"
import {Preloader} from "../Preloader";
import {useNavigate} from "react-router-dom";

export const BookAmountControl = ({
                                      book,
                                      cartReducer,
                                      setCartLength,
                                      setFullPrice,
                                      setMessage,
                                      setTypeMessage
}) => {
    const [cart, setCart] = useState(book)
    const [isLoading, setIsLoading] = useState(false)
    const [img, setImg] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:9090/book/image/" + (book.coverName === null ? "default.png" : book.coverName), {
            method: 'GET',
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
    }, [book.coverName]);

    return <div className={styles["book-purchase"]}>
        <div className={styles["image"]}>
            {img === "" && <div>
                <Preloader/>
                <div className={styles["fake-image"]}></div>
            </div>}
            {img !== "" && <img onClick={() => navigate("/book/" + book.hash)} className={styles["image-root"]} src={img} alt="Обложка книги"/>}
        </div>
        <div className={styles["info"]}>
            <a href={"/book/" + book.hash}>
                <div>{book.name}</div>
                <div>{book.authors}</div>
            </a>
            <div className={styles["amount-controller"]}>
                <div className={styles["widget"]}>
                    <AddRemoveCartWidget
                        book={book}
                        cartReducer={cartReducer}
                        setCart={setCart}
                        cart={(cart === null ? book : cart)}
                        setCartLength={setCartLength}
                        setFullPrice={setFullPrice}
                        setMessage={setMessage}
                        setTypeMessage={setTypeMessage}
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                    />
                </div>
                <div className={styles["book-total"]}>
                    <div>{(book.amount > 1 ? (book.amount + " × " + book.price + " = ") : "")}<span>{book.amount * book.price} руб</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}