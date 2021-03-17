import React, { useState, useRef, useCallback } from 'react';

import backgroundImage from '../../assets/images/background.png';
import Input from '../../components/Input';
import { showMessage } from "react-native-flash-message";
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Feather';
import getValidationErrors from '../../utils/getValidationErrors';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest, signInFailure } from '../../store/modules/auth/signIn/actions';

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

const SignIn: React.FC = () => {
    const dispatch = useDispatch();
    const formRef = useRef(null);
    const passwordInputRef = useRef(null);
    const controls = useSelector(state => state.auth.controls);

    const handleSignIn = useCallback(
      async (data) => {
        try {
          formRef.current?.setErrors({});
  
          const schema = Yup.object().shape({
            email: Yup.string()
              .required('E-mail obrigatório')
              .email('Digite um e-mail válido'),
            password: Yup.string().required('Senha obrigatóra'),
          });
  
          await schema.validate(data, {
            abortEarly: false,
          });
          dispatch(signInRequest(data.email, data.password));
        } catch (err) {
          if (err instanceof Yup.ValidationError) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
          }
          dispatch(signInFailure());
          showMessage({
            message: 'Erro na autenticação',
            description: 'Ocorreu um erro ao fazer login, verifique as credenciais novamente.',
            type: 'danger',
          });
        }
      }, [],
    );
  

    return (
      <Container>
          <BackgroundImage source={backgroundImage} />
          <Card>
            <Content>
              <Title>{'Olá, seja\nbem-vindo!'}</Title>
              <SubTitle>Para acessar a plataforma, faça seu login.</SubTitle>
              <Form ref={formRef} onSubmit={handleSignIn}>
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
            <SubmitButton loading={controls.loading} onPress={() => formRef.current?.submitForm() }>
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