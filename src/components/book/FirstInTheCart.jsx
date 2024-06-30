import {UpdateCart} from "../../store/reducers/cartReducer"
import {useDispatch} from "react-redux"
import styles from "../../static/css/FirstInTheCart.module.css"

export const FirstInTheCart = ({book, cartReducer, setCart, setCartLength, setMessage, setTypeMessage}) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        fetch('http://localhost:9090/cart/add-new', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
            },
            body: JSON.stringify({hash: book.hash})
        })
            .then((response) => response.json())
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
            })
    }

    return <button type="button" className={styles["first-in-the-cart"]} onClick={addToCart}>Добавить в корзину</button>
}