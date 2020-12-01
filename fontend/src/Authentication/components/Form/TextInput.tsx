import React, { forwardRef, RefObject } from "react";
import {
    TextInput as RnTextInput,
    StyleSheet,
    TextInputProps as RNTextInputProps
} from "react-native"
import Icon from "react-native-vector-icons/Feather";
import { Box,useTheme } from '../../../components'

interface TextInputProps extends RNTextInputProps {
    placeholder: string;
    icon: string;
    touched?: boolean
    error?: string 
}

const TextInput = forwardRef<RnTextInput , TextInputProps>(
    (
        { icon,touched,error,  ...props }, 
        ref
    ) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2 ;
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
            <Box padding="s" {...{ color }}>
                <Icon name={icon} size={16} color={color} />
            </Box>
            <RnTextInput
            
                underlineColorAndroid="transparent"
                placeholderTextColor={color}
                {...{ref}}
                {...props} 
            />
            {touched && (
                <Box 
                    height={SIZE} 
                    width={SIZE} 
                    borderRadius="m" 
                    justifyContent="center" 
                    alignItems="center" 
                    backgroundColor={!error ? "primary" : "danger"}
                    style = {{borderRadius: SIZE/2}}
                >
                    < Icon name={!error ? "check" : "x"} color="white"
                        size={16} style ={{textAlign: "center"}}
                    />
                </Box>
            )}
        </Box>
    );
});

export default TextInput;