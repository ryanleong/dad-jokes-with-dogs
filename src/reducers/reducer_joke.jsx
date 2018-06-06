import { FETCH_JOKE } from '../actions';

export default function(state = {}, action) {

    switch(action.type) {

        case FETCH_JOKE:
            return action.payload;

        default:
            return state;
    }
}