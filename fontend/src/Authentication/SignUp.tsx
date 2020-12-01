
import React, { useRef } from 'react'
import { TextInput as RNTextInput } from 'react-native';
import { Box, Button, Container, Text } from "../components"
import TextInput from './components/Form/TextInput';

import {  useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from './components/Footer';
import { Routes, StackNavigationProps } from '../components/Navigation';

const SignUpSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    passwordConfirmation: Yup.string()
        .equals([Yup.ref("password")], "Password dont match")
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

// const emailValidator = (email: string) =>
//     // /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g.test(email);
// const passwordValidator = (password: string) => password.length >=6  ;
const SignUp = ({ navigation }: StackNavigationProps<Routes, "SignUp">) => {

    const { 
        handleChange, 
        handleBlur, 
        handleSubmit, 
        
        errors, 
        touched, 
        
    } = useFormik({validationSchema:SignUpSchema,
        initialValues:{ email: '', password: '',passwordConfirmation:'',remember:true},
        onSubmit:(values) => console.log(values)});
    const password = useRef<RNTextInput>(null);
    const passwordConfirmation = useRef<RNTextInput>(null);
    const footer = (
        <Footer
            title="Already have an account?"
            action="Login here"
            onPress={() => navigation.navigate("Login")}
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
                    Create account
                </Text>
                <Text
                    textAlign="center"
                    variant="body"
                    marginBottom="l"
                >
                    Let's us know what ur name, email, and ur password
                </Text>
                {/* <Formik
                    validationSchema={SignUpSchema}
                    initialValues={{ email: "", password: "", passwordConfirmation: "", remember: true }}
                    onSubmit={(values) => console.log(values)}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        errors,
                        touched,

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
                                        onSubmitEditing={() => password.current?.focus()}
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
                                        returnKeyType="next"
                                        returnKeyLabel="next"
                                        onSubmitEditing={() => passwordConfirmation.current?.focus()}
                                    />

                                </Box>
                                <Box marginBottom="m">
                                    <TextInput
                                        ref={passwordConfirmation}
                                        icon="lock"
                                        placeholder="Confirm your password "
                                        // validator={passwordValidator} 
                                        onChangeText={handleChange('passwordConfirmation')}
                                        onBlur={handleBlur('passwordConfirmation')}
                                        error={errors.passwordConfirmation}
                                        touched={touched.passwordConfirmation}
                                        secureTextEntry
                                        autoCompleteType="password"
                                        autoCapitalize="none"
                                        returnKeyType="go"
                                        returnKeyLabel="go"
                                        onSubmitEditing={() => handleSubmit()}
                                    />

                                </Box>

                                <Box
                                    alignItems="center"
                                    marginTop="m"
                                >
                                    <Button
                                        variant="primary"
                                        onPress={handleSubmit}
                                        label="Create ur account"
                                    />
                                </Box>
                            </Box>
                        {/* )}
                </Formik> */}
            </Box>
        </Container>
    );
}

export default SignUp;