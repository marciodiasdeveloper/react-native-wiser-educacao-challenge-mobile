import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: '@wiser:login:',
      storage: AsyncStorage,
      whitelist: [
        'auth',
      ],
    },
    reducers,
  );

  return persistedReducer;
};
