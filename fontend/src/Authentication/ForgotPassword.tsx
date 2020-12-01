import { Formik, useFormik } from 'formik';
import React from 'react';
import { Linking } from 'react-native'
import { Box, Container } from '../components';
import { Routes, StackNavigationProps } from '../components/Navigation';
import Footer from "./components/Footer";
import * as Yup from "yup"
import { Text, Button } from "../components"
import TextInput from './components/Form/TextInput';





const ForgotPassword = ({ navigation }: StackNavigationProps<Routes, "ForgotPassword">) => {
    const ForgotPasswordSchema = Yup.object().shape({

        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
    });
    const { 
        handleChange, 
        handleBlur, 
        handleSubmit, 
        
        errors, 
        touched, 
        
    } = useFormik({validationSchema:ForgotPasswordSchema,
        initialValues:{ email: ''},
        onSubmit:(values) => console.log(values)
    });
    const footer = (
        <Footer
            title="Don't work?"
            action="Try another way"
            onPress={() => Linking.openURL("mailto:help@support.com")}
        />
    )
    return (
        <Container {...{ footer }}>
            <Box padding="xl" flex={1} justifyContent="center">
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
                {/* <Formik
                    validationSchema={ForgotPasswordSchema}
                    initialValues={{ email: "" }}
                    onSubmit={() => navigation.navigate("PasswordChanged")}


                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        errors,
                        touched,

                    }) => ( */}
                            
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
                                        returnKeyType="go"
                                        returnKeyLabel="go"
                                        onSubmitEditing={() => navigation.navigate("PasswordChanged")}
                                    />
                                <Box/>

                                <Box
                                    alignItems="center"
                                    marginTop="m"
                                >
                                    <Button
                                        variant="primary"
                                        onPress={() =>navigation.navigate("PasswordChanged")}
                                        label="Reset password"
                                    />
                                </Box>
                            </Box>
                         {/* )};
                </Formik>  */}
            </Box>
        </Container>
    )

};

export default ForgotPassword;