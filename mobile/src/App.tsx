import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import type {Node} from 'react';
import { StatusBar, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import Routes from './routes';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthControls } from './store/modules/auth/clearcontrols/actions';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    // Verificar se o usuário está logado, executar tudo e só depois chamar o hide do splashscreen.
    dispatch(clearAuthControls());
    // SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <FlashMessage position="top" animated={true} />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
