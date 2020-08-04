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
            })
            .catch(err => {
                dispatch(getUserFail(err))
            })

    }
}

export const setPlaylist = (playlists) => {
    return {
        type: actionTypes.SET_PLAYLIST,
        playlist: playlists
    }
}

export const getUserPlaylists = (token) => {
    return dispatch => {
        axios.get('/me/playlists', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                dispatch(setPlaylist(response.data))
            })
    }
}