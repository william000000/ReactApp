import actionsTypes from '../actions-types';

export const searchByCity = payload => {
    return {
        type: actionsTypes.SEARCH_START,
        payload
    };
};
