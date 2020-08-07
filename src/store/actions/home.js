import * as actionTypes from './actionTypes'
import axios from '../../axios-instance'

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

const setCategories = (data) => {
    return {
        type: actionTypes.SET_CATEGORIES,
        categories: data
    }
}

const setFeatured = (data) => {
    return {
        type: actionTypes.SET_FEATURED,
        featured: data
    }
}

const getNewReleases = (token) => {
    return dispatch => {
        axios.get('/browse/new-releases?country=IN', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                console.log(response.data);
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
                dispatch(setNewReleases(albums));
            })
            .catch(err => {
                dispatch(setNewReleasesFail(err))
            });
    }
}

const getCategories = (token) => {
    return dispatch => {
        axios.get('/browse/categories?country=IN', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(response => {
                console.log(response.data);
                const categories = [];
                response.data.categories.items.map(item => {
                    return categories.push({
                        id: item.id,
                        images: item.icons,
                        name: item.name,
                        href: item.href
                    })
                })
                dispatch(setCategories(categories))
            })
            .catch(err => {
                console.log(err.response);
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
                console.log(playlists)
                dispatch(setFeatured(playlists))
            })
            .catch(err => {
                console.log(err.response);
            });
    }
}

export const getData = (token) => {
    return dispatch => {
        dispatch(getCategories(token));
        dispatch(getNewReleases(token));
        dispatch(getFeatured(token))
    }
}