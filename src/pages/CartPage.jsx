import {useSelector} from "react-redux"
import {useState} from "react"
import styles from "../static/css/Page.module.css"
import {MessageToUser} from "../components/MessageToUser"
import {PageWrap} from "../components/PageWrap"
import {CartList} from "../components/cart/CartList";
import {CartTotal} from "../components/cart/CartTotal";

export const CartPage = () => {
    const cartReducer = useSelector(state => state.cartReducer)
    const [cartLength, setCartLength] = useState(cartReducer.length)
    const [message, setMessage] = useState("");
    const [typeMessage, setTypeMessage] = useState("warning");
    const [fullPrice, setFullPrice] = useState(() => {
        let sum = 0;
        for (const book of cartReducer) {
            sum += (book.price * book.amount)
        }
        return sum
    })

    return <div className={styles["page"]}>
        <PageWrap cartLength={cartLength}>
            <MessageToUser message={message} setMessage={setMessage} type={typeMessage}/>
            <CartList
                setCartLength={setCartLength}
                setFullPrice={setFullPrice}
                setMessage={setMessage}
                setTypeMessage={setTypeMessage}
            />
            <CartTotal fullPrice={fullPrice}/>
        </PageWrap>
    </div>
}