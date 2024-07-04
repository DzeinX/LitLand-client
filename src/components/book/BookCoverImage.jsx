import {Preloader} from "../Preloader"
import styles from "../../static/css/BookCover.module.css"
import useSWR from "swr"
import {fetcherImage} from "../../fetchers/fetcher"

export const BookCoverImage = ({book}) => {
    const url = "http://localhost:9090/book/image/" + (book.coverName === null ? "default.png" : book.coverName)
    const {data, error, isLoading} = useSWR(url, fetcherImage)

    if (isLoading) return <>
        <Preloader/>
        <div className={styles["fake-image"]}></div>
    </>

    if (error !== undefined) return <div className={styles["fake-image"]}></div>

    return <>
        <img className={styles["image-root"]} src={data} alt="Обложка"/>
        {book.isNew ? <div className={styles["is-new"]}>Новинка</div> : null}
    </>
}