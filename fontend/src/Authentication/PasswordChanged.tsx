import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Box, Button, Container,Text ,CloseButton} from '../components';

import { Routes, StackNavigationProps } from '../components/Navigation';

const SIZE=80
const PasswordChanged = ({ navigation }: StackNavigationProps<Routes, "PasswordChanged">) =>{
    return (
        <Container 
            footer={
                <Box flexDirection="row" justifyContent="center">
                    <CloseButton 
                        onPress={() => navigation.pop()}
                    />
                </Box>
            }
        >
            <Box flex={1} justifyContent="center" alignItems="center">
            <Box marginBottom="xl" backgroundColor="primaryLight" justifyContent="center" alignItems="center" style={{height: SIZE, width: SIZE, borderRadius:SIZE/2}}>
                <Text   textAlign="center" >

                <Icon name = "check" size={32}/>
                </Text>
            </Box>
             <Text
                    variant="title2"
                    textAlign="center"
                    marginBottom="l"
                >
                    Forgot Password
                </Text>
                <Text
                    textAlign="center"
                    variant="body"
                    marginBottom="l"
                >
                    Enter the email associated with your account
                </Text>
                <Box
                                    alignItems="center"
                                    marginTop="m"
                                >
                                    <Button
                                        variant="primary"
                                        onPress={() => navigation.navigate("Login")}
                                        label="Reset password"
                                    />
                                </Box>
                                </Box>
        </Container>
    );
};

export default PasswordChanged;