import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    name: null,
    imageUrl: null,
    country: null,
    error: null,
    playlist: null
}

const getUserSuccess = (state, action) => {
    return updateObject(state, {
        name: action.name,
        country: action.country,
        imageUrl: action.uri
    })
}

const getUserFail = (state, action) => {
    return updateObject(state, {
        error: action.error
    })
}

const setPlaylist = (state, action) => {
    return updateObject(state, {
        playlist: action.playlist
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_SUCCESS: return getUserSuccess(state, action);
        case actionTypes.GET_USER_FAIL: return getUserFail(state, action);
        case actionTypes.SET_PLAYLIST: return setPlaylist(state, action);
        default:
            return state;
    }
}

export default reducer;