import { View, Text, TextInput } from 'react-native';
import Styles from './styles';
import { Input } from '../../components/input';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { AccountProps } from '../../contexts/AccountFormContext';
import { useAccountForm } from '../../hooks/useAccountForm';
import { Progress } from '../../components/Progress';
export function FormStepOne() {
    const {updateFormData} = useAccountForm();
    const {navigate} = useNavigation();
    const { control, handleSubmit, formState: {errors} } = useForm<AccountProps>();
    const emailRef = useRef<TextInput>(null);

    function handleNextStep(data: AccountProps) {
        updateFormData(data);
        navigate('formStepTwo');
    }
    return (
        <View style={Styles.container}>
            <Progress progress={33} />
            <Text style={Styles.title}>Criar uma conta</Text>
            <Input
                icon='user'
                error={errors.name?.message}
                formProps={{
                    name: 'name',
                    control,
                    rules: {
                        required: 'Campo nome é obrigatório'
                    }
                }}
                inputProps={{
                    placeholder: 'Nome',
                    onSubmitEditing: () => emailRef.current?.focus(),
                    returnKeyType: 'next'
                }}  
            />
            <Input
                ref={emailRef}
                icon='mail'
                error={errors.root?.message}
                formProps={{
                    name: 'email',
                    control,
                    rules: {
                        required: 'Campo e-mail é obrigatório',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'E-mail inválido'
                        }
                    }
                }}
                inputProps={{
                    placeholder: 'E-mail',
                    onSubmitEditing: handleSubmit(handleNextStep)
                }}
            />
            <Button title='Continuar' onPress={handleSubmit(handleNextStep)} />
        </View>
    );
}