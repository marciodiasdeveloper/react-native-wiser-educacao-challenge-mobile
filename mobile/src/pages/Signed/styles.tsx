import styled from 'styled-components/native';
import LinearButton from '../../components/LinearButton';

export const Container = styled.SafeAreaView`
  flex:1;
  justify-content: center;
  align-items: center;
  margin-left: 32px;
  margin-right: 32px;
`;

export const Text = styled.Text`
  font-size: 24px;
`;

export const Button = styled(LinearButton).attrs({
    colors: ['#9D25B0', '#383E71'],
    noShadowBox: true,
})`
    align-self: center;
    margin-top: 32px;
`;