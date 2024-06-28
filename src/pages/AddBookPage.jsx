import {useState} from "react"
import {MessageToUser} from "../components/MessageToUser";
import {AddBookForm} from "../components/book/AddBookForm";

export const AddBookPage = () => {
    const [message, setMessage] = useState('');

    return <div>
        <MessageToUser message={message}/>
        <AddBookForm setMessage={setMessage}/>
    </div>;
}