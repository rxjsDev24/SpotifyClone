import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';
import { shuffleArray } from '../../shared/utility'

const setNewReleasesFail = (data) => {
    return {
        type: actionTypes.SET_NEW_RELEASES_FAIL,
        error: data
    }
}

const setNewReleases = (data) => {
    return {
        type: actionTypes.SET_NEW_RELEASES,
        newReleases: data
    }
}

const setFeatured = (data) => {
    return {
        type: actionTypes.SET_FEATURED,
        featured: data
    }
}

const setShows = (data) => {
    return {
        type: actionTypes.SET_SHOWS,
        shows: data
    }
}

const setRomance = (data) => {
    return {
        type: actionTypes.SET_ROMANCE,
        romance: data
    }
}

const setBollywood = (data) => {
    return {
        type: actionTypes.SET_BOLLYWOOD,
        bollywood: data
    }
}
const setToplists = (data) => {
    return {
        type: actionTypes.SET_TOPLISTS,
        toplists: data
    }
}

const setPunjabi = (data) => {
    return {
        type: actionTypes.SET_PUNJABI,
        punjabi: data
    }
}

const setIndie = (data) => {
    return {
        type: actionTypes.SET_INDIE,
        indie: data
    }
}

const setHome = (data) => {
    return {
        type: actionTypes.SET_HOME,
        home: data
    }
}

const setMood = (data) => {
    return {
        type: actionTypes.SET_MOOD,
        mood: data
    }
}

const setTravel = (data) => {
    return {
        type: actionTypes.SET_TRAVEL,
        travel: data
    }
}

const setParty = (data) => {
    return {
        type: actionTypes.SET_PARTY,
        party: data
    }
}

const setWorkout = (data) => {
    return {
        type: actionTypes.SET_WORKOUT,
        workout: data
    }
}

const setChill = (data) => {
    return {
        type: actionTypes.SET_CHILL,
        chill: data
    }
}

const setEdm = (data) => {
    return {
        type: actionTypes.SET_EDM,
        edm: data
    }
}

const getNewReleases = (token) => {
    return dispatch => {
        axios.get('/browse/new-releases?country=IN', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                const albums = [];
                response.data.albums.items.map(item => {
                    return albums.push({
                        id: item.id,
                        images: item.images,
                        name: item.name,
                        type: item.type,
                        uri: item.uri,
                        artists: item.artists,
                        release_date: item.release_date,
                        href: item.href
                    })
                })
                shuffleArray(albums);
                dispatch(setNewReleases(albums));
            })
            .catch(err => {
                dispatch(setNewReleasesFail(err))
            });
    }
}


const getFeatured = (token) => {
    return dispatch => {
        axios.get('/browse/featured-playlists?country=IN', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                const playlists = [];
                response.data.playlists.items.map(item => {
                    return playlists.push({
                        id: item.id,
                        images: item.images,
                        name: item.name,
                        type: item.type,
                        uri: item.uri,
                        href: item.href,
                        description: item.description
                    })
                })
                // shuffleArray(playlists);
                dispatch(setFeatured(playlists))
            })
            .catch(err => {
                console.log(err.response);
            });
    }
}

const getShows = (token) => {
    return dispatch => {
        axios.get('/shows?ids=0diKZSPsqWAg7Lsmrat5nF,5EqqB52m2bsr4k1Ii7sStc,1o3zif4YaEzELBDjzvZqAw,2JUljwaD9fNSeq8Vy3UAUp,5CfCWKI5pZ28U0uOzXkDHe,0naX2ZM0GZnsqQZxVHTYhB,71mvGXupfKcmO6jlmOJQTP,0ofXAdFIQQRsCYj9754UFx,1SW2viiIiTnnKN28QG4Siz&market=IN', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                const shows = [];
                response.data.shows.map(show => {
                    return shows.push({
                        description: show.description,
                        name: show.name,
                        uri: show.uri,
                        id: show.id,
                        images: show.images,
                        href: show.href,
                        type: show.type
                    })
                })
                dispatch(setShows(shows))
            })
            .catch(err => {
                console.log(err.response);
            });
    }
}

const getDiffGenre = (token) => {
    return dispatch => {

        //MOOD
        axios.get('/browse/categories/mood/playlists?country=IN', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                const playlists = [];
                response.data.playlists.items.map(item => {
                    return playlists.push({
                        id: item.id,
                        images: item.images,
                        name: item.name,
                        type: item.type,
                        uri: item.uri,
                        href: item.href,
                        description: item.description
                    })
                })
                // shuffleArray(playlists);
                dispatch(setMood(playlists))
            })
            .catch(err => {
                console.log(err.response.data);
            })

        // TRAVEL    
        axios.get('/browse/categories/travel/playlists?country=IN&offset=0&limit=50', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                const playlists = [];
                response.data.playlists.items.map(item => {
                    return playlists.push({
                        id: item.id,
                        images: item.images,
                        name: item.name,
                        type: item.type,
                        uri: item.uri,
                        href: item.href,
                        description: item.description
                    })
                })
                // shuffleArray(playlists);
                dispatch(setTravel(playlists));
            })
            .catch(err => {
                console.log(err.response.data);
            })

        //PARTY    
        axios.get('/browse/categories/party/playlists?country=IN', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                const playlists = [];
                response.data.playlists.items.map(item => {
                    return playlists.push({
                        id: item.id,
                        images: item.images,
                        name: item.name,
                        type: item.type,
                        uri: item.uri,
                        href: item.href,
                        description: item.description
                    })
                })
                // shuffleArray(playlists);
                dispatch(setParty(playlists));
            })
            .catch(err => {
                console.log(err.response.data);
            })

        // INDIE
        axios.get('/browse/categories/indie_alt/playlists?country=IN', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                const playlists = [];
                response.data.playlists.items.map(item => {
                    return playlists.push({
                        id: item.id,
                        images: item.images,
                        name: item.name,
                        type: item.type,
                        uri: item.uri,
                        href: item.href,
                        description: item.description
                    })
                })
                // shuffleArray(playlists);
                dispatch(setIndie(playlists));
            })
            .catch(err => {
                console.log(err.response.data);
            })

        // PUNJABI
        axios.get('/browse/categories/punjabi/playlists?country=IN', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                const playlists = [];
                response.data.playlists.items.map(item => {
                    return playlists.push({
                        id: item.id,
                        images: item.images,
                        name: item.name,
                        type: item.type,
                        uri: item.uri,
                        href: item.href,
                        description: item.description
                    })
                })
                // shuffleArray(playlists);
                dispatch(setPunjabi(playlists))
            })
            .catch(err => {
                console.log(err.response.data);
            })

        //Bollywood
        axios.get('/browse/categories/bollywood/playlists?country=IN', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                const playlists = [];
                response.data.playlists.items.map(item => {
                    return playlists.push({
                        id: item.id,
                        images: item.images,
                        name: item.name,
                        type: item.type,
                        uri: item.uri,
                        href: item.href,
                        description: item.description
                    })
                })
                // shuffleArray(playlists);
                dispatch(setBollywood(playlists));
            })
            .catch(err => {
                console.log(err.response.data);
            })

        // Toplist
        axios.get('/browse/categories/toplists/playlists?country=IN', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                const playlists = [];
                response.data.playlists.items.map(item => {
                    return playlists.push({
                        id: item.id,
                        images: item.images,
                        name: item.name,
                        type: item.type,
                        uri: item.uri,
                        href: item.href,
                        description: item.description
                    })
                })
                // shuffleArray(playlists);
                dispatch(setToplists(playlists));
            })
            .catch(err => {
                console.log(err.response.data);
            })

        //chill
        axios.get('/browse/categories/chill/playlists?country=IN', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                const playlists = [];
                response.data.playlists.items.map(item => {
                    return playlists.push({
                        id: item.id,
                        images: item.images,
                        name: item.name,
                        type: item.type,
                        uri: item.uri,
                        href: item.href,
                        description: item.description
                    })
                })
                // shuffleArray(playlists);
                dispatch(setChill(playlists))
            })
            .catch(err => {
                console.log(err.response.data);
            })

        //workout
        axios.get('/browse/categories/workout/playlists?country=IN', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                const playlists = [];
                response.data.playlists.items.map(item => {
                    return playlists.push({
                        id: item.id,
                        images: item.images,
                        name: item.name,
                        type: item.type,
                        uri: item.uri,
                        href: item.href,
                        description: item.description
                    })
                })
                // shuffleArray(playlists);
                dispatch(setWorkout(playlists));
            })
            .catch(err => {
                console.log(err.response.data);
            })

        //EDM
        axios.get('/browse/categories/edm_dance/playlists?country=IN', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                const playlists = [];
                response.data.playlists.items.map(item => {
                    return playlists.push({
                        id: item.id,
                        images: item.images,
                        name: item.name,
                        type: item.type,
                        uri: item.uri,
                        href: item.href,
                        description: item.description
                    })
                })
                // shuffleArray(playlists);
                dispatch(setEdm(playlists))
            })
            .catch(err => {
                console.log(err.response.data);
            })

        //HOME
        axios.get('/browse/categories/at_home/playlists?country=IN', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                const playlists = [];
                response.data.playlists.items.map(item => {
                    return playlists.push({
                        id: item.id,
                        images: item.images,
                        name: item.name,
                        type: item.type,
                        uri: item.uri,
                        href: item.href,
                        description: item.description
                    })
                })
                // shuffleArray(playlists);
                dispatch(setHome(playlists))
            })
            .catch(err => {
                console.log(err.response.data);
            })

        // Romance
        axios.get('/browse/categories/romance/playlists?country=IN', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                const playlists = [];
                response.data.playlists.items.map(item => {
                    return playlists.push({
                        id: item.id,
                        images: item.images,
                        name: item.name,
                        type: item.type,
                        uri: item.uri,
                        href: item.href,
                        description: item.description
                    })
                })
                // shuffleArray(playlists);
                dispatch(setRomance(playlists))
            })
            .catch(err => {
                console.log(err.response.data);
            })
    }
}

const getTopTracks = (id, token) => {
    return dispatch => {
        axios.get(`/artists/${id}/top-tracks?country=IN`, {
            headers: { 'Authorization': 'Bearer ' + token }
        }).then(response => {
            console.log("check");
            console.log(response.data);
        })
            .catch(err => {
                console.log(err);
            })
    }
}

const getUserTopArtists = (token) => {
    return dispatch => {
        axios.get('/me/top/artists', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const getData = (token) => {
    return dispatch => {
        dispatch(getNewReleases(token));
        dispatch(getFeatured(token));
        dispatch(getShows(token));
        dispatch(getDiffGenre(token));
        dispatch(getUserTopArtists(token));
    }
}