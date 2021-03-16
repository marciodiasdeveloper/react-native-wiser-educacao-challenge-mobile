import {showMessage} from 'react-native-flash-message';
import {takeLatest, call, put, all, delay} from 'redux-saga/effects';

import api from '../../../services/api';

import {
  signInSuccess,
  signInFailure,
} from './signIn/actions';

export function* signIn({payload}) {
  yield delay(500);

  try {
    const {email, password} = payload;
    const response = yield call(api.post, 'authentication', {
      email,
      password,
    });
    const {token, approved, sent_review, user} = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(signInSuccess(token, approved, sent_review, user));
  } catch (err) {
    yield put(signInFailure());
    console.log('erro', err);
    showMessage({
      message: 'Falha na autenticação',
      description: 'Houve um erro no login, verifique seus dados.',
      type: 'danger',
    });

  }
}

export function setToken({payload}) {
  if (!payload) {
    return;
  }

  console.log('auth.sagas.setToken payload', payload);

  const {token} = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  console.log('logout');
}


export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
