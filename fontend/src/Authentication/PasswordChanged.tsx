import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Box, Button, Container, Text, RoundedIconButton, RoundedIcon } from '../components';

import {  AuthNavigationProps } from '../components/Navigation';

const SIZE = 80
const PasswordChanged = ({ navigation }: AuthNavigationProps<"PasswordChanged">) => {
    return (
        <Container
            pattern={0}
            footer={
                <Box flexDirection="row" justifyContent="center" marginBottom="m">
                    <RoundedIconButton
                        iconRatio={0.5}
                        name="x"
                        backgroundColor="background"
                        color="secondary"
                        size={60}
                        onPress={() => navigation.pop()} />
                </Box>
            }
        >
            <Box alignItems="center">
                <RoundedIcon
                    iconRatio={0.5}
                    name="check"
                    size={SIZE}
                    backgroundColor="primaryLight"
                    color="primary" />
            </Box>
            <Text
                variant="title2"
                textAlign="center"
                marginVertical="l"
            >
                Your password was successfully changed
                </Text>
            <Text
                textAlign="center"
                variant="body"
                marginBottom="l"
            >
                Close this window and login again
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
        </Container>
    );
};

export default PasswordChanged;