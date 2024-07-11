import {MessageToUser} from "../MessageToUser";
import {CartList} from "./CartList";
import {CartTotal} from "./CartTotal";
import {PurchaseButton} from "./PurchaseButton";
import {useState} from "react";
import {useSelector} from "react-redux";

export const CartController = ({setCartLength, cartLength}) => {
    const cartReducer = useSelector(state => state.cartReducer)
    const [message, setMessage] = useState("");
    const [typeMessage, setTypeMessage] = useState("warning");
    const [fullPrice, setFullPrice] = useState(() => {
        let sum = 0;
        for (const book of cartReducer) {
            sum += (book.price * book.amount)
        }
        return sum
    })

    return <div>
        <MessageToUser message={message} setMessage={setMessage} type={typeMessage}/>
        <CartList
            setCartLength={setCartLength}
            setFullPrice={setFullPrice}
            setMessage={setMessage}
            setTypeMessage={setTypeMessage}
        />
        <CartTotal fullPrice={fullPrice}/>
        <PurchaseButton
            cartLength={cartLength}
            setMessage={setMessage}
            setTypeMessage={setTypeMessage}
            setCartLength={setCartLength}
        />
    </div>
}