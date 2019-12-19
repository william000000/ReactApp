import actionsTypes from '../actions-types';

export const fetchData = payload => {
    return {
        type: actionsTypes.FETCHDATA,
        payload
    };
};
