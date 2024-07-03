import {useState} from "react";
import {FillNecessaryInfoPhysicalBook} from "./FillNecessaryInfoPhysicalBook";
import {AddCoverBook} from "./AddCoverBook";

export const AddPhysicalBook = ({
                                    setMessage,
                                    bookHash,
                                    setBookTypeVisibility,
                                    setTypeMessage
}) => {
    const [level, setLevel] = useState(1);

    return <div className="add-physical-book">
        {level === 1 && <FillNecessaryInfoPhysicalBook
            setMessage={setMessage}
            bookHash={bookHash}
            setLevel={setLevel}
            setBookTypeVisibility={setBookTypeVisibility}
            setTypeMessage={setTypeMessage}
        />}
        {level === 2 && <AddCoverBook
            setMessage={setMessage}
            bookHash={bookHash}
            setLevel={setLevel}
            setBookTypeVisibility={setBookTypeVisibility}
            setTypeMessage={setTypeMessage}
        />}
    </div>
}