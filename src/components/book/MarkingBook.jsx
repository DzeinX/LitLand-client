import styles from "../../static/css/MarkingBook.module.css"
import {useEffect, useState} from "react"
import {Preloader} from "../Preloader"

const forms = [
    {mark: 1},
    {mark: 2},
    {mark: 3},
    {mark: 4},
    {mark: 5},
    {mark: 6},
    {mark: 7},
    {mark: 8},
    {mark: 9},
    {mark: 10},
]

export const MarkingBook = ({book, setMessage, setTypeMessage, setBookRating}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userMark, setUserMark] = useState(0);
    const [amountVoices, setAmountVoices] = useState(0);

    useEffect(() => {
        fetch('http://localhost:9090/rating/info', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
            },
            body: JSON.stringify({
                bookId: book.hash,
                userId: localStorage.getItem('id'),
            }),
        }).then(response => response.json())
            .then(data => {
                if (data.verdict === "SUCCESS") {
                    setUserMark(data.mark)
                    setAmountVoices(data.amountVoices)
                }
            }).finally(() => setIsLoading(false))
    }, [book.hash]);

    const sendMark = (e) => {
        e.preventDefault()
        setIsLoading(true)

        const data = new FormData(e.target)

        fetch('http://localhost:9090/rating/mark', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
            },
            body: JSON.stringify({
                mark: data.get("mark"),
                bookId: book.hash,
                userId: localStorage.getItem('id'),
            }),
        }).then(response => response.json())
            .then(data => {
                if (data.verdict === "SUCCESS") {
                    console.log(data.bookRating)
                    setBookRating(data.bookRating)
                    setUserMark(data.userMark)
                    setAmountVoices(data.amountVoices)
                } else {
                    setMessage("Ошибка оценки книги")
                    setTypeMessage("error")
                }
            }).finally(() => setIsLoading(false))
    }

    if (localStorage.getItem('token') === null) return <div className={styles["rating"]}>
        <div className={styles["rating-title"]}>
            <div className={styles["title"]}>Для оценки книги войдите в аккаунт</div>
            <div className={styles["subtitle"]}>Если его нет, то зарегистрируйтесь :)</div>
        </div>
    </div>

    if (isLoading) return <div className={styles["rating"]}>
        <Preloader/>
    </div>

    return <div className={styles["rating"]}>
        <div className={styles["rating-title"]}>
            <div className={styles["title"]}>Оцените книгу</div>
            <div className={styles["subtitle"]}>Не волнуйтесь, вы всегда можете поменять своё мнение :)</div>
        </div>
        <div className={styles["rating-case"]}>
            <div>
                {
                    forms.map((form) => {
                        return <form method="post" onSubmit={sendMark} className={styles["rating-form"]}>
                            <input type="hidden" value={form.mark} name="mark"/>
                            <input
                                type="submit"
                                value=""
                                title={"Оценить на " + form.mark}
                                className={styles["star"] + " " + (userMark >= form.mark ? styles["fill"] : "")}
                            />
                        </form>
                    })
                }
            </div>
            <div className={styles["amount-voices-case"]}>
                {amountVoices === 0 ? null : <div className={styles["title"]}>{amountVoices} человек оценило</div>}
                {amountVoices !== 0 ? null :
                    <div className={styles["title"]}>Ещё никто не оценил, будьте первыми!</div>}
                {amountVoices <= 1000 ? null : <div className={styles["title"]}>Оценило больше 1000 человек!</div>}
            </div>
        </div>
    </div>
}