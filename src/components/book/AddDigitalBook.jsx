import {useState} from "react"
import {AddCoverBook} from "./AddCoverBook"
import {FillNecessaryInfoDigitalBook} from "./FillNecessaryInfoDigitalBook"
import {AddFileBook} from "./AddFileBook";

export const AddDigitalBook = ({setMessage, bookHash, setBookTypeVisibility, setTypeMessage}) => {
    const [level, setLevel] = useState(1)

    return <div className="add-digital-book">
        {level === 1 && <FillNecessaryInfoDigitalBook
            setMessage={setMessage}
            bookHash={bookHash}
            setLevel={setLevel}
            setBookTypeVisibility={setBookTypeVisibility}
            setTypeMessage={setTypeMessage}
        />}
        {level === 2 && <AddFileBook
            setMessage={setMessage}
            bookHash={bookHash}
            setLevel={setLevel}
            setTypeMessage={setTypeMessage}
        />}
        {level === 3 && <AddCoverBook
            setMessage={setMessage}
            bookHash={bookHash}
            setLevel={setLevel}
            setBookTypeVisibility={setBookTypeVisibility}
            setTypeMessage={setTypeMessage}
        />}
    </div>
}