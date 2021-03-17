import React, { useState, useRef } from 'react';

import backgroundImage from '../../assets/images/background.png';
// import FeatherIcon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';

import {
  Container,
  BackgroundImage,
  Card,
  Content,
  ContentForm,
  Title,
  SubTitle,
  SubmitButton,
  ForgotPasswordButton,
  ForgotPasswordText,
  Link,
} from './styles';

import api from '../../services/api';
import { showMessage } from "react-native-flash-message";
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Feather';
import getValidationErrors from '../../utils/getValidationErrors';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

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
                <ContentForm>
                  <Input
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
                    /> 
                </ContentForm>
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