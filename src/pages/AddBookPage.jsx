import {useState} from "react"
import {MessageToUser} from "../components/MessageToUser";
import {AddBookForm} from "../components/book/AddBookForm";
import {useSelector} from "react-redux";
import {Header} from "../components/Header";

export const AddBookPage = () => {
    const [message, setMessage] = useState('');
    const cartReducer = useSelector(state => state.cartReducer)

    return <div>
        <Header cartLength={cartReducer.length}/>
        <MessageToUser message={message}/>
        <AddBookForm setMessage={setMessage}/>
    </div>;
}