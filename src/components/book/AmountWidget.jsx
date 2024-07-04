import styles from "../../static/css/AddRemoveCartWidget.module.css";
import {RemoveOneBookFromTheCart} from "./RemoveOneBookFromTheCart"
import {InCartAmount} from "./InCartAmount"
import {AddOneBookInTheCart} from "./AddOneBookInTheCart"

export const AmountWidget = ({hash, setCartLength, cart, setCart, isLoading, setFullPrice, setMessage, setTypeMessage, setIsLoading}) => {
    return <div className={styles["amount-widget"]}>
        <RemoveOneBookFromTheCart
            hash={hash}
            setCart={setCart}
            amount={cart.amount}
            setCartLength={setCartLength}
            setFullPrice={setFullPrice}
            setMessage={setMessage}
            setTypeMessage={setTypeMessage}
            setIsLoading={setIsLoading}
        />
        <InCartAmount isLoading={isLoading} amount={cart.amount}/>
        <AddOneBookInTheCart
            hash={hash}
            setCart={setCart}
            setFullPrice={setFullPrice}
            setMessage={setMessage}
            setTypeMessage={setTypeMessage}
            setIsLoading={setIsLoading}
        />
    </div>
}