import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';

import {
  Container,
  ButtonText,
} from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  loading: boolean;
}

const Button: React.FC<ButtonProps> = ({children, loading, ...rest }) => (
  <Container {...rest}>
    {loading ? (
      <ActivityIndicator size="small" color="#fff" />
    ) : (
      <ButtonText>{children}</ButtonText>
    )}
  </Container>
);

export default Button;
