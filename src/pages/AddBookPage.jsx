import {useState} from "react"
import {MessageToUser} from "../components/MessageToUser"
import {AddBookForm} from "../components/book/AddBookForm"
import {useSelector} from "react-redux"
import styles from "../static/css/Page.module.css"
import {PageWrap} from "../components/PageWrap"
import {useAuth} from "../hooks/useAuth";

export const AddBookPage = () => {
    const [message, setMessage] = useState("");
    const [typeMessage, setTypeMessage] = useState("warning");
    const cartReducer = useSelector(state => state.cartReducer)
    const local = useAuth(false)

    return <div className={styles["page"]}>
        <PageWrap cartLength={cartReducer.length} local={local}>
            <MessageToUser message={message} setMessage={setMessage} type={typeMessage}/>
            <AddBookForm setMessage={setMessage} setTypeMessage={setTypeMessage}/>
        </PageWrap>
    </div>;
}