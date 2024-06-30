import {RouterProvider} from "react-router-dom"
import {router} from "../URLPaths"
import React from "react"

export const PageRoot = () => {
    return <div className="page-root">
        <RouterProvider router={router}></RouterProvider>
    </div>
}