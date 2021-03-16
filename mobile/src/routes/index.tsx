import React from 'react';
import {useSelector} from 'react-redux';

import SignInRoutesStack from './signin.routes';
// import SignedRoutesStack from './signed.routes';

const Routes = () => {
  const signed = useSelector((state) => state.auth.signed);
  return !signed ? <SignInRoutesStack /> : <SignInRoutesStack />;
};

export default Routes;
