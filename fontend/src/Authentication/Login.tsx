
import React, { useRef } from 'react'
import { TextInput as RNTextInput } from 'react-native';
import { Box, Button, Container, Text } from "../components"
import TextInput from './components/Form/TextInput';
import CheckBox from './components/Form/CheckBox';

import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from './components/Footer';
import { Routes, StackNavigationProps } from '../components/Navigation';

const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

// const emailValidator = (email: string) =>
//     // /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g.test(email);
// const passwordValidator = (password: string) => password.length >=6  ;
const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
     
    const { 
        handleChange, 
        handleBlur, 
        handleSubmit, 
        values,
        errors, 
        touched, 
        setFieldValue
    } = useFormik({validationSchema:LoginSchema,
        initialValues:{ email: '', password: '',remember:true},
        onSubmit:(values) => console.log(values)});
    const password = useRef<RNTextInput>(null);
    const footer =(
        <Footer 
            title="Dont u have an account" 
            action="Sign up here" 
            onPress={() =>  navigation.navigate("SignUp")}
        />
    );
    return (
        <Container {...{ footer }}>
            <Box padding="xl">
                <Text
                    variant="title2"
                    textAlign="center"
                    marginBottom="l"
                >
                    Welcome
                </Text>
                <Text
                    textAlign="center"
                    variant="body"
                    marginBottom="l"
                >
                    Use your credentials below and login to your account
                </Text>
                {/* <Formik
                    validationSchema={LoginSchema}
                    initialValues={{ email: "", password: "", remember: true }}
                    onSubmit={(values) => console.log(values)}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        errors,
                        touched,
                        values,
                        setFieldValue
                    }) => ( */}
                            <Box>
                                <Box marginBottom="m">
                                    <TextInput
                                        icon="mail"
                                        placeholder="Enter your email"
                                        //validator={emailValidator} 
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        error={errors.email}
                                        touched={touched.email}
                                        autoCompleteType="email"
                                        autoCapitalize="none"
                                        returnKeyType="next"
                                        returnKeyLabel="next"
                                        onSubmitEditing = {() => password.current?.focus()}
                                    />
                                </Box>
                                <Box marginBottom="m">
                                    <TextInput
                                        ref={password}
                                        icon="lock"
                                        placeholder="Enter your password "
                                        // validator={passwordValidator} 
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        error={errors.password}
                                        touched={touched.password}
                                        secureTextEntry
                                        autoCompleteType="password"
                                        autoCapitalize="none"
                                        returnKeyType="go"
                                        returnKeyLabel="go"
                                        onSubmitEditing={() => handleSubmit()}
                                    />

                                </Box>
                                <Box flexDirection="row" justifyContent="space-between">
                                    <CheckBox
                                        label="Remember me"
                                        checked={values.remember}
                                        onChange={() => setFieldValue("remember", !values.remember)}
                                    />
                                    <Button variant="transparent" onPress={() => navigation.navigate("ForgotPassword")}>
                                        <Text color="primary">
                                            Forgot password
                                    </Text>
                                    </Button>
                                </Box>
                                <Box
                                    alignItems="center"
                                    marginTop="m"
                                >
                                    <Button
                                        variant="primary"
                                        onPress={handleSubmit}
                                        label="log in to ur account"
                                    />
                                </Box>
                            </Box>
                        {/* )}
                </Formik> */}
            </Box>
        </Container>
    );
}

export default Login;