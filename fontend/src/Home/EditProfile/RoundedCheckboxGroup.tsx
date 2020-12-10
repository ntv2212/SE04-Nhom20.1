import React, { useState } from 'react';
import {View} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Box, Text, useTheme        } from '../../components';
import Icon from "react-native-vector-icons/Feather";
interface RoundedCheckboxGroupProps {
    options: {value: string}[];
    valueIsColor?: boolean
}

const RoundedCheckboxGroup = ({options,valueIsColor} : RoundedCheckboxGroupProps) => {
    const [selectedValue, setSelectedValue] = useState<string[]>([])
    const theme = useTheme();

    return (
        <Box flexDirection="row" flexWrap="wrap" marginTop="s">
            {
                options.map(({ value}) =>{
                    const index = selectedValue.indexOf(value)
                    const isSelected = index !== -1;
                    
    const backgroundColor =isSelected ? theme.colors.primary : theme.colors.background2;
                    return(
                        <BorderlessButton
                            key={value}
                            onPress={() =>{
                                if (isSelected) {
                                    selectedValue.splice(index,1)
                                }else{
                                    selectedValue.push(value)
                                }
                                setSelectedValue([...selectedValue])
                            }}
                        >
                            <View style={{
                                width:50, 
                                height: 50,
                                borderRadius:25, 
                                justifyContent: 'center', 
                                alignItems: 'center',
                                borderWidth : isSelected ? 1 : 0,
                                borderColor: theme.colors.background2,
                                
                                marginBottom: theme.spacing.m,
                                marginRight:theme.spacing.s,
                                }}
                            >
                            <View style={{
                                width:40, 
                                height:40, 
                                borderRadius:2000, 
                                backgroundColor: valueIsColor ? value : backgroundColor,
                                justifyContent:"center",
                                alignItems: "center",
                            }}>
                                {!valueIsColor && (
                                <Text textAlign="center" variant="header" color={isSelected ? "background" :"secondary"}>{value.toUpperCase()}</Text>)}
                                {valueIsColor && isSelected &&(
                                    <Icon color="white" name="check" size={16}/>
                                )}
                            </View>
                            </View>
                        </BorderlessButton>
                        
                        
                    )
            }
                )}
        </Box>
)
}


export default RoundedCheckboxGroup;