import {Preloader} from "../Preloader"
import {useEffect, useState} from "react"
import {useAuth} from "../../hooks/useAuth";
import {BookCoverImage} from "../book/BookCoverImage";
import {useNavigate} from "react-router-dom";

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
        <summary style={{
            cursor: "pointer",
            fontSize: "1.3rem",
            marginTop: "40px",
        }}>Покупки</summary>
        {orders.map((order, index) => {
            return <div key={index} style={{
                padding: "20px",
                border: "1px solid lightgray",
                marginTop: "10px",
                borderRadius: "10px"
            }}>
                {order.carts.map((cart, index2) => {
                    return <div key={index2} style={{
                        justifyContent: "space-between",
                        display: "flex",
                        cursor: "pointer",
                        marginBottom: "40px"
                    }} onClick={() => navigate("/book/" + cart.hash)}>
                        <div style={{width: "25%"}}>
                            <BookCoverImage book={cart}/>
                        </div>
                        <div style={{
                            width: "calc(75% - 20px)"
                        }}>
                            <div>
                                {cart.name}
                            </div>
                            <div style={{textAlign: "right"}}>
                                {cart.authors}
                            </div>
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