import React from 'react';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RoundedIconButton from './RoundedIconButton';
import { Box, Text } from './Theme';

interface HeaderProps {
    left: {
        icon: string;
        onPress: () => void;
    };
    title: string;
    right: {
        icon: string;
        onPress: () => void;
    };
    dark: boolean;
}

const Header = ({ title, left, right, dark }: HeaderProps) => {
    // const insets = useSafeAreaInsets();
    const color = dark ? "white" : "secondary"
    const backgroundColor = dark ? "secondary" : "lightGrey"
    return (
        <Box flexDirection="row"
            style={{ marginTop: 20 }}
            alignItems="center"
            justifyContent="space-between"
            paddingHorizontal="m"
        >
            <RoundedIconButton
                iconRatio={0.5}
                size={30}
                name={left.icon}
                onPress={left.onPress}
                {...{ color, backgroundColor }}
            />
            <Text variant="header" {...{ color }}>{title.toUpperCase()}</Text>
            <RoundedIconButton
                iconRatio={0.5}
                size={30}
                name={right.icon}
                onPress={right.onPress}
                {...{ color, backgroundColor }}
            />
        </Box>
    );
};
Header.defaultProps = {
    dark: false,
}
export default Header;