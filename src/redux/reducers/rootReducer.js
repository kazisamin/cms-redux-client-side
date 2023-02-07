import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import postReducer from './postReducer';


const rootReducer = combineReducers({

    post: postReducer,
    filter: filterReducer
});

export default rootReducer;