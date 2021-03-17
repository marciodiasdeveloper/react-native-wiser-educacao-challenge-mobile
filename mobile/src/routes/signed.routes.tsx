import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signed from '../pages/Signed';

const SignedStack = createStackNavigator();

const SignedRoutesStack = () => {
  return (
    <>
      <SignedStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Signed'}
      >
        <SignedStack.Screen name="Signed" component={Signed} />
      </SignedStack.Navigator>
    </>
  );
}

export default SignedRoutesStack;
