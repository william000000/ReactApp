import actionsTypes from '../actions-types';

export const saveInput = payload => {
    console.log('payload saveInput action');
    return {
        type: actionsTypes.SAVE_INPUT,
        payload
    };
};
