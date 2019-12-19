import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import {
    composeWithDevTools
} from 'redux-devtools-extension';
import allReducers from '../reducers';

const composeEnhancers = composeWithDevTools({});

const store = createStore(
    allReducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;
