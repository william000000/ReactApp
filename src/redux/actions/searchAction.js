import actionsTypes from '../actions-types';
import axios from 'axios';
import { FETCH_DATA_URL, FETCH_DATA_KEY, FETCH_DATA_HOST } from '../../constantVariable';
export const searchByCity = payload => {
    return async (dispatch) => {
        const result = await axios(`${FETCH_DATA_URL}/${payload}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": `${FETCH_DATA_HOST}`,
                "x-rapidapi-key": `${FETCH_DATA_KEY}`
            }
        });
        dispatch({ type: actionsTypes.FETCHDATA, payload: result.data[0] });
    };
};
