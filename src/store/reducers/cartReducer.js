const UPDATE_CART = "ADD_TO_CART"

// const uploadAddToCart = async (hashBook, hashUser) => {
//     let cartEntry = {}
//     await fetch("" + hashUser + "/" + hashBook)
//         .then(response => response.json())
//         .then(data => cartEntry = data)
//     return cartEntry
// }

let booksInCart = []
let userId
if (localStorage.getItem('id') === null) {
    userId = ""
} else {
    userId = localStorage.getItem('id') === undefined ? "" : localStorage.getItem('id')
}

await fetch('http://localhost:9090/cart', {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
    },
    body: JSON.stringify({userId: userId}),
}).then(response => response.json())
    .then(data => booksInCart = data)

export const cartReducer = (state = booksInCart, action) => {
    switch (action.type) {
        case UPDATE_CART:
            return action.payload
        default:
            return state;
    }
}

export const UpdateCart = (payload) => ({type: UPDATE_CART, payload: payload})