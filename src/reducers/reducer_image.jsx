import { FETCH_IMAGE } from '../actions';

export default function(state = {}, action) {

    switch(action.type) {

        case FETCH_IMAGE:
            return action.payload;
        
        default:
            return state;
    }
}