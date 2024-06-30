import {useRef, useState} from "react";
import {AddDigitalBook} from "./AddDigitalBook";
import {AddPhysicalBook} from "./AddPhysicalBook";

export const AddBookForm = ({setMessage, setTypeMessage}) => {
    const bookHash = useRef("")
    const [bookType, setBookType] = useState(0);
    const [bookTypeVisibility, setBookTypeVisibility] = useState(true);

    return <div className="add-book-form">
        {bookTypeVisibility && <div className="book-types">
            <div className="types">
                <label>
                    <input checked={bookType === 0} onClick={() => setBookType(0)} type="radio" name="book-type"/> Электронная
                </label>
                <label>
                    <input checked={bookType === 1} onClick={() => setBookType(1)} type="radio" name="book-type"/> Физическая
                </label>
            </div>
        </div>}
        <div className="form-container">
            {bookType === 0 && <AddDigitalBook
                setMessage={setMessage}
                bookHash={bookHash}
                setBookTypeVisibility={setBookTypeVisibility}
                setTypeMessage={setTypeMessage}
            />}
            {bookType === 1 && <AddPhysicalBook
                setMessage={setMessage}
                bookHash={bookHash}
                setBookTypeVisibility={setBookTypeVisibility}
                setTypeMessage={setTypeMessage}
            />}
        </div>
    </div>
}