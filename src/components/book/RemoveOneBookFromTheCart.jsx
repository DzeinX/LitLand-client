import {UpdateCart} from "../../store/reducers/cartReducer";
import {useDispatch} from "react-redux";

export const RemoveOneBookFromTheCart = ({book, cartReducer, setCart, cart, setCartLength, setFullPrice}) => {
    const dispatch = useDispatch();

    const removeOne = () => {
        if (cart.amount === 1) {
            fetch('http://localhost:9090/cart/remove', {
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
                    if (data.verdict === "SUCCESS") {
                        let sum = 0
                        for (let i = 0; i < cartReducer.length; i++) {
                            if (cartReducer[i].hash === book.hash) {
                                sum = cartReducer[i].amount * cartReducer[i].price;
                                cartReducer.splice(i, 1);
                                break
                            }
                        }
                        dispatch(UpdateCart(cartReducer))
                        setCart(data.book)
                        setCartLength(cartReducer.length)
                        setFullPrice((prev) => prev - sum)
                    } else {
                        console.log(data.message) // TODO - сделать вывод сообщения
                    }
                })
        } else {
            fetch('http://localhost:9090/cart/remove-one', {
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
                        for (const bookInCart of cartReducer) {
                            if (bookInCart.hash === book.hash) {
                                bookInCart.amount = bookInCart.amount - 1;
                                break
                            }
                        }
                        dispatch(UpdateCart(cartReducer))
                        setCart(data.book)
                        setFullPrice((prev) => prev - data.book.price)
                    } else {
                        console.log(data.message) // TODO - сделать вывод сообщения
                    }
                })
        }
    }

    return <button type="button" onClick={removeOne}>-</button>
}