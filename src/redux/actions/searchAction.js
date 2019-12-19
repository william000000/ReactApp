import searchActionsTypes from '../actions-types';

export const searchByCity = payload => {
    return {
        type: searchActionsTypes.SEARCH_START
    };
};
