import {useState} from "react";

export const useAuth = (isWithSet = true) => {
    const [local, setLocal] = useState(() => {
        return {
            token: localStorage.getItem("token") || null,
            role: localStorage.getItem("role") || null,
            id: localStorage.getItem("id") || null,
            sub: localStorage.getItem("sub") || null,
            exp: localStorage.getItem("exp") || null
        }
    })

    return isWithSet ? [local, setLocal] : local
}