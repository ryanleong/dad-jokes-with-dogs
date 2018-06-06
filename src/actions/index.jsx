import axios from 'axios';

export const FETCH_JOKE = 'FETCH_JOKE';
export const FETCH_SHIBE = 'FETCH_SHIBE';
export const FETCH_CORGI = 'FETCH_SHIBE';

const JOKE_URL = `https://icanhazdadjoke.com`;
const SHIBE_URL = `https://dog.ceo/api/breed/shiba/images/random`;
const CORGI_URL = `https://dog.ceo/api/breed/corgi/images/random`;

export function fetchJoke() {
    const request = axios.get(
        `${JOKE_URL}`, 
        {
            headers: {
                'Accept': 'application/json'
            }
        }
    );

    return {
        type: FETCH_JOKE,
        payload: request
    }
}

export function fetchShibe() {
    const request = axios.get(`${SHIBE_URL}`);

    return {
        type: FETCH_SHIBE,
        payload: request
    }
}

export function fetchCorgi() {
    const request = axios.get(`${CORGI_URL}`);

    return {
        type: FETCH_CORGI,
        payload: request
    }
}