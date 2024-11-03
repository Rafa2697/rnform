import { TextInput, TextInputProps, View, Text } from "react-native";
import { styles } from "./styles";
import { Feather } from '@expo/vector-icons';
import { Controller, UseControllerProps } from "react-hook-form";
import { forwardRef } from "react";
import clsx from "clsx";

type Props = {
    error?: string
    icon: keyof typeof Feather.glyphMap;
    formProps: UseControllerProps;
    inputProps: TextInputProps;
}

const Input = forwardRef<TextInput, Props>(({ icon, formProps, inputProps, error = '' }, ref) => {
    return (
        <Controller
            render={({ field }) => (
                <View style={styles.container}>
                    <View style={styles.group}>
                        <View style={styles.icon}>
                            <Feather 
                            name={icon} 
                            size={24} 
                            color={clsx({
                                ['#dc1637']: error.length > 0,
                                ['#1b1b1f']: field.value,
                                ['#7c7c8a']: (!field.value && error.length === 0)
                            })} />
                        </View>
                        <TextInput
                            ref={ref}
                            value={field.value}
                            onChangeText={field.onChange}
                            style={styles.control}
                            {...inputProps}
                        />
                    </View>
                    {
                        error.length > 0 &&
                        <Text style={styles.error}>{error}</Text>
                    }
                </View>
            )}
            {...formProps}
        />
    );
})

export { Input };