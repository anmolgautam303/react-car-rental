import { takeLatest } from 'redux-saga/effects';

import { SIGN_UP_USER } from '../constants/Auth';
import { signUpUserSaga } from './signUp';
import Api from '../services/Api'

const api = Api.create();

function* Saga() {
  yield takeLatest(SIGN_UP_USER, signUpUserSaga, api);
}

export default Saga;
