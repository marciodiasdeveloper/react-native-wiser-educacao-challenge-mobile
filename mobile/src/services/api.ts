import { Platform } from 'react-native';
import axios from 'axios';
import { refreshTokenRequest } from '../store/modules/auth/refresh/actions';

const api = axios.create({
  baseURL: 'https://api.marciodias.me/api/v1/awards/professionals',
  // baseURL:
  //   Platform.OS === 'ios'
  //     ? 'http://127.0.0.1:8000/api/v1/awards/professionals'
  //     : 'http://10.0.2.2:8000/api/v1/awards/professionals',
  // baseURL: 'http://10.0.2.2:3333' // android
  // baseURL: 'http://10.0.3.2:3333' // genymotion
  // baseURL: 'ip' // phone
});

api.registerInterceptWithStore = (store) => {
  api.interceptors.response.use(
    api.interceptors.response.use(
      (response) => response,
      (err) => {
        if (err.response.status === 400 || err.response.status === 401) {
          if (err.response.data.error === 'token_expired') {
            store.dispatch(refreshTokenRequest(store.getState().auth.token));
          }
        }
        return Promise.reject(err);
      },
    ),
  );
};

export default api;
