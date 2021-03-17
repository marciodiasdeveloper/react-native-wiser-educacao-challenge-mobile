import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const BackgroundImage = styled.Image.attrs({
    resizeMode: 'cover',
  })`
    flex: 1;
    height: 120%;
`;