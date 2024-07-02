import {Header} from "../components/Header"
import {useSelector} from "react-redux"
import {useState} from "react"
import {BookAmountControl} from "../components/book/BookAmountControl";
import styles from "../static/css/Page.module.css";
import {MessageToUser} from "../components/MessageToUser";
import {Footer} from "../components/Footer";

export const CartPage = () => {
    const cartReducer = useSelector(state => state.cartReducer)
    const [cartLength, setCartLength] = useState(cartReducer.length)
    const [message, setMessage] = useState("");
    const [typeMessage, setTypeMessage] = useState("warning");
    const [fullPrice, setFullPrice] = useState(() => {
        let sum = 0;
        for (const book of cartReducer) {
            sum += book.price * book.amount
        }
        return sum
    })

    return <div className={styles["page"]}>
        <Header cartLength={cartLength}/>
        <MessageToUser message={message} setMessage={setMessage} type={typeMessage}/>
        {
            cartReducer.map((book, index) => {
                return <BookAmountControl
                    book={book}
                    cartReducer={cartReducer}
                    setCartLength={setCartLength}
                    setFullPrice={setFullPrice}
                    setMessage={setMessage}
                    setTypeMessage={setTypeMessage}
                />
            })
        }
        <div className={styles["total"]} style={{fontSize: "1.5rem", textAlign: "right", marginTop: "40px", fontWeight: "bold"}}>
            {cartReducer.length === 0 && "Вы ещё не выбрали книги"}
            {cartReducer.length !== 0 && ("ИТОГО " + fullPrice + " руб")}
        </div>
        <Footer/>
    </div>
}