import React from 'react';

import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import RoundedIcon, { RoundedIconProps } from './RoundedIcon';


export interface RoundedIconButtonProps extends RoundedIconProps {
    onPress: () => void;
}

const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
    return (
        <BorderlessButton {...{ onPress }}>
            <RoundedIcon {...props} />
        </BorderlessButton>
    )
}
RoundedIconButton.defaultProps = {
    iconRatio: 0.7
}
export default RoundedIconButton;