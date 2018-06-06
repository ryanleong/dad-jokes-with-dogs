import { combineReducers } from 'redux';

import JokeReducer from './reducer_joke';
import ImageReducer from './reducer_image';

const rootReducer = combineReducers({
    joke: JokeReducer,
    image: ImageReducer
});

export default rootReducer;