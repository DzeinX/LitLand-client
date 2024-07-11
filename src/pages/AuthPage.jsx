import {PageWrap} from "../components/PageWrap"
import styles from "../static/css/Page.module.css"
import {useSelector} from "react-redux"
import {AuthController} from "../components/auth/AuthController";
import {useAuth} from "../hooks/useAuth";


export const AuthPage = () => {
    const cartReducer = useSelector(state => state.cartReducer)
    const [local, setLocal] = useAuth()

    return <div className={styles["page"]}>
        <PageWrap cartLength={cartReducer.length} local={local}>
            <AuthController setLocal={setLocal} local={local} />
        </PageWrap>
    </div>
}