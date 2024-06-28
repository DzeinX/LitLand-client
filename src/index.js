import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom"
import {router} from "./URLPaths"
import {Provider} from "react-redux"
import {Header} from "./components/Header"
import {store} from "./store/store"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Header/>
        <RouterProvider router={router}></RouterProvider>
    </Provider>
);
