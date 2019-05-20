import {
    SIGN_UP_USER
} from '../constants/Auth';

export const signUpUser = payload => {
    return {
        type: SIGN_UP_USER,
        payload: payload
    }
}