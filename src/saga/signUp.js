import { call } from 'redux-saga/effects';

export function* signUpUserSaga(api, action) {
    try {
        const response = yield call(api.signUpUserApi, action.payload)
        if(response.ok) {
            window.location.assign(response.data.verification.url);
        } else {
            console.log('error happened');
        }
    } catch (error) {
        console.log('error happened', error);
    }
}