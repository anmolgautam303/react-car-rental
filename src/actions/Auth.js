import {
    LOGIN_ATTEMPT,
    VERIFY_USER,
    SIGN_UP_USER
} from '../constants/Auth';

export const attemptToLogin = payload => {
    return {
        type: LOGIN_ATTEMPT,
        payload: payload
    }
}

export const verifyUser = payload => {
    return {
        type: VERIFY_USER,
        payload: payload
    }
}

export const signUpUser = payload => {
    return {
        type: SIGN_UP_USER,
        payload: payload
    }
}