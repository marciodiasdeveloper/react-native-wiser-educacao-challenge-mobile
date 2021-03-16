
export function forgotPasswordRequest(email) {
    return {
      type: '@auth/FORGOT_PASSWORD_REQUEST',
      payload: {email},
    };
  }
  
  export function forgotPasswordSuccess() {
    return {
      type: '@auth/FORGOT_PASSWORD_SUCCESS',
    };
  }
  
  export function forgotPasswordBackView() {
    return {
      type: '@auth/FORGOT_PASSWORD_BACK_VIEW',
    };
  }
  
  export function forgotPasswordUpdateRequest(
    code,
    email,
    password,
    passwordConfirm,
  ) {
    return {
      type: '@auth/FORGOT_PASSWORD_UPDATE_REQUEST',
      payload: {
        code,
        email,
        password,
        passwordConfirm,
      },
    };
  }
  
  export function forgotPasswordUpdateSuccess() {
    return {
      type: '@auth/FORGOT_PASSWORD_UPDATE_SUCCESS',
    };
  }