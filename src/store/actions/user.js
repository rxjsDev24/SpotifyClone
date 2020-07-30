import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const getUserSuccess = (user, origin, uri) => {
    return {
        type: actionTypes.GET_USER_SUCCESS,
        name: user,
        country: origin,
        uri: uri
    }
}

export const getUserFail = (error) => {
    return {
        type: actionTypes.GET_USER_FAIL,
        error: error
    }
}

export const getUser = (token) => {
    return dispatch => {
        axios.get('/me', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                dispatch(getUserSuccess(response.data.display_name, response.data.country, response.data.images[0].url));
                console.log(response.data);
            })
            .catch(err => {
                dispatch(getUserFail(err))
            })

    }
}