import {UpdateCart} from "../../store/reducers/cartReducer"
import {useDispatch} from "react-redux"

export const FirstInTheCart = ({book, cartReducer, setCart, setCartLength}) => {
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
                    console.log(data.message) // TODO - сделать вывод сообщения
                }
            })
    }

    return <button type="button" onClick={addToCart}>Купить за <span>{book.price}</span> руб</button>
}