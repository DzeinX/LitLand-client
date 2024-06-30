import {useDispatch} from "react-redux";
import {UpdateCart} from "../../store/reducers/cartReducer";

export const AddOneBookInTheCart = ({book, cartReducer, setCart, setFullPrice}) => {
    const dispatch = useDispatch();

    const addOne = () => {
        fetch('http://localhost:9090/cart/add-one', {
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
                            bookInCart.amount = bookInCart.amount + 1;
                            break
                        }
                    }
                    dispatch(UpdateCart(cartReducer))
                    setCart(data.book)
                    setFullPrice((prev) => prev + data.book.price)
                } else {
                    console.log(data.message) // TODO - сделать вывод сообщения
                }
            })
    }

    return <button type="button" onClick={addOne}>+</button>
}