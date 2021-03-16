import React, {
	useEffect,
	useCallback,
	useState,
	useRef,
	useImperativeHandle,
	forwardRef,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Icon, TextInputCPF, TextInputPhone } from './styles';

interface InputProps extends TextInputProps {
	name: string;
	icon: string;
}

interface InputValueReference {
	value: string;
}

interface InputRef {
	focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
	{ name, icon, ...rest },
	ref,
) => {
	const inputElementRef = useRef<any>(null);

	const { registerField, defaultValue = '', fieldName, error } = useField(name);
	const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);

	const handleInputFocus = useCallback(() => {
		setIsFocused(true);
	}, []);

	const handleInputBlur = useCallback(() => {
		setIsFocused(false);
		setIsFilled(!!inputValueRef.current.value);
	}, []);

	useImperativeHandle(ref, () => ({
		focus() {
			inputElementRef.current?.focus();
		},
	}));

	useEffect(() => {
		registerField<string>({
			name: fieldName,
			ref: inputValueRef.current,
			path: 'value',
			setValue(ref: any, value) {
				inputValueRef.current.value = value;
				inputElementRef.current.setNativeProps({ text: value });
			},
			clearValue() {
				inputValueRef.current.value = '';
				inputElementRef.current.clear();
			},
		});
	}, [fieldName, registerField]);

	const [value, setValue] = useState('');
	const [rawValue, setRawValue] = useState('');

	const handleOnChangeText = useCallback((maskedValue, unmaskedValue) => {
		setValue(maskedValue);
		setRawValue(unmaskedValue);
		inputValueRef.current.value = unmaskedValue;
	  }, []);
	
	return (
		<Container isFocused={isFocused} isErrored={!!error} isFilled={isFilled}>
			<Icon
				name={icon}
				size={20}
				color={
					isFocused || isFilled ? '#ffb31b' : error ? '#ee8274' : '#666360'
				}
			/>
			{(rest.cpf && (
				<TextInputCPF
					ref={inputElementRef}
					keyboardAppearance="dark"
					placeholderTextColor="#666360"
					defaultValue={defaultValue}
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
					onChangeText={handleOnChangeText}
					value={inputValueRef.current.value}
					customTextInputProps={{ rawValue, ...rest}}
					includeRawValueInChangeText={true}
					{...rest}
				/>
			))}
			{(rest.phone && (
				<TextInputPhone
					ref={inputElementRef}
					keyboardAppearance="dark"
					placeholderTextColor="#666360"
					defaultValue={defaultValue}
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
					onChangeText={handleOnChangeText}
					value={inputValueRef.current.value}
					customTextInputProps={{
							rawValue,
							...rest,
							}}

					includeRawValueInChangeText={true}
					{...rest}
				/>
			))}
			{((!rest.cpf && !rest.phone) && (
					<TextInput
					ref={inputElementRef}
					keyboardAppearance="dark"
					placeholderTextColor="#666360"
					defaultValue={defaultValue}
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
					onChangeText={value => {
						inputValueRef.current.value = value;
					}}
					{...rest}
				/>
			))}
		</Container>
	);
};

export default forwardRef(Input);
