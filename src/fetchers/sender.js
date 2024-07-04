const constructSender = (url, method, dataJson) => {
    return fetch(url, {
        method: method,
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000/',
        },
        body: dataJson
    })
        .then((response) => response.json())
}

export const senderPost = (url, data) => {
    return constructSender(url, "POST", data)
}

export const senderPut = (url, data) => {
    return constructSender(url, "PUT", data)
}

export const senderDelete = (url, data) => {
    return constructSender(url, "DELETE", data)
}