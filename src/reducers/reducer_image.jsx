import { FETCH_SHIBE, FETCH_CORGI } from '../actions';

export default function(state = {}, action) {

    switch(action.type) {

        case FETCH_CORGI:
        case FETCH_SHIBE:
            return action.payload;
        
        default:
            return state;
    }
}