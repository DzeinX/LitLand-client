let genres = []

await fetch('http://localhost:9090/genres/all', {
    method: 'GET', mode: 'cors', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
    }
}).then(response => response.json())
    .then(data => genres = data)

export const genreReducer = (state = genres, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

