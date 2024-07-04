const constructFetcher = (url, method) => {
    return fetch(url, {
        method: method,
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000/',
        }
    }).then((res) => res.json())
}

export const fetcherGet = (url) => {
    return constructFetcher(url, "GET")
}

export const fetcherPost = (url) => {
    return constructFetcher(url, "POST")
}

export const fetcherPut = (url) => {
    return constructFetcher(url, "PUT")
}

export const fetcherDelete = (url) => {
    return constructFetcher(url, "DELETE")
}

export const fetcherImage = (url) => {
    return fetch(url, {
        method: "GET",
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000/',
        }
    }).then((res) => res.blob()).then((blob) => URL.createObjectURL(blob))
}