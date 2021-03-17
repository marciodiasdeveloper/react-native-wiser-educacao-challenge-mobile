import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import type {Node} from 'react';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import Routes from './routes';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthControls } from './store/modules/auth/clearcontrols/actions';
import { showMessage } from "react-native-flash-message";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(clearAuthControls());
    showMessage({
      message: 'Usuário logado',
      description: 'Parabéns, seu acesso foi liberado!.',
      type: 'success',
    });
  }, []);

  return (
    <NavigationContainer>
      <StatusBar 
          translucent
          barStyle="dark-content"
          backgroundColor="transparent" />
      <FlashMessage position="top" animated={true} />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
