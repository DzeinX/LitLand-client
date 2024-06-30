import {ListBooks} from "../components/book/ListBooks"
import {Header} from "../components/Header";
import {useSelector} from "react-redux";

export const HomePage = () => {
    const cartReducer = useSelector(state => state.cartReducer)

    return <div className="home-page">
        <Header cartLength={cartReducer.length}/>
        <ListBooks/>
    </div>
}