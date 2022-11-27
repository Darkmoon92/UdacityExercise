const BASE_URL = 'https://reactnd-books-api.udacity.com';

let token = localStorage.token;
if (!token)
    token = localStorage.token = Math.random().toString(36).slice(-8);

const headers = {
    'Accept': 'application/json',
    'Authorization': token
};

export const get = (uri) =>
    fetch(`${BASE_URL}${uri}`, { headers })
        .then(res => res.json());

export const post = (uri, query) =>
    fetch(`${BASE_URL}${uri}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(query)
    })
        .then(res => res.json());

export const put = (uri, query) =>
    fetch(`${BASE_URL}${uri}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(query)
    })
        .then(res => res.json());