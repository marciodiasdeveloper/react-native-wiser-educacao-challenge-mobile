import { Platform } from 'react-native';
import styled from 'styled-components/native';
import LinearButton from '../../components/LinearButton';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #130525;
`;

export const BackgroundImage = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  position: absolute;
  top: 0;
  align-self: center;
  height: 60%;
  width: 100%;
  background-color: #130525;
`;


export const Card = styled.View`
  width: 100%;
  padding: 30px;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #faf5ff;
  padding: 20px 25px;
  border-radius: 8px;
`;

export const ContentForm = styled.View`
  margin-top: 32px;
  margin-bottom: 32px;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #383e71;
`;

export const SubTitle = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;
  color: #989fdb;
  margin-top: 20px;
`;

export const Form = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 25px 0;
`;


export const SubmitButton = styled(LinearButton).attrs({
  colors: ['#9D25B0', '#383E71'],
  noShadowBox: true,
})`
  position: absolute;
  bottom: 5px;
  align-self: center;
  margin: 0 28%;
  margin-top: 5px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const ForgotPasswordText = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 14px;
  text-align: center;
  color: #ffffff;
`;

export const Link = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  text-decoration-line: underline;
`;