import React, { useState } from "react";
import { TextInput as RnTextInput ,
    StyleSheet,
    TextInputProps as RNTextInputProps
} from "react-native"
import { Box, theme } from '../../../components'

interface TextInputProps extends RNTextInputProps{
    placeholder: string;
    icon: string;
    validator: (input: string) => boolean;
}
const SIZE = theme.borderRadii.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine
const TextInput = ({ icon, validator,...props  }: TextInputProps) => {
    const[input, setInput] =useState("");
    const [state, setState] = useState<InputState>(Pristine);
    const reColor :keyof typeof theme.colors
        = state === Pristine ? "text" :(state ===Valid) ?"primary" : "danger";
    const color = theme.colors[reColor];
    const onChangeText =(text:string)=> {
        setInput(text)
        if (state !==Pristine){
            validate();
        }
    };
    const validate=() =>{
        const valid =validator(input);
        setState(valid);

    };
    return (
        <Box 
            flexDirection="row" 
            height={48}
            alignItems="center"
            borderRadius="s"
            borderColor={reColor}
            borderWidth={StyleSheet.hairlineWidth}

        >
            <Box padding="s" {...{color}}>
            {/* <Icon name={icon} size={16} color={color}/> */}
            </Box>
            <RnTextInput
                underlineColorAndroid="transparent"
                placeholderTextColor={color}
                onBlur={validate}
                {...{onChangeText}}
                {...props} />
            {(state === Valid || state === Invalid) && (
                <Box height={SIZE} width={SIZE} borderRadius="m">
                    {/* <Icon name={state === Valid ? "check" : "x"} color="white" 
                        size={16}
                    /> */}
                </Box>
            )}
        </Box>
    );
};
export default TextInput;