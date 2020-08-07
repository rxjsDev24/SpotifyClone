import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const InitialState = {
    newReleases: null,
    categories: null,
    featured: null,
    error: null
}
const setNewReleases = (state, action) => {
    return updateObject(state, {
        newReleases: action.newReleases
    })
}

const setCategories = (state, action) => {
    return updateObject(state, {
        categories: action.categories
    })
}
const setFeatured = (state, action) => {
    return updateObject(state, {
        featured: action.featured
    })
}

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.SET_NEW_RELEASES: return setNewReleases(state, action);
        case actionTypes.SET_CATEGORIES: return setCategories(state, action);
        case actionTypes.SET_FEATURED: return setFeatured(state, action);
        default:
            return state;
    }
}
export default reducer;