import React from 'react';
import { Box, Text, useTheme } from '../../components';
import SwipeableRow from './SwipeableRow'

interface ItemProps {
    onDelete: () => void
}

const Item = ({ onDelete }: ItemProps) => {
    const theme = useTheme();
    const height = 120 + theme.spacing.m * 2
    return (
        <SwipeableRow onDelete={onDelete} height={height}>
            <Box padding="m" flexDirection="row">
                <Box style={{ backgroundColor: "#BFEAF5" }}
                    width={120}
                    height={120}
                    borderRadius="m"
                />
                <Box padding="m" flex={1} justifyContent="center">

                    <Text variant="header">Size M L</Text>
                    <Text variant="title3" marginBottom="s">ao dai </Text>
                    <Text variant="title3" color="primary">gia</Text>
                </Box>
                <Box justifyContent="center" >
                    <Box
                        backgroundColor="secondary"
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 24,
                            height: 24,
                            borderRadius: 12,
                        }}
                    >
                        <Text variant="header" color="background">
                            x2
                    </Text>
                    </Box>
                </Box>
            </Box>
        </SwipeableRow>
    )
}
export default Item