import {showMessage} from 'react-native-flash-message';
import {takeLatest, call, put, all, delay} from 'redux-saga/effects';

import api from '../../../services/api';

import {
  signUpSuccess,
  signUpFailure,
} from './actions';

import {
  forgotPasswordSuccess,
  forgotPasswordUpdateSuccess,
} from './forgot/actions';

import {
  signInSuccess,
  signInFailure,
} from './signIn/actions';

import {
  refreshTokenSuccess,
  refreshTokenFailure,
} from './refresh/actions';

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

export function* refreshToken({payload}) {
  try {
    const {token} = payload;

    const response = yield call(api.put, 'authentication/refresh', {
      token,
    });

    const newToken = response.data.token;

    api.defaults.headers.Authorization = `Bearer ${newToken}`;

    yield put(refreshTokenSuccess(newToken));
  } catch (err) {
    console.log('erro', err);
    showMessage({
      message: 'Ocorreu uma falha, seu token de acesso expirou.',
      description:
        'Erro ao recuperar seu token de acesso, será necessário entrar logar novamente.',
      type: 'danger',
    });
    yield put(refreshTokenFailure());
  }
}

export function* forgotPassword({payload}) {
  try {
    const {email} = payload;

    const response = yield call(api.post, 'authentication/forgot', {
      email,
    });

    console.log('sagas forgotPassword response:',response);
    yield delay(1500);
    yield put(forgotPasswordSuccess());
  } catch (err) {
    showMessage({
      message: 'Falha ao resetar o e-mail',
      description: 'Houve um erro ao recuperar senha, verifique seus dados 😐!',
      type: 'danger',
    });
    yield put(signFailure());
  }
}

export function* forgotPasswordUpdate({payload}) {
  yield delay(1000);
  try {
    const {code, email, password, passwordConfirm} = payload;

    if (!code) {
      showMessage({
        message: 'Campo obrigatório.',
        description: 'Informe o código que você recebeu no e-mail.',
        type: 'danger',
      });
      yield put(signFailure());
    }

    if (!email) {
      showMessage({
        message: 'Campo obrigatório.',
        description: 'Informe seu endereço de e-mail.',
        type: 'danger',
      });
      yield put(signFailure());
    }

    if (password !== passwordConfirm) {
      showMessage({
        message: 'Erro ao recuperar senha.',
        description: 'Os campos senha e confirmar senha precisam ser iguais.',
        type: 'danger',
      });
      yield put(signFailure());
    }

    const response = yield call(api.put, 'authentication/forgot', {
      code,
      email,
      password,
      passwordConfirm,
    });

    const {token, user} = response.data;

    yield put(forgotPasswordUpdateSuccess());
    yield put(signInSuccess(token, user));
  } catch (err) {
    showMessage({
      message: 'Falha ao resetar o e-mail',
      description: 'Confira o código enviado para seu e-mail.',
      type: 'danger',
    });
    yield put(signFailure());
  }
}

export function* signUp({payload}) {
  yield delay(500);

  try {
    const {email, password} = payload;

    const response = yield call(api.post, 'signup', {
      name,
      cpf,
      email,
      password,
      phone,
    });

    const {token, user} = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signUpSuccess(token, user));
  } catch (err) {
    console.log('erro', err);
    showMessage({
      message: 'Erro ao realizar cadastro',
      description: 'Houve um erro ao fazer seu cadastro, verifique seus dados e tente novamente.',
      type: 'danger',
    });
    yield put(signUpFailure());
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/REFRESH_TOKEN_REQUEST', refreshToken),
  takeLatest('@auth/FORGOT_PASSWORD_REQUEST', forgotPassword),
  takeLatest('@auth/FORGOT_PASSWORD_UPDATE_REQUEST', forgotPasswordUpdate),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
