import {
    combineReducers
} from 'redux';
import searchReducer from './searchReducer';
import initialState from '../store/initialState';

const allReducers = combineReducers({
    initialState,
    searchReducer
});

export default allReducers;
