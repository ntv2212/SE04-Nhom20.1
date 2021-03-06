
import React, { useRef, useState } from 'react'
import { TextInput as RNTextInput, Alert } from 'react-native';
import { Box, Button, Container, Text } from "../components"
import TextInput from '../components/Form/TextInput';
import { firebaseRN} from '../Severs/firebaseConfig';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from './components/Footer';
import {  AuthNavigationProps } from '../components/Navigation';

// const emailValidator = (email: string) =>
//     // /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g.test(email);
// const passwordValidator = (password: string) => password.length >=6  ;
const SignUp = ({ navigation }: AuthNavigationProps<"SignUp">) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

    const ClickSubmit = () =>
    {
        firebaseRN
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            Alert.alert(
                'Alert Title',
                'Dang ki thanh cong : ' + email,
                [
                    {text : 'OK', onPress:() => navigation.navigate('Login')}
                ]
            )
        }
        ).catch(() =>{
            Alert.alert(
                'Alert Title',
                'Dang ki that bai !',
                [
                    {text : 'OK', onPress: () => navigation.navigate('SignUp')}
                ]
            )
        }
        )
    }
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,

    } = useFormik({
        validationSchema: SignUpSchema,
        initialValues: { email: '', password: '', passwordConfirmation: '', remember: true },
        onSubmit:(values) => console.log(values)
    });
    const passwordConfirmation = useRef<RNTextInput>(null);
    const footer = (
        <Footer
            title="Already have an account?"
            action="Login here"
            onPress={() => navigation.navigate("Login")}
        />
    );
    return (
        <Container pattern={0}{...{ footer }}>
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
                        onChangeText={email => setEmail(email)}
                        onBlur={handleBlur('email')}
                        error={errors.email}
                        touched={touched.email}
                        autoCompleteType="email"
                        autoCapitalize="none"
                        returnKeyType="next"
                        returnKeyLabel="next"
                     //   onSubmitEditing={() => password.current?.focus()}
                    />
                </Box>
                <Box marginBottom="m">
                    <TextInput
                    //    ref={password}
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
                        returnKeyType="next"
                        returnKeyLabel="next"
                     //   onSubmitEditing={() => passwordConfirmation.current?.focus()}
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
                        onPress={ClickSubmit}
                        label="Create ur account"
                    />
                </Box>
            </Box>
        </Container>
    );
}

export default SignUp;