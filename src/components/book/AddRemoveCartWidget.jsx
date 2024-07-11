import {RemoveBookFromTheCart} from "./RemoveBookFromTheCart"
import styles from "../../static/css/AddRemoveCartWidget.module.css"
import {AmountWidget} from "./AmountWidget"

export const AddRemoveCartWidget = ({hash, cart, setCart, setCartLength, setFullPrice, setMessage, setTypeMessage, isLoading, setIsLoading}) => {
    return <div className={styles["amount-control"]}>
        <AmountWidget
            hash={hash}
            cart={cart}
            setCartLength={setCartLength} i
            isLoading={isLoading}
            setCart={setCart}
            setFullPrice={setFullPrice}
            setIsLoading={setIsLoading}
            setMessage={setMessage}
            setTypeMessage={setTypeMessage}
        />
        <div className={styles["remove-widget"]}>
            <RemoveBookFromTheCart
                hash={hash}
                setCart={setCart}
                setCartLength={setCartLength}
                setFullPrice={setFullPrice}
                setMessage={setMessage}
                setTypeMessage={setTypeMessage}
                setIsLoading={setIsLoading}
            />
        </div>
    </div>
}