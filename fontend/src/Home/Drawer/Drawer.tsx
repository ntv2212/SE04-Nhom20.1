

import React from "react";
import { Dimensions } from "react-native";
import DrawerItem, { DrawerItemProps } from "./DrawerItem";
import { Header,Box,Text } from "../../components";
import { CommonActions, DrawerActions, useNavigation } from "@react-navigation/native";
export const assets = [require("./assets/2.png")]

const { width } = Dimensions.get("window");

export const DRAWER_WIDTH = width * 0.8;
const items: DrawerItemProps[] = [
    {
        icon: "home",
        label: "Home Page",
        screen: "HomePage",
        color: "primary"
    },
    {
        icon: "heart",
        label: 'Favorites',
        screen: "Favorite",
        color: "drawer1"
    },
    {
        icon: "user",
        label: 'Edit Profile',
        screen: "EditProfile",
        color: "drawer2"
    },
    {
        icon: "clock",
        label: 'Transaction History',
        screen: "TransactionHistory",
        color: "drawer3"
    },
    {
        icon: "settings",
        label: 'Settings',
        screen: "Settings",
        color: "drawer4"
    },
    {
        icon: "log-out",
        label: 'Logout',
        onPress:(navigation) => navigation.dispatch(CommonActions.reset({
            index:0,
            routes:[
                {name: "Authentication"},

            ]
        })),
        color: "secondary"
    },

]

const Drawer = () => {
    const navigation = useNavigation();
    const aspectRatio = 750 / 1125;
    const height = width * aspectRatio;
    return (
        <Box flex={1}>
            <Box flex={0.2} backgroundColor="background">
                <Box position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    backgroundColor="secondary"
                    borderBottomRightRadius="xl"
                >
                    <Header
                        title="Menu"
                        left={{ icon: "x", onPress: () => navigation.dispatch(DrawerActions.closeDrawer()) }}
                        right={{ icon: "shopping-bag", onPress: () => true }}
                    />
                </Box>

            </Box>
            <Box flex={0.8} >
                <Box flex={1} backgroundColor="secondary" />
                <Box position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    backgroundColor="background"
                    borderTopLeftRadius="xl"
                    borderBottomRightRadius="xl"
                    justifyContent="center"
                    padding="l"
                >
                    <Box
                        alignSelf="center"
                        backgroundColor="primary"
                        width={100}
                        height={100}
                        style={{ borderRadius: 50, marginBottom: -80 }}
                        top={-90}
                        left={0}
                        right={0}
                        bottom={0}
                    />
                    <Box marginVertical="m">
                        <Text variant="body" textAlign="center">The Bá's Shop</Text>
                        <Text variant="button" textAlign="center">vikesp@gmail.com</Text>
                    </Box>

                    {items.map(item => (
                        <DrawerItem key={item.icon}{...item} />
                    ))}
                </Box>
            </Box>
            <Box backgroundColor="secondary"
                overflow="hidden"
                width={DRAWER_WIDTH}
                height={height * 0.61}
            >
                {/* <Image
                    source={assets[0]}
                    style={{
                        width: DRAWER_WIDTH,
                        height: height,
                        borderTopLeftRadius: theme.borderRadii.xl,
                    }}
                /> */}
            </Box>
        </Box>
    );
}
export default Drawer;