import {
    countryInfo as initialState
} from '../store/initialState';
import SearchActionsTypes from '../actions-types';

export default (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
        case SearchActionsTypes.SEARCH_START:
            return {
                ...state,
                countryInfo: payload
            };
    }
};
