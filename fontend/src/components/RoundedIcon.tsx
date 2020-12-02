import React from 'react';
import Icon from "react-native-vector-icons/Feather";
import { Box, Theme, Text } from './Theme';

export interface RoundedIconProps {
    name: string;
    size: number;
    color: keyof Theme["colors"];
    backgroundColor: keyof Theme["colors"];
    iconRatio: number;
}

const RoundedIcon = ({ name, size, color, backgroundColor,iconRatio }: RoundedIconProps) => {
    const iconSize = size * iconRatio;
    return (
        <Box
            height={size}
            width={size}
            justifyContent="center"
            alignItems="center"
            style={{ borderRadius: size / 2 }}
            {...{ backgroundColor }}
        >
            <Text  {...{ color }}>
                <Icon
                    size={iconSize}
                    {...{ name }}
                />
            </Text>
        </Box>
    );
};

RoundedIcon.defaultProps = {
    iconSize:0.7
}
export default RoundedIcon;