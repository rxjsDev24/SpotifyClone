import * as actionTypes from './actionTypes';
import queryString from 'query-string';

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const checkoutAuthTime = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}


export const storeAccessToken = () => {
    return dispatch => {
        let parsed = queryString.parse(window.location.search);
        let accessToken = parsed.access_token;

        if (!accessToken) {
            return;
        }

        const date = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem('token', accessToken);
        localStorage.setItem('expirationDate', date);
        dispatch(authSuccess(accessToken));
        dispatch(checkoutAuthTime(3600));
    }
}

export const checkAuthState = () => {
    return dispatch => {
        let token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate > new Date()) {
                dispatch(authSuccess(token));
                dispatch(checkoutAuthTime((expirationDate.getTime() - new Date().getTime()) / 1000));
            } else {
                dispatch(logout());
            }
        }
    }
}