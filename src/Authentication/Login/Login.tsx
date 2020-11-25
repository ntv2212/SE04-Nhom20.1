
import React from 'react'
import { Box, Button, Container, Text } from "../../components"
import TextInput from '../components/Form/TextInput';

import SocialLogin from "../components/SocialLogin"
const emailValidator = (email: string) =>
    // /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g.test(email);
const passwordValidator = (password: string) => true;
const Login = () => {
    const footer = (
        <>
            <SocialLogin />
            <Box alignItems="center">
                <Button variant="transparent" onPress={() => alert("SignUp!")}>
                    <Box flexDirection="row">
                        <Text variant="button" color="white"> Don't have an account?</Text>
                        <Text variant="button" color="primary"> Sign up here</Text>
                    </Box>
                </Button>
            </Box>
        </>
    )
    return (
        <Container {...{ footer }}>
            <Box padding="xl">
                <Text variant="title2" textAlign="center" marginBottom="l">Welcome </Text>
                <Text textAlign="center" variant="body" marginBottom="l">
                    Use your credentials below and login to your account
                </Text>
                <Box marginBottom="m">
                    <TextInput icon="mail" placeholder="Enter your email" validator={emailValidator} />
                </Box>
                <Box marginBottom="m">
                    <TextInput icon="lock" placeholder="Enter your password " validator={passwordValidator} />
                </Box>
            </Box>
        </Container>
    );
}

export default Login;