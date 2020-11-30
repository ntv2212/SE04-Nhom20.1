
import React from 'react'
import theme, { Box, Text } from '../../components/Theme'
import { Dimensions, Image } from "react-native"
import { Button } from '../../components';
import { Routes, StackNavigationProps } from 'src/components/Navigation';

const { width } = Dimensions.get("window");
const picture = {
    src: require('../assets/1.png'),
    width: 3383,
    height: 5074,
}
const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {

    return (
        <Box flex={1} backgroundColor="white">
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
                <Box backgroundColor="white"
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
                        onPress={() => true}
                    />
                    <Button
                        label="Join us, it't Free "
                        onPress={() => navigation.navigate("Login")}
                    />
                    <Button
                        variant="transparent"
                        label="Forgot password "
                        onPress={() => true}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Welcome;