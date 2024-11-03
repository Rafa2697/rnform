import { View, Text, TextInput } from 'react-native';
import Styles from './styles';
import { Input } from '../../components/input';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { useAccountForm } from '../../hooks/useAccountForm';
import { AccountProps } from '../../contexts/AccountFormContext';
import { Progress } from '../../components/Progress';

export function FormStepThree() {
    const {navigate} = useNavigation();
    const {updateFormData} = useAccountForm();
    const { control, handleSubmit, formState: { errors }, getValues } = useForm<AccountProps>();
    const passwordRef = useRef<TextInput>(null);

    function handleNextStep(data: AccountProps) {
        updateFormData(data);
        navigate('finish')
    }
    function validatePassword(passwordConfirmation: string) {
      const {password} = getValues();
      return password === passwordConfirmation || 'As senhas não conferem';
    }
    return (
        <View style={Styles.container}>
            <Progress progress={90} />
            <Text style={Styles.title}>Escolha sua senha</Text>
            <Input
                icon='key'
                error={errors.password?.message}
                formProps={{
                    name: 'password',
                    control,
                    rules: {
                        required: 'Senha é obrigatória',
                        minLength: {
                            value: 6,
                            message: 'A senha deve ter no mínimo 6 caracteres',
                        }
                    }
                }
                }
                inputProps={{
                    placeholder: 'Senha',
                    onSubmitEditing: () => passwordRef.current?.focus(),
                    returnKeyType: 'next',
                    secureTextEntry: true,
                }}
            />
            <Input
                ref={passwordRef}
                icon='key'
                error={errors.passwordConfirmation?.message}
                formProps={{
                    name: 'passwordConfirmation',
                    control,
                    rules: {
                        required: 'Confirme a senha',
                        validate: validatePassword,
                    }
                }}
                inputProps={{
                    placeholder: 'Confirme a senha',
                    onSubmitEditing: handleSubmit(handleNextStep),
                    secureTextEntry: true,
                }}
            />
            <Button title='Criar' onPress={handleSubmit(handleNextStep)} />
        </View>
    );
}

function getValues(): { password: any; } {
    throw new Error('Function not implemented.');
}
