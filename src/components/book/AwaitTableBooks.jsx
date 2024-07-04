import {Preloader} from "../Preloader";
import {NoBooksFound} from "./NoBooksFound";
import {TableBooks} from "./TableBooks";

export const AwaitTableBooks = ({isLoading, error, data}) => {
    if (isLoading) return <Preloader/>

    if (error !== undefined) return <NoBooksFound/>

    return <TableBooks books={data.books}/>
}