import React from 'react';

import backgroundImage from '../../assets/images/background.png';

import {
  Container,
  BackgroundImage,
} from './styles';

import api from '../../services/api';
import { showMessage } from "react-native-flash-message";
import * as Yup from "yup";

const SignIn: React.FC = () => {
    return (
      <Container>
          <BackgroundImage source={backgroundImage} />
      </Container>
    );
}

export default SignIn;