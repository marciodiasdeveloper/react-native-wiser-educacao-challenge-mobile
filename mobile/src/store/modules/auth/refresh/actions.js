
export function refreshTokenRequest(token) {
    return {
      type: '@auth/REFRESH_TOKEN_REQUEST',
      payload: {token},
    };
}
  
export function refreshTokenSuccess(token) {
    return {
      type: '@auth/REFRESH_TOKEN_SUCCESS',
      payload: {token},
    };
}
  
export function refreshTokenFailure() {
    return {
      type: '@auth/REFRESH_TOKEN_FAILURE',
    };
}
  