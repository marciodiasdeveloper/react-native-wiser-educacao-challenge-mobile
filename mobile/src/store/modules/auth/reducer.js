import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  approved: false,
  sent_review: null,
  controls: {
    loading: false,
    loading_fb: false,
    forgotPassword: false,
    refreshTokenLoading: false,
  },
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/CLEAR_AUTH_CONTROLS': {
        draft.controls = {
          loading: false,
          loading_fb: false,
          forgotPassword: false,
          refreshTokenLoading: false,
        };
        break;
      }
      case '@auth/SIGN_IN_REQUEST': {
        draft.controls.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.signed = true;
        draft.token = action.payload.token;
        draft.approved = action.payload.approved;
        draft.sent_review = action.payload.sent_review;
        draft.controls.loading = false;
        draft.controls.forgotPassword = false;
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.controls.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        draft.approved = false;
        break;
      }
      
      case '@auth/REFRESH_TOKEN_REQUEST': {
        draft.controls.refreshTokenLoading = true;
        break;
      }
      case '@auth/REFRESH_TOKEN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.controls.refreshTokenLoading = false;
        break;
      }
      case '@auth/REFRESH_TOKEN_FAILURE': {
        draft.signed = false;
        draft.approved = false;
        draft.controls.loading = false;
        draft.controls.loading_fb = false;
        draft.controls.forgotPassword = false;
        draft.controls.refreshTokenLoading = false;
        break;
      }

      case '@auth/FORGOT_PASSWORD_REQUEST': {
        draft.controls.loading = true;
        draft.controls.forgotPassword = false;
        break;
      }
      case '@auth/FORGOT_PASSWORD_SUCCESS': {
        draft.controls.loading = false;
        draft.controls.forgotPassword = true;
        break;
      }
      case '@auth/FORGOT_PASSWORD_BACK_VIEW': {
        draft.controls.loading = false;
        draft.controls.forgotPassword = false;
        break;
      }
      case '@auth/FORGOT_PASSWORD_UPDATE_REQUEST': {
        draft.controls.loading = true;
        break;
      }
      case '@auth/FORGOT_PASSWORD_UPDATE_SUCCESS': {
        draft.controls.loading = false;
        break;
      }

      case '@auth/SIGN_UP_REQUEST': {
        draft.controls.loading = true;
        break;
      }
      case '@auth/SIGN_UP_SUCCESS': {
        draft.signed = true;
        draft.token = action.payload.token;
        draft.approved = action.payload.approved;
        draft.controls.loading = false;
        draft.controls.forgotPassword = false;
        break;
      }
      case '@auth/SIGN_UP_FAILURE': {
        draft.controls.loading = false;
        break;
      }
      case '@user/SEND_DOCUMENTS_REVIEW_SUCCESS': {
        draft.sent_review = action.payload.response.data.data.sent_review;
        break;
      }
      default:
    }
  });
}
