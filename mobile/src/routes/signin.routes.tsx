import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import SignIn from '../pages/SignIn';
// import SignedRoutesStack from './signed.routes';


const SignInStack = createStackNavigator();

const SignInRoutesStack = () => {
  return (
    <>
      <SignInStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'SignIn'}
      >
        <SignInStack.Screen name="SignIn" component={SignIn} />
      </SignInStack.Navigator>
    </>
  );
}

export default SignInRoutesStack;
