export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {email, password},
  };
}

export function signInSuccess(token, approved, sent_review, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {token, approved, sent_review, user},
  };
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}