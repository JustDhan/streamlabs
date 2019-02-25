import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
    logoutSaga,
    checkoutTimeoutSaga,
    authUserSaga,
    authCheckStateSaga,
} from './auth';

export function* watchAuth() {
    yield all([
        //Multiple task simultaneously
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkoutTimeoutSaga),
        takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_INITIAL_STATE, authCheckStateSaga)
    ]);
}
