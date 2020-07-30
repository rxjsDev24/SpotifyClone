import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    name: null,
    image_uri: null,
    country: null,
    error: null
}

const getUserSuccess = (state, action) => {
    return updateObject(state, {
        name: action.name,
        country: action.country,
        image_uri: action.uri
    })
}

const getUserFail = (state, action) => {
    return updateObject(state, {
        error: action.error
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_SUCCESS: return getUserSuccess(state, action);
        case actionTypes.GET_USER_FAIL: return getUserFail(state, action);
        default:
            return state;
    }
}

export default reducer;