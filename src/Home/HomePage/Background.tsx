import React from 'react';
import { View, StyleSheet, } from 'react-native';
import { Box } from '../../components';


const background = () => {
    //const theme = useTheme();
    return (
        <View style={StyleSheet.absoluteFillObject}>
            <Box flex={1 / 3} style={{backgroundColor:"white"}}>
                <Box flex={1} backgroundColor="background" borderBottomRightRadius="xl" />
            </Box>
            <Box flex={1 / 3}>
                {/* <Box flex={1} backgroundColor="white" />
                <Box flex={1} backgroundColor="secondary" />
                <Image source={require("./assets/2.png")}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        width: undefined,
                        height: undefined,
                        borderTopLeftRadius: theme.borderRadii.xl,
                        borderBottomRightRadius: theme.borderRadii.xl,
                    }}
                /> */}
            </Box>
            <Box flex={1 / 3} style={{backgroundColor:"white"}}>
                <Box flex={1} backgroundColor="secondary" borderTopLeftRadius="xl"></Box>
            </Box>
        </View>
    );
}
export default background;