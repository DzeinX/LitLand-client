let publishers = []

await fetch('http://localhost:9090/publishers/all', {
    method: 'GET', mode: 'cors', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
    }
}).then(response => response.json())
    .then(data => publishers = data)

export const publisherReducer = (state = publishers, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

