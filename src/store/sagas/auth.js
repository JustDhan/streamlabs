import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import * as actions from '../actions/index';

export function* logoutSaga(action) {
    yield call([localStorage, 'removeItem'], 'token');
    yield call([localStorage, 'removeItem'], 'expirationDate');
    yield put(actions.logoutSucceed());
}

export function* checkoutTimeoutSaga(action) {
    yield delay(action.exirationTime * 1000);
    yield put(actions.logout());
}

export function* authUserSaga(action) {
    yield put(actions.authStart());

    try {
        const expiresInHours = 1 * 60 * 60;
        const expirationDate = yield new Date(
            new Date().getTime() + expiresInHours * 1000
        );
        yield localStorage.setItem('token', action.idToken);
        yield localStorage.setItem('expirationDate', expirationDate);
        yield put(actions.authSuccess(action.idToken));
        yield put(actions.checkAuthTimeout(expiresInHours));
    } catch (error) {
        yield put(actions.authFail(error.response.data.error));
    }
}

export function* authCheckStateSaga(action) {
    const token = yield localStorage.getItem('token');
    if (!token) {
        yield put(actions.logout());
    } else {
        const expirationDate = yield new Date(
            localStorage.getItem('expirationDate')
        );

        if (expirationDate <= new Date()) {
            yield put(actions.logout());
        } else {
            yield put(actions.authSuccess(token));
            yield put(
                actions.checkAuthTimeout(
                    (expirationDate.getTime() - new Date().getTime()) / 1000
                )
            );
        }
    }
}
