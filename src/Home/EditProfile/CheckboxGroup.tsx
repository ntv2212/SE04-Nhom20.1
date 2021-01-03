import React, { useState } from 'react';
import { Box, Button, useTheme } from '../../components';

interface CheckboxGroupProps {
    options: {value: string, label: string}[]
    radio?: boolean
}

const CheckboxGroup = ({options, radio} : CheckboxGroupProps) => {
    const theme = useTheme();
    const [selectedValue, setSelectedValue] = useState<string[]>([])
    return (
        <Box flexDirection="row" flexWrap="wrap" marginTop="s">
            {
                options.map(({label, value}) =>{
                    const index = selectedValue.indexOf(value)
                    const isSelected = index !== -1;
                    return(
                        <Button 
                            key={value}
                            variant={isSelected ? "primary" : "default"}
                            onPress={() =>{
                                if(radio){
                                    setSelectedValue([value])
                                }else{
                                    if (isSelected) {
                                        selectedValue.splice(index,1)
                                    }else{
                                        selectedValue.push(value)
                                    }
                                    setSelectedValue([...selectedValue])
                                }
                                
                            }}
                            label={label}
                            style = {{width:"auto", height:"auto", padding:16, marginBottom: theme.spacing.m,marginRight:theme.spacing.s}}
                        />
                        
                        
                    )
            }
                )}
        </Box>
)
}


export default CheckboxGroup;