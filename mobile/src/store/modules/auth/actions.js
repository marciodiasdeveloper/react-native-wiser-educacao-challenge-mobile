export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function signUpRequest(obj) {
  console.log(`action signUpRequest name, cpf, email, password, phone -> ${obj.name} - ${obj.cpf} - ${obj.email} - ${obj.password} - ${obj.phone}`);
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {email, password},
  };
}

export function signUpSuccess(token, user) {
  return {
    type: '@auth/SIGN_UP_SUCCESS',
    payload: {token, user},
  };
}

export function signUpFailure() {
  return {
    type: '@auth/SIGN_UP_FAILURE',
  };
}
