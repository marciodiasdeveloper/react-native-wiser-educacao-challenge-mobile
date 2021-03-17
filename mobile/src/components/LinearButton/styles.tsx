import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 100%;
  ${(props: any) => (props.noShadowBox ? '' : 'elevation: 10;')}
  ${(props: any) =>
    props.noShadowBox ? '' : 'box-shadow: 0px 10px 15px #cf99db;'}
`;

export const Container = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
`;
