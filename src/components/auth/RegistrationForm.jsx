import {useState} from "react";
import {SubmitButton} from "../form/SubmitButton";
import {authTypes} from "./AuthController";
import styles from '../../static/css/RegistrationForm.module.css'
import {UpdateCart} from "../../store/reducers/cartReducer";
import {useDispatch, useSelector} from "react-redux";

export const RegistrationForm = ({setAuthType, authType, local, setLocal, setTypeMessage, setMessage}) => {
    const [isLoading, setIsLoading] = useState(false)
    const cartReducer = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()

    const signUp = (e) => {
        e.preventDefault()
        setIsLoading(true)

        const data = new FormData(e.target)

        if (data.get("password1") !== data.get("password2")) {
            setMessage("Пароли не совпадают")
            setTypeMessage("warning")
            setIsLoading(false)
            return
        }

        fetch('http://localhost:9090/auth/sign-up', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
            },
            body: JSON.stringify({
                username: data.get("username"),
                password: data.get("password1"),
            }),
        }).then(response => {
            if (!response.redirected) {
                return response.json()
            } else {
                return {token: null, message: "Пользователь с таким именем уже существует"}
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

                    setMessage("Регистрация успешна! Добро пожаловать")
                    setTypeMessage("success")
                } else {
                    setMessage(data.message)
                    setTypeMessage("warning")
                }
                setIsLoading(false)
            })
    }

    if (local.token !== null || authType === authTypes.LOGIN) return null

    return <div className={styles["registration-form"]}>
        <form onSubmit={signUp} className={styles["form"]}>
            <h1 className={styles["title"]}>Регистрация</h1>
            <label>
                <div className={styles["input-title"]}>Логин</div>
                <input type="text" name="username" required autoFocus className={styles["input"]}/>
            </label>
            <label>
                <div className={styles["input-title"]}>Пароль</div>
                <input type="password" name="password1" required className={styles["input"]}/>
            </label>
            <label>
                <div className={styles["input-title"]}>Пароль ещё раз</div>
                <input type="password" name="password2" required className={styles["input"]}/>
            </label>
            <SubmitButton isLoading={isLoading}>Зарегистрироваться</SubmitButton>
        </form>
        <button className={styles["to-login"]} onClick={() => setAuthType(authTypes.LOGIN)}>Уже есть аккаунт</button>
    </div>
}