import {useState} from "react";

export const useMessage = () => {
    const [message, setMessage] = useState("")
    const [typeMessage, setTypeMessage] = useState("warning")

    return {
        message: message,
        setMessage: setMessage,
        typeMessage: typeMessage,
        setTypeMessage: setTypeMessage,
    }
}