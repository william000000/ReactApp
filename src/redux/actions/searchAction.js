import actionsTypes from '../actions-types';
import axios from 'axios';

export const searchByCity = payload => {
    return async (dispatch) => {
        console.log('searchByCity payload action', payload);

        const result = await axios(`https://restcountries-v1.p.rapidapi.com/capital/${payload}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
                "x-rapidapi-key": "41596226ddmshf1cb4f653d7a3adp18c476jsn08b29ebf2678"
            }
        });
        dispatch({ type: actionsTypes.FETCHDATA, payload: result.data[0] });
    };
};
