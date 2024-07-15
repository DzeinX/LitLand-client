import {Preloader} from "../Preloader"
import {useEffect, useState} from "react"
import {useAuth} from "../../hooks/useAuth"
import {BookCoverImage} from "../book/BookCoverImage"
import {useNavigate} from "react-router-dom"
import styles from "../../static/css/PurchasingBooks.module.css"

export const PurchasingBooks = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [orders, setOrders] = useState([])
    const local = useAuth(false)
    const navigate = useNavigate()

    useEffect(() => {
        setIsLoading(true)

        fetch('http://localhost:9090/order/all', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${local.token}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
            },
            body: JSON.stringify({userId: local.id}),
        })
            .then(response => response.json())
            .then(data => setOrders(data))
            .finally(() => setIsLoading(false))
    }, [local]);


    if (isLoading) return <div style={{height: "100px"}}>
        <Preloader/>
    </div>

    if (orders.length === 0) return null

    return <details>
        <summary className={styles["summary"]}>Покупки</summary>
        {orders.map((order, index) => {
            return <div key={index} className={styles["purchase"]} style={{"--delay": index * 0.1 + "s"}}>
                {order.carts.map((cart, index2) => {
                    return <div
                        key={index2} className={styles["purchase-entity"]}
                        onClick={() => navigate("/book/" + cart.hash)}
                    >
                        <div className={styles["image"]}>
                            <BookCoverImage book={cart}/>
                        </div>
                        <div className={styles["info"]}>
                            <div>{cart.name}</div>
                            <div className={styles["purchase-author"]}>{cart.authors}</div>
                            {cart.amount !== 1
                                ? <div>Колличество: {cart.amount}</div>
                                : null
                            }
                        </div>
                    </div>
                })}
            </div>
        })
        }
    </details>
}