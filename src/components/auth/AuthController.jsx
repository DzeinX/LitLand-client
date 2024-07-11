import {useState} from "react"
import {LoginForm} from "./LoginForm"
import {RegistrationForm} from "./RegistrationForm"
import {LogoutForm} from "./LogoutForm"
import {MessageToUser} from "../MessageToUser";
import {useMessage} from "../../hooks/useMessage";

export const authTypes = {
        LOGIN: "login",
        REGISTER: "register",
    }

export const AuthController = ({local, setLocal}) => {
    const [authType, setAuthType] = useState(authTypes.LOGIN)
    const {message, setMessage, typeMessage, setTypeMessage} = useMessage()

    return <>
        <MessageToUser
            message={message}
            setMessage={setMessage}
            type={typeMessage}
        />
        <LoginForm
            authType={authType}
            setAuthType={setAuthType}
            local={local}
            setLocal={setLocal}
            setMessage={setMessage}
            setTypeMessage={setTypeMessage}
        />
        <RegistrationForm
            authType={authType}
            setAuthType={setAuthType}
            local={local}
            setLocal={setLocal}
            setMessage={setMessage}
            setTypeMessage={setTypeMessage}
        />
        <LogoutForm
            setAuthType={setAuthType}
            local={local}
            setLocal={setLocal}
            setMessage={setMessage}
            setTypeMessage={setTypeMessage}
        />
    </>
}