import {Preloader} from "../Preloader"
import {BookInfo} from "./BookInfo"
import {useNavigate, useParams} from "react-router-dom"
import useSWR from "swr"
import {fetcherGet} from "../../fetchers/fetcher"

export const BookView = ({setCartLength}) => {
    const navigate = useNavigate()
    const url = 'http://localhost:9090/book/' + useParams().hash
    const {data, error, isLoading} = useSWR(url, fetcherGet)

    if (isLoading) return <Preloader/>

    if (data.verdict === "NOT_FOUND" || error !== undefined) return navigate("/not-found")

    return <BookInfo book={data.book} setCartLength={setCartLength}/>
}