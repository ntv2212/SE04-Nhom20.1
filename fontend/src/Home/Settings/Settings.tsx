import React from "react";
import { StyleSheet, View } from 'react-native';
import { HomeNavigationProps } from "../../components/Navigation";
import { Box, Header, ContentFooter } from "../../components";

import Notification from "./Notification"


const Settings = ({ navigation }: HomeNavigationProps<"Settings">) => {
    return (

        <ContentFooter>
            <Box backgroundColor="background">
                <Header
                    title="Notifications"
                    left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
                    right={{ icon: "share", onPress: () => true }}
                />
                <Box padding="m">
                    <Notification
                        title="Home Page"
                        description="Receive daily notification"
                    />
                    <Notification
                        title="Discounts & Sales"
                        description="Buy the stuff you love for less"
                    />
                    <Notification
                        title="Stock Notification"
                        description="If the product you comes back stock"
                    />
                    <Notification
                        title="New Stuff"
                        description="Hear it first ,wear it first"
                    />
                </Box>
            </Box>
        </ContentFooter>

    );
}
export default Settings;