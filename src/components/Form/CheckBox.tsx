import React  from 'react'
import { BorderlessButton,  } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { Box, Text } from '../Theme';

interface CheckboxProps {
    label: string
    checked :boolean
    onChange: () => void
}

const Checkbox = ({ label,onChange,checked }: CheckboxProps) => {
   // const [checked, setChecked] = useState(defaultValue);
    return (
        <BorderlessButton 
            onPress={() => onChange()}
            style={{ justifyContent: 'center' }}
        >
            <Box flexDirection="row" alignItems="center">
                <Box 
                    marginRight="m" 
                    height={20} 
                    width={20} 
                    borderRadius="s" 
                    justifyContent="center" 
                    alignItems="center" 
                    borderWidth={1} 
                    borderColor="primary" 
                    backgroundColor={checked?"primary" : "background"}>
                <Icon name="check" color="white"/>
            </Box>
                <Text variant="button" >{label}</Text>
            </Box>
        </BorderlessButton>
    );
}

export default Checkbox;