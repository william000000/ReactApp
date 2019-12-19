import initialState from '../store/initialState';
import types from '../actions-types';

const searchReducer = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
        case types.SEARCH_START:
            return {
                ...state,
                countryInfo: payload
            };
        case types.SAVE_INPUT:
            return {
                input: payload
            };
        default: return state;
    }
};

export default searchReducer;
