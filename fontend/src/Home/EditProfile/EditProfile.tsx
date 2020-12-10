import { DrawerActions } from '@react-navigation/native';
import React from 'react';
import { Dimensions } from 'react-native';

import { Header,Box,Text, useTheme } from "../../components";
import { HomeNavigationProps } from '../../components/Navigation';

import Tabs from './Tabs';
import Configuration from './Configuration'
import PersonalInfo from './PersonalInfo'

const {width} = Dimensions.get("window")   
const tabs =[
    {id:"configuration", title:"Configuration"},
    {id:"info", title:"Personal Info"},
]

const EditProfile = ({ navigation }: HomeNavigationProps<"EditProfile">) =>{
    const theme = useTheme();
    return (
        <Box flex={1} backgroundColor="background">
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
                        title=" Edit Profile"
                        left={{ icon: "menu", onPress: () => navigation.dispatch(DrawerActions.openDrawer()) }}
                        dark
                    />
                </Box>
            </Box>
            <Box >
                <Box
                    position="absolute"
                    left={width/2-width/7}
                    top={-50}
                    //alignSelf="center"
                    backgroundColor="primary"
                    width={100}
                    height={100}
                    style={{ borderRadius:50}}
                    //style={{ borderRadius: 50, marginBottom: -80 }}
                    //top={-90} 
                   // left={0}
                    //right={0}
                    //bottom={0}
                />
                <Box marginVertical="m" style = {{marginTop:50 + theme.spacing.m}}>
                    <Text variant="body" textAlign="center">The Bá's Shop</Text>
                    <Text variant="button" textAlign="center">vikesp@gmail.com</Text>
                </Box>
            </Box>
            <Tabs tabs={tabs}>
                <Configuration/>
                <PersonalInfo/>
            </Tabs>
            
        </Box>
    )
}

export default EditProfile