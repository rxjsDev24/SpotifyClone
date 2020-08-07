import * as actionTypes from './actionTypes';

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

const getTokenFromResponse = () => {
    const response = window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
        window.location.hash="";
    return response.access_token;
};


export const storeAccessToken = () => {
    return dispatch => {
        let accessToken = getTokenFromResponse();
        if (!accessToken) {
            return;
        }

        const date = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem('token', accessToken);
        localStorage.setItem('expirationDate', date);
        dispatch(authSuccess(accessToken));
        // dispatch(checkoutAuthTime(3600));
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
                // dispatch(checkoutAuthTime((expirationDate.getTime() - new Date().getTime()) / 1000));
            } else {
                dispatch(logout());
            }
        }
    }
}