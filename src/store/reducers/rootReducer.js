import {combineReducers} from "redux"
import {cartReducer} from "./cartReducer"
import {languageReducer} from "./languageReducer"

export const rootReducer = combineReducers({
    cartReducer: cartReducer,
    languageReducer: languageReducer,
})