import initialState from '../store/initialState';
import types from '../actions-types';

const searchReducer = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
        case types.SAVE_INPUT:
            return {
                ...state,
                input: payload
            };

        case types.FETCHDATA:
            return {
                ...state,
                countryInfo: payload
            };
        case types.ERROR_HANDLER:
            return {
                ...state,
                error: payload
            };
        case types.SPINNER:
            return {
                ...state,
                spinnerLoader: payload
            };
        default:
            return state;
    }
};

export default searchReducer;
