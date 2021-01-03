import { BoxProps } from '@shopify/restyle';
import React, { ReactNode } from 'react'
import { BorderlessButton } from 'react-native-gesture-handler';
import { Theme } from '../../components/Theme';
import { Box } from '../../components';


export const CARD_HEIGHT = 160;
interface CardProps {
    children: ReactNode;
    onPress: () => void;
    backgroundColor: BoxProps<Theme>["backgroundColor"];
}

const CardLayout = ({ onPress, children, backgroundColor }: CardProps) => {
    return (
        <BorderlessButton onPress={onPress}>
            <Box
                padding="m"
                marginLeft="m"
                borderRadius="m"
                width={120}
                height={CARD_HEIGHT}
                backgroundColor={backgroundColor}
            >
                {children}
            </Box>
        </BorderlessButton>
    );
}

export default CardLayout;