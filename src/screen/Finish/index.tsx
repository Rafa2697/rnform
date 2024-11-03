import {View, Text} from 'react-native';
import { Styles } from './style';
import{useAccountForm} from '../../hooks/useAccountForm'

export function Finish() {
const {accountFormData} = useAccountForm();
    return (
        <View style={Styles.container}>
            <Text>Nome: {accountFormData.name}</Text>
            <Text>E-mail: {accountFormData.email}</Text>
            <Text>Telefone: {accountFormData.phone}</Text>
            <Text>nascimento: {accountFormData.birth}</Text>
            <Text>Senha: {accountFormData.password} / {accountFormData.passwordConfirmation}</Text>
        </View>
    );
}