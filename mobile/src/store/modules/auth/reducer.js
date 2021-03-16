import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  controls: {
    loading: false,
  },
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/CLEAR_AUTH_CONTROLS': {
        draft.controls = {
          loading: false,
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
        draft.controls.loading = false;
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.controls.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }
      
      default:
    }
  });
}
