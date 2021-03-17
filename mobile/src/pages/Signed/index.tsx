import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../store/modules/auth/actions';

import { 
    Container, 
    Text,
    Button
} from './styles';

const Signed: React.FC = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    return (
        <Container>
            <Text>Parabéns</Text>
            <Text>Acesso liberado!</Text>
            <Button onPress={() => dispatch(signOut())}>Sair</Button>
        </Container>
    );
}

export default Signed;