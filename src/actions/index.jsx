import axios from 'axios';

export const FETCH_JOKE = 'FETCH_JOKE';
export const FETCH_IMAGE = 'FETCH_IMAGE';
export const FETCH_DOG = 'FETCH_DOG';
export const FETCH_CAT = 'FETCH_CAT';

const JOKE_URL = `https://icanhazdadjoke.com`;
const DOG_URL = `https://dog.ceo/api/breeds/image/random`;
const CAT_URL = `https://cataas.com/cat`;

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

export function fetchImage(type) {
    let url = DOG_URL;

    switch(type) {
        case FETCH_CAT:
            url = CAT_URL;
            break;

        case FETCH_DOG:
        default:
            url = DOG_URL
    }
    
    const request = axios.get(url);

    return {
        type: FETCH_IMAGE,
        payload: request
    }
}
