import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import TextInput from '../../components/Form/TextInput';
import { Box,Text } from '../../components';
import CheckboxGroup from './CheckboxGroup';

const genders = [
    {value:'male', label:'Male'},
    {value:'female', label:'Female'}
]

const PersonalInfo = () => {
    return (
        <ScrollView>
            <Box padding="m">

                <Text variant="body" marginBottom="m">Account infomation</Text>
                <Box marginBottom="m">
                    <TextInput
                        icon="user"
                        placeholder="Name"
                        //validator={emailValidator} 
                        autoCompleteType="name"
                        autoCapitalize="none"
                    />
                    
                </Box>
                <Box marginBottom="m">
                <TextInput
                        icon="lock"
                        placeholder="Enter your password "
                        // validator={passwordValidator}
                        secureTextEntry
                        autoCompleteType="password"
                        autoCapitalize="none"
                    />
                </Box>
                <Box marginBottom="m">
                    <TextInput
                        icon="map-pin"
                        placeholder="Address"
                        //validator={emailValidator} 
                        autoCompleteType="street-address"
                        autoCapitalize="none"
                    />
                    
                </Box>
                    
            <CheckboxGroup options={genders} radio/>
            </Box>
        </ScrollView>
    )
}

export default PersonalInfo