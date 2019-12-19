import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import {
    composeWithDevTools
} from 'redux-devtools-extension';
// import initialState from './initialState';
import allReducers from '../reducers';

// const hostname = window.location.hostname;


// export default createStore(
//     reducers,
//     initialState,
//     hostname === 'localhost' ?
//         composeWithDevTools(applyMiddleware(thunk)) :
//         applyMiddleware(thunk)
// );

const composeEnhancers = composeWithDevTools({});

const store = createStore(
    allReducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;