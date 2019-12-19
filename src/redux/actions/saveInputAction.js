import actionsTypes from '../actions-types';

export const saveInput = payload => {
    return {
        type: actionsTypes.SAVE_INPUT,
        payload
    };
};
