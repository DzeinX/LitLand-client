import {UpdateCart} from "../../store/reducers/cartReducer"
import {useDispatch, useSelector} from "react-redux"
import styles from "../../static/css/FirstInTheCart.module.css"
import {useNavigate, useParams} from "react-router-dom"
import {useAuth} from "../../hooks/useAuth";

export const FirstInTheCart = ({setCart, setCartLength, setMessage, setTypeMessage, setIsLoading}) => {
    const dispatch = useDispatch()
    const cartReducer = useSelector(state => state.cartReducer)
    const hash = useParams().hash
    const navigate = useNavigate()
    const local = useAuth(false)

    const addToCart = () => {
        setIsLoading(true);

        fetch('http://localhost:9090/cart/add-new', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${local.token}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
            },
            body: JSON.stringify({hash: hash, userId: local.id}),
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                }
                navigate("/auth")
            })
            .then((data) => {
                if (data.book !== null) {
                    cartReducer.push(data.book)
                    dispatch(UpdateCart(cartReducer))
                    setCart(data.book)
                    setCartLength(cartReducer.length)
                } else {
                    setMessage(data.message)
                    setTypeMessage("warning")
                }
                setIsLoading(false);
            })
    }

    return <button type="button" className={styles["first-in-the-cart"]} onClick={addToCart}>
        Добавить в корзину
    </button>
}