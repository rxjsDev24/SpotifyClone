import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const setTracksFail = (error) => {
    return {
        type: actionTypes.SET_TRACKS,
        error: error
    }
}

export const setTracks = (tracks) => {
    return {
        type: actionTypes.SET_TRACKS,
        tracks: tracks
    }
}

export const getTracks = (token) => {
    return dispatch => {
        axios.get('/playlists/37i9dQZF1DX5Ejj0EkURtP', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                console.log(response.data)
                dispatch(setTracks(response.data))
            })
            .catch(err => {
                dispatch(setTracksFail(err.response.data))
            })
    }
}
