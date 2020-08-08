import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const InitialState = {
    error: null,
    newReleases: null,
    featured: null,
    shows: null,
    romance: null,
    edm: null,
    home: null,
    party: null,
    toplists: null,
    punjabi: null,
    indie: null,
    mood: null,
    workout: null,
    bollywood: null,
    chill: null,
    travel: null
}

const setRomance = (state, action) => {
    return updateObject(state, {
        romance: action.romance
    })
}

const setBollywood = (state, action) => {
    return updateObject(state, {
        bollywood: action.bollywood
    })
}

const setToplists = (state, action) => {
    return updateObject(state, {
        toplists: action.toplists
    })
}

const setPunjabi = (state, action) => {
    return updateObject(state, {
        punjabi: action.punjabi
    })
}

const setIndie = (state, action) => {
    return updateObject(state, {
        indie: action.indie
    })
}

const setHome = (state, action) => {
    return updateObject(state, {
        home: action.home
    })
}

const setMood = (state, action) => {
    return updateObject(state, {
        mood: action.mood
    })
}

const setTravel = (state, action) => {
    return updateObject(state, {
        travel: action.travel
    })
}

const setParty = (state, action) => {
    return updateObject(state, {
        party: action.party
    })
}

const setWorkout = (state, action) => {
    return updateObject(state, {
        workout: action.workout
    })
}

const setChill = (state, action) => {
    return updateObject(state, {
        chill: action.chill
    })
}

const setEdm = (state, action) => {
    return updateObject(state, {
        edm: action.edm
    })
}

const setNewReleases = (state, action) => {
    return updateObject(state, {
        newReleases: action.newReleases
    })
}

const setFeatured = (state, action) => {
    return updateObject(state, {
        featured: action.featured
    })
}

const setShows = (state, action) => {
    return updateObject(state, {
        shows: action.shows
    })
}

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.SET_NEW_RELEASES: return setNewReleases(state, action);
        case actionTypes.SET_FEATURED: return setFeatured(state, action);
        case actionTypes.SET_SHOWS: return setShows(state, action);
        case actionTypes.SET_ROMANCE: return setRomance(state, action);
        case actionTypes.SET_BOLLYWOOD: return setBollywood(state, action);
        case actionTypes.SET_TOPLISTS: return setToplists(state, action);
        case actionTypes.SET_PUNJABI: return setPunjabi(state, action);
        case actionTypes.SET_INDIE: return setIndie(state, action);
        case actionTypes.SET_HOME: return setHome(state, action);
        case actionTypes.SET_MOOD: return setMood(state, action);
        case actionTypes.SET_TRAVEL: return setTravel(state, action);
        case actionTypes.SET_PARTY: return setParty(state, action);
        case actionTypes.SET_WORKOUT: return setWorkout(state, action);
        case actionTypes.SET_CHILL: return setChill(state, action);
        case actionTypes.SET_EDM: return setEdm(state, action);
        default:
            return state;
    }
}
export default reducer;