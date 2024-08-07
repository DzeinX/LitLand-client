import {useDispatch, useSelector} from "react-redux"
import {UpdateCart} from "../../store/reducers/cartReducer"
import styles from "../../static/css/RemoveBookFromTheCart.module.css"
import {GoTrash} from "react-icons/go"
import {IconContext} from "react-icons"

export const RemoveBookFromTheCart = ({
                                          hash,
                                          setCart,
                                          setCartLength,
                                          setFullPrice,
                                          setMessage,
                                          setTypeMessage,
                                          setIsLoading
                                      }) => {
    const dispatch = useDispatch()
    const cartReducer = useSelector(state => state.cartReducer)

    const removeFromTheCart = () => {
        setIsLoading(true)

        fetch('http://localhost:9090/cart/remove', {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
            },
            body: JSON.stringify({hash: hash, userId: localStorage.getItem('id')})
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.verdict === "SUCCESS") {
                    let sum = 0
                    for (let i = 0; i < cartReducer.length; i++) {
                        if (cartReducer[i].hash === hash) {
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
                    setMessage(data.message)
                    setTypeMessage("warning")
                }
                setIsLoading(false)
            })
    }

    return <button
        type="button"
        onClick={removeFromTheCart}
        className={styles["remove-all"]}
        title="Удалить из корзины"
    >
        <IconContext.Provider value={{color: "#aaa", className: styles["trash-icon"]}}>
            <GoTrash size="40"/>
        </IconContext.Provider>
    </button>
}