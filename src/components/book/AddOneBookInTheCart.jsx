import {useDispatch, useSelector} from "react-redux"
import {UpdateCart} from "../../store/reducers/cartReducer"
import styles from "../../static/css/AddOneBookInTheCart.module.css"

export const AddOneBookInTheCart = ({hash, setCart, setFullPrice, setMessage, setTypeMessage, setIsLoading}) => {
    const dispatch = useDispatch()
    const cartReducer = useSelector(state => state.cartReducer)

    const addOne = () => {
        setIsLoading(true);

        fetch('http://localhost:9090/cart/add-one', {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
            },
            body: JSON.stringify({hash: hash})
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.book !== null) {
                    for (const bookInCart of cartReducer) {
                        if (bookInCart.hash === hash) {
                            bookInCart.amount = bookInCart.amount + 1;
                            break
                        }
                    }
                    dispatch(UpdateCart(cartReducer))
                    setCart(data.book)
                    setFullPrice((prev) => prev + data.book.price)
                } else {
                    setMessage(data.message)
                    setTypeMessage("warning")
                }
                setIsLoading(false);
            })
    }

    return <button
        type="button"
        onClick={addOne}
        className={styles["add-one"]}
        title="Больше"
    >+</button>
}