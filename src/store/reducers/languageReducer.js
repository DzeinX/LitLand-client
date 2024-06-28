let languages = []

await fetch('http://localhost:9090/language/all', {
    method: 'GET', mode: 'cors', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
    }
}).then(response => response.json())
    .then(data => languages = data)

export const languageReducer = (state = languages, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

