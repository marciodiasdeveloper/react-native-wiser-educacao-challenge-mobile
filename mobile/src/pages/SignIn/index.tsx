import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  Container,
  Title,
  SubTitle
} from './styles';

import api from '../../services/api';
import { showMessage } from "react-native-flash-message";
import * as Yup from "yup";


const SignIn: React.FC = () => {
    return (
      <Container>
          <Title>Olá, seja bem-vindo!</Title>
          <SubTitle>Para acessar a plataforma, faça seu login.</SubTitle>
      </Container>
    );
}

export default SignIn;


// <SafeAreaView>
// <ScrollView showsVerticalScrollIndicator={false}>
//     <Container>
//         <Background source={backgroundImage} style={{ flex: 1, resizeMode: 'cover' }} />
//         <Content>
//           
            
//                 <ForgotText>
//                     Esqueceu seu login ou senha?
//                 </ForgotText>
//                 <ForgotPassword>
//                     <ForgotTextUnderline>
//                         Clique aqui
//                     </ForgotTextUnderline>
//                 </ForgotPassword>
//         </Content>
//     </Container>
// </ScrollView>
// </SafeAreaView>