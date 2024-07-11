import {Header} from "./Header"
import {Footer} from "./Footer"
import {useNavigate} from "react-router-dom"
import {useEffect} from "react"

const accessUrls = [
    "",
    "book",
    "auth"
]

export const PageWrap = ({cartLength, local, children}) => {
    const navigate = useNavigate()

    useEffect(() => {
        const url = window.location.href.substring(22).split("/")[0]
        if (local.token === null && !accessUrls.includes(url)) return navigate("/auth")
    }, [local.token, navigate]);

    return <>
        <Header cartLength={cartLength} local={local} />
            {children}
        <Footer/>
    </>
}