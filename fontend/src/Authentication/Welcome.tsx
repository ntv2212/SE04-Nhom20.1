
import React from 'react'
import { Box, Text, useTheme } from '../components/Theme'
import { Dimensions, Image } from "react-native"
import { Button } from '../components';
import { AuthNavigationProps } from '../components/Navigation';
import { BorderlessButton } from 'react-native-gesture-handler';

const { width } = Dimensions.get("window");
const picture = {
    src: require('./assets/1.png'),
    width: 3383,
    height: 5074,
}
const Welcome = ({ navigation }: AuthNavigationProps<"Welcome">) => {
    const theme = useTheme();
    return (
        <Box flex={1} backgroundColor="background">
            <Box flex={1}
                backgroundColor="grey"
                alignItems="center"
                justifyContent="flex-end"
            >
                <Image
                    source={picture.src}
                    style={{
                        width: width - theme.borderRadii.xl,
                        height: ((width - theme.borderRadii.xl) * picture.height) / picture.width
                    }}></Image>
            </Box>
            <Box flex={1} >
                <Box
                    backgroundColor="grey"
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                />
                <Box backgroundColor="background"
                    flex={1}
                    justifyContent="space-evenly"
                    alignItems="center"
                    padding="xl"
                >
                    <Text variant="title2">
                        Let's get started!
                    </Text>
                    <Text variant="body" textAlign="center">
                        Login to your account below or sign up an amazing experience!
                    </Text>
                    <Button
                        variant="primary"
                        label="Have an account? Login "
                        onPress={() => navigation.navigate("Login")}
                    />
                    <Button
                        label="Join us, it't Free "
                        onPress={() => navigation.navigate("SignUp")}
                    />

                    <BorderlessButton
                        onPress={() => navigation.navigate("ForgotPassword")}
                    >
                        <Text variant="button"  color="secondary">ForgotPassword</Text>
                    </BorderlessButton>
                </Box>
            </Box>
        </Box>
    );
}

export default Welcome;