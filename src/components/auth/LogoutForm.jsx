import {authTypes} from "./AuthController"
import {SubmitButton} from "../form/SubmitButton"
import {useState} from "react"
import {useSelector} from "react-redux"
import {PurchasingBooks} from "../cart/PurchasingBooks";

export const LogoutForm = ({local, setAuthType, setLocal, setTypeMessage, setMessage}) => {
    const [isLoading, setIsLoading] = useState(false)
    const cartReducer = useSelector(state => state.cartReducer)

    const logout = (e) => {
        e.preventDefault()
        setIsLoading(true)

        fetch('http://localhost:9090/auth/logout', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${local.token}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
            }
        })
            .then(response => {
                if (response.status === 200) {
                    localStorage.clear()
                    setLocal({token: null, role: null, id: null, sub: null, exp: null})
                    setAuthType(authTypes.LOGIN)
                } else {
                    setMessage("Произошла непредвиденная ошибка")
                    setTypeMessage("error")
                }
            }).finally(() => setIsLoading(false))
    }

    if (local.token === null) return null

    return <form onSubmit={logout} style={{width: "50%", margin: "0 auto"}}>
        <div style={{marginBottom: "20px", fontSize: "1.3rem"}}>{local.sub}</div>
        <div style={{fontSize: "1rem", fontWeight: "300"}}>
            {cartReducer.length === 0
                ? <span>У вас в корзине нет книг. <a href="/">Посмотрите каталок книг</a></span>
                : <span>У вас в корзине есть книги. <a href="/cart">В корзину</a></span>
            }
        </div>
        <PurchasingBooks/>
        <SubmitButton isLoading={isLoading}>Выйти</SubmitButton>
    </form>
}