import { Platform } from 'react-native';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://60526639fb49dc00175b814e.mockapi.io/api/v1/',
});


api.registerInterceptWithStore = (store) => {
  api.interceptors.response.use(
    api.interceptors.response.use(
      (response) => response,
      (err) => {
        if (err.response.status === 400 || err.response.status === 401) {
          if (err.response.data.error === 'token_expired') {
            // store.dispatch(refreshTokenRequest(store.getState().auth.token));
          }
        }
        return Promise.reject(err);
      },
    ),
  );
};

export default api;
