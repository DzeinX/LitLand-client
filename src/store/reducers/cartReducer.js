const UPDATE_CART = "ADD_TO_CART"

// const uploadAddToCart = async (hashBook, hashUser) => {
//     let cartEntry = {}
//     await fetch("" + hashUser + "/" + hashBook)
//         .then(response => response.json())
//         .then(data => cartEntry = data)
//     return cartEntry
// }

export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case UPDATE_CART:
            return action.payload
        default:
            return state;
    }
}

export const UpdateCart = (payload) => ({type: UPDATE_CART, payload: payload})