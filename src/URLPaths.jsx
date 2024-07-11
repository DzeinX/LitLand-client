import {createBrowserRouter} from "react-router-dom"
import React from "react"
import {HomePage} from "./pages/HomePage"
import {AddBookPage} from "./pages/AddBookPage"
import {BookPage} from "./pages/BookPage"
import {CartPage} from "./pages/CartPage"
import {NotFoundPage} from "./pages/NotFoundPage"
import {AuthPage} from "./pages/AuthPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: "/employee/add-book",
        element: <AddBookPage/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: "/book/:hash",
        element: <BookPage/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: "/cart",
        element: <CartPage/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: "/auth",
        element: <AuthPage/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: "/not-found",
        element: <NotFoundPage/>,
        errorElement: <NotFoundPage/>
    },
]);