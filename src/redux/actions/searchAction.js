import actionsTypes from '../actions-types';
import axios from 'axios';
import { notifyError } from '../../helper/notification';
import dotenv from 'dotenv';
dotenv.config();


export const errorHandle = (data) => ({
    type: actionsTypes.ERROR_HANDLER,
    payload: data
});
export const spinnerLoader = (data) => ({
    type: actionsTypes.SPINNER,
    payload: data
});
export const searchByCity = payload => async dispatch => {
    try {
        dispatch(spinnerLoader(true));
        const result = await axios(`${process.env.FETCH_DATA_URL}/${payload}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": `${process.env.FETCH_DATA_HOST}`,
                "x-rapidapi-key": `${process.env.FETCH_DATA_KEY}`
            }
        });

        dispatch({ type: actionsTypes.FETCHDATA, payload: result.data[0] });
        dispatch(spinnerLoader(false));
    } catch (err) {
        dispatch(errorHandle(err.message));
        notifyError(err.message);
        dispatch(spinnerLoader(false));
    }
};

