import React, { useState, useRef } from 'react';

import backgroundImage from '../../assets/images/background.png';
import Input from '../../components/Input';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  BackgroundImage,
  Card,
  Content,
  Title,
  SubTitle,
  Form,
  SubmitButton,
  ForgotPasswordButton,
  ForgotPasswordText,
  Link,
} from './styles';

import api from '../../services/api';
import { showMessage } from "react-native-flash-message";
import * as Yup from "yup";

const SignIn: React.FC = () => {
    const formRef = useRef(null);
    const passwordInputRef = useRef(null);
    const [loading, setLoading] = useState(false);
    return (
      <Container>
          <BackgroundImage source={backgroundImage} />
          <Card>
            <Content>
              <Title>{'Olá, seja\nbem-vindo!'}</Title>
              <SubTitle>Para acessar a plataforma, faça seu login.</SubTitle>
              <Form ref={formRef} onSubmit={() => {}}>
                  <FeatherIcon icon="user" size={40} color="#383838" />
                {/* <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      keyboardType="email-address"
                      name="email"
                      icon="mail"
                      placeholder="E-mail"
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        passwordInputRef.current?.focus();
                      }}
                    />
                    <Input
                      ref={passwordInputRef}
                      secureTextEntry
                      name="password"
                      icon="lock"
                      placeholder="Senha"
                      returnKeyType="send"
                      onSubmitEditing={() => {
                        formRef.current?.submitForm();
                      }}
                    /> */}

              </Form>
            </Content>
            <SubmitButton loading={loading}>
              Entrar
            </SubmitButton>
          </Card>
          <ForgotPasswordButton>
            <ForgotPasswordText>
              {`Esqueceu seu login ou senha?\n Clique `}
              <Link>aqui</Link>
            </ForgotPasswordText>
        </ForgotPasswordButton>
      </Container>
    );
}

export default SignIn;