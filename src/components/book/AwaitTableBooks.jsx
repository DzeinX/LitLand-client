import {Preloader} from "../Preloader";
import {NoBooksFound} from "./NoBooksFound";
import {ListBooksCards} from "./ListBooksCards";

export const AwaitTableBooks = ({isLoading, error, data}) => {
    if (isLoading) return <Preloader/>

    if (error !== undefined) return <NoBooksFound/>

    return <ListBooksCards books={data.books}/>
}