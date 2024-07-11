import {SubmitButton} from "../form/SubmitButton"
import {useState} from "react"
import {authTypes} from "./AuthController"
import {useDispatch} from "react-redux"
import {UpdateCart} from "../../store/reducers/cartReducer"
import styles from '../../static/css/LoginForm.module.css'

export const LoginForm = ({local, setLocal, authType, setAuthType, setMessage, setTypeMessage}) => {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    const signIn = (e) => {
        e.preventDefault()
        setIsLoading(true)

        const data = new FormData(e.target)

        fetch('http://localhost:9090/auth/sign-in', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
            },
            body: JSON.stringify({
                username: data.get("username"),
                password: data.get("password"),
            }),
        }).then(response => {
            if (!response.redirected) {
                return response.json()
            } else {
                return {token: null, message: "Не правильный логин или пароль"}
            }
        })
            .then(data => {
                if (data.token !== null) {
                    const userData = JSON.parse(atob(data.token.split(".")[1]))
                    localStorage.setItem("token", data.token)
                    localStorage.setItem("role", userData.role)
                    localStorage.setItem("id", userData.id)
                    localStorage.setItem("sub", userData.sub)
                    localStorage.setItem("exp", userData.exp)
                    setLocal({...userData, token: data.token})

                    dispatch(UpdateCart(data.cart))

                    setMessage("Добро пожаловать")
                    setTypeMessage("success")
                } else {
                    setMessage(data.message)
                    setTypeMessage("warning")
                }
                setIsLoading(false)
            })
    }

    if (local.token !== null || authType === authTypes.REGISTER) return null

    return <div className={styles["login-form"]}>
        <form onSubmit={signIn} className={styles["form"]}>
            <h1 className={styles["title"]}>Вход</h1>
            <label>
                <div className={styles["input-title"]}>Логин</div>
                <input type="text" name="username" className={styles["input"]} required autoFocus/>
            </label>
            <label>
                <div className={styles["input-title"]}>Пароль</div>
                <input type="password" name="password" className={styles["input"]} required/>
            </label>
            <SubmitButton isLoading={isLoading}>Войти</SubmitButton>
        </form>
        <button className={styles["to-registration"]} onClick={() => setAuthType(authTypes.REGISTER)}>Ещё не зарегистрировались?</button>
    </div>
}