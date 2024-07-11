import {UpdateCart} from "../../store/reducers/cartReducer";
import {SubmitButton} from "../form/SubmitButton";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useAuth} from "../../hooks/useAuth";

export const PurchaseButton = ({cartLength, setMessage, setTypeMessage, setCartLength}) => {
    const [isLoading, setIsLoading] = useState(false)
    const cartReducer = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    const local = useAuth(false)

    const purchaseBooks = (e) => {
        e.preventDefault()
        setIsLoading(true)

        fetch('http://localhost:9090/cart/order', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${local.token}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
            },
            body: JSON.stringify({hash: local.id, carts: cartReducer})
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.verdict === "SUCCESS") {
                    dispatch(UpdateCart([]))
                    setCartLength(0)
                    setMessage("Спасибо за покупку!")
                    setTypeMessage("success")
                } else {
                    setMessage(data.message)
                    setTypeMessage("warning")
                }
                setIsLoading(false)
            })
    }

    if (cartLength === 0) return null;

    return <form onSubmit={purchaseBooks}>
        <SubmitButton isLoading={isLoading}>Оформить заказ</SubmitButton>
    </form>
}