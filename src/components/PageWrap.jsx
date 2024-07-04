import {Header} from "./Header"
import {Footer} from "./Footer"

export const PageWrap = ({cartLength, children}) => {
    return <>
        <Header cartLength={cartLength}/>
            {children}
        <Footer/>
    </>
}