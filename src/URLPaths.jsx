import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {HomePage} from "./pages/HomePage";
import {AddBookPage} from "./pages/AddBookPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <h1>Oops, have an error 404</h1>
    },
    {
        path: "/add-book",
        element: <AddBookPage />,
        errorElement: <h1>Oops, have an error 404</h1>
    },
]);