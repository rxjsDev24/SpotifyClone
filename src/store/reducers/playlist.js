import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const InitialState = {
    tracks: [],
    error: null
}

const setTracksFail = (state, action) => {
    return updateObject(state, {
        error: action.error
    })
}

const setTracks = (state, action) => {
    return updateObject(state, {
        tracks: action.tracks
    })
}

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TRACKS: return setTracks(state, action);
        case actionTypes.SET_TRACKS_FAIL: return setTracksFail(state, action);
        default:
            return state;
    }
}

export default reducer;