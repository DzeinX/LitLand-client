import {memo} from "react";

export const Header = memo(({cartLength}) => {
    return <header>
        <a href="/" style={{marginRight: "10px"}}>Книги</a>
        <a href="/employee/add-book" style={{marginRight: "10px"}}>Добавить книгу</a>
        <a href="/cart">Корзина{cartLength === 0 ? " " : " (" + cartLength + ")"}</a>
    </header>
})