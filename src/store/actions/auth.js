import * as actionTypes from './actionTypes';

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token
    };
};

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_INITIATE_LOGOUT
    };
};

export const logoutSucceed = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = exirationTime => {
    return {
        type: actionTypes.AUTH_CHECK_TIMEOUT,
        exirationTime: exirationTime
    };
};

export const auth = token => {
    return {
        type: actionTypes.AUTH_USER,
        idToken: token
    };
};

export const authCheckState = () => {
    return {
        type: actionTypes.AUTH_CHECK_INITIAL_STATE
    };
};
