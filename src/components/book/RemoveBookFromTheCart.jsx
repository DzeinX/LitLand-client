import {useDispatch} from "react-redux";
import {UpdateCart} from "../../store/reducers/cartReducer";

export const RemoveBookFromTheCart = ({book, cartReducer, setCart, setCartLength, setFullPrice}) => {
    const dispatch = useDispatch();

    const removeFromTheCart = () => {
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

    }

    return <button type="button" onClick={removeFromTheCart}>Удалить из корзины</button>
}