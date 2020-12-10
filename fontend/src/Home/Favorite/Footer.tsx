import React from 'react'

import { Box, Button } from '../../components';



interface FooterProps {
    label: string;
    onPress: () => void;
}
const Footer = ({ label, onPress }: FooterProps) => {
    // const insets = useSafeAreaInsets();
    return (
        <Box backgroundColor="secondary" padding="m" borderTopLeftRadius="xl">
            <Box
                style={{ paddingBottom: 20 }}
                alignItems="center"

            >
                <Button variant="primary" {...{ onPress, label }} />
            </Box>
        </Box>

    );
}

export default Footer;