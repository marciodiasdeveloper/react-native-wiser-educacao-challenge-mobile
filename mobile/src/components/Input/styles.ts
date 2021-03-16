import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { TextInputMask } from 'react-native-masked-text';

interface ContainerProps {
	isFocused: boolean;
	isErrored: boolean;
	isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
	width: 100%;
	height: 60px;
	padding: 0 16px;
	background: #fafafa;
	border-radius: 10px;
	margin-bottom: 8px;
	border-width: 2px;
	border-color: #eee;
	flex-direction: row;
	align-items: center;
	${props =>
		props.isErrored &&
		!props.isFilled &&
		css`
			border-color: #ee8274;
		`}
	${props =>
		props.isFocused &&
		css`
			border-color: #ffb31b;
		`}
`;

export const TextInput = styled.TextInput`
	flex: 1;
	color: #666360;
	font-size: 16px;
	font-family: 'Gotham-Book';
`;

export const TextInputCPF = styled(TextInputMask).attrs({
	type: 'cpf'
})`
	flex: 1;
	color: #666360;
	font-size: 16px;
	font-family: 'Gotham-Book';
`;

export const TextInputPhone = styled(TextInputMask).attrs({
	type: 'cel-phone'
})`
	flex: 1;
	color: #666360;
	font-size: 16px;
	font-family: 'Gotham-Book';
`;


export const Icon = styled(FeatherIcon)`
	margin-right: 16px;
`;
