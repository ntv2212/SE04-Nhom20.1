import React, { forwardRef, RefObject } from "react";
import {
    TextInput as RnTextInput,
    StyleSheet,
    TextInputProps as RNTextInputProps
} from "react-native"
import Icon from "react-native-vector-icons/Feather";
import { Box, useTheme } from '..'
import RoundedIcon from "../RoundedIcon";
interface TextInputProps extends RNTextInputProps {
    placeholder: string;
    icon: string;
    touched?: boolean
    error?: string
}

const TextInput = forwardRef<RnTextInput, TextInputProps>(
    (
        { icon, touched, error, ...props },
        ref
    ) => {
        const theme = useTheme();
        const SIZE = theme.borderRadii.m * 2;
        const reColor = !touched ? "text" : error ? "danger" : "primary";
        const color = theme.colors[reColor];
        return (
            <Box
                flexDirection="row"
                height={48}
                alignItems="center"
                borderRadius="s"
                borderColor={reColor}
                borderWidth={StyleSheet.hairlineWidth}
            >
                <Box padding="s" {...{ color }} >
                    <Icon name={icon} size={16} color={color} />
                </Box>
                <Box flex={0.95}  >
                    <RnTextInput

                        underlineColorAndroid="transparent"
                        placeholderTextColor={color}
                        {...{ ref }}
                        {...props}
                    />
                </Box>
                {touched && (
                    <RoundedIcon 
                        iconRatio={0.5}
                        name={!error ? "check" : "x"} 
                        size={SIZE}    
                        backgroundColor={!error ? "primary" : "danger"} 
                        color="white"/>
                )}
            </Box>
        );
    });

export default TextInput;