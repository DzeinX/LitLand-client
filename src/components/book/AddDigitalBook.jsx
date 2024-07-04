import {useRef, useState} from "react"
import {AddCoverBook} from "./AddCoverBook"
import {FillNecessaryInfoDigitalBook} from "./FillNecessaryInfoDigitalBook"
import {AddFileBook} from "./AddFileBook";

export const AddDigitalBook = ({setMessage, setBookTypeVisibility, setTypeMessage}) => {
    const [level, setLevel] = useState(1)
    const bookHash = useRef("")

    if (level === 1) return <div className="add-digital-book">
        <FillNecessaryInfoDigitalBook
            setMessage={setMessage}
            bookHash={bookHash}
            setLevel={setLevel}
            setBookTypeVisibility={setBookTypeVisibility}
            setTypeMessage={setTypeMessage}
        />
    </div>

    if (level === 2) return <div className="add-digital-book">
        <AddFileBook
            setMessage={setMessage}
            bookHash={bookHash}
            setLevel={setLevel}
            setTypeMessage={setTypeMessage}
        />
    </div>

    if (level === 3) return <div className="add-digital-book">
        <AddCoverBook
            setMessage={setMessage}
            bookHash={bookHash}
            setLevel={setLevel}
            setBookTypeVisibility={setBookTypeVisibility}
            setTypeMessage={setTypeMessage}
        />
    </div>

    return null
}