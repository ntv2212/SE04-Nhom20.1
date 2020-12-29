import React from 'react'
import { Box, Button, Container, Text } from "../components"
import TextInput from '../components/Form/TextInput';
import CheckBox from '../components/Form/CheckBox';
//import firebase from 'firebase';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from './components/Footer';
import { AuthNavigationProps } from '../components/Navigation';
import { BorderlessButton } from 'react-native-gesture-handler';
import { firebaseRN} from '../Severs/firebaseConfig'
// import { CommonActions } from '@react-navigation/native';
import { useState } from 'react';



// const emailValidator = (email: string) =>
//     // /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g.test(email);
// const passwordValidator = (password: string) => password.length >= 6;


const Login = ({ navigation }: AuthNavigationProps<"Login">) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const LoginSchema = Yup.object().shape({
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
    });
    const {
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue
    } = useFormik({
        validationSchema: LoginSchema,
        initialValues: { email: '', password: '', remember: true },
        onSubmit: () => 
            // navigation.dispatch(
            //     CommonActions.reset({
            //         index:0,
            //         routes:[{name:"Home"}],
            // }))
            firebaseRN
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(onLoginSuccess)
                .catch((err:any) => {
                    alert(err);
                })
    });
    const footer = (
        <Footer
            title="Dont u have an account! "
            action="Sign up here"
            onPress={() => navigation.navigate("SignUp")}
        />
    );
    const onLoginSuccess = () => {
        navigation.navigate('Home')
    }
    const onClickLogin = () => {
        firebaseRN
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(onLoginSuccess)
            .catch((err:any) => {
                alert(err);
            });
    }

    return (
        <Container pattern={0} {...{ footer }}>
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
                <Box marginBottom="m" >
                    <TextInput
                        icon="mail"
                        placeholder="Enter your email"
                        // validator={emailValidator}
                        onChangeText={email => setEmail(email)}
                        onBlur={handleBlur('email')}
                        error={errors.email}
                        touched={touched.email}
                        autoCompleteType="email"
                        autoCapitalize="none"
                        returnKeyType="next"
                        returnKeyLabel="next"
                    />
                </Box>
                <Box marginBottom="m">
                    <TextInput
                        icon="lock"
                        placeholder="Enter your password "
                        // validator={passwordValidator}
                        onChangeText={password => setPassword(password)}
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
                <Box flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    marginVertical="s"
                >
                    <CheckBox
                        label="Remember me"
                        checked={values.remember}
                        onChange={() => setFieldValue("remember", !values.remember)}
                    />
                    <BorderlessButton onPress={() => navigation.navigate("ForgotPassword")}>
                        <Text variant="button" color="primary">Forgot password</Text>
                    </BorderlessButton>
                </Box>
                <Box
                    alignItems="center"
                    marginTop="m"
                >
                    <Button
                        variant="primary"
                        onPress={onClickLogin}
                        label="log in to ur account"
                    />
                </Box>
            </Box>

        </Container>
    );
}

export default Login;