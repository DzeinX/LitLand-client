import {useState} from "react"
import {MessageToUser} from "../components/MessageToUser";
import {AddBookForm} from "../components/book/AddBookForm";
import {useSelector} from "react-redux";
import {Header} from "../components/Header";
import styles from "../static/css/Page.module.css";
import {Footer} from "../components/Footer";

export const AddBookPage = () => {
    const [message, setMessage] = useState("");
    const [typeMessage, setTypeMessage] = useState("warning");
    const cartReducer = useSelector(state => state.cartReducer)

    return <div className={styles["page"]}>
        <Header cartLength={cartReducer.length}/>
        <MessageToUser message={message} setMessage={setMessage} type={typeMessage}/>
        <AddBookForm setMessage={setMessage} setTypeMessage={setTypeMessage}/>
        <Footer/>
    </div>;
}