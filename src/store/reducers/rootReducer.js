import {combineReducers} from "redux"
import {cartReducer} from "./cartReducer"
import {languageReducer} from "./languageReducer"
import {genreReducer} from "./genreReducer";
import {publisherReducer} from "./publisherReducer";

export const rootReducer = combineReducers({
    cartReducer: cartReducer,
    languageReducer: languageReducer,
    genreReducer: genreReducer,
    publisherReducer: publisherReducer,
})