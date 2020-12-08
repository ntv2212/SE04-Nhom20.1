import React, { useState } from 'react';
import { View,StyleSheet } from 'react-native';
import { Box, Text,BorderLessTap } from "../../components";
const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;
interface CategoryProps {
    category: {
        id: string,
        color: string;
        title: string;
    }
}
const Category = ({ category: { title, color: backgroundColor } }: CategoryProps) => {
    const [selected, setSelected] = useState(false);
    return (
        <BorderLessTap onPress={() => setSelected((prev) => !prev)}>
            <Box
                marginLeft="m"
                marginTop="s"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    width={OUTER_RADIUS * 2}
                    height={OUTER_RADIUS * 2}
                    justifyContent="center"
                    alignItems="center"
                >
                    {
                        selected && (
                            <View style={{
                               ...StyleSheet.absoluteFillObject,
                                borderRadius: INNER_RADIUS,
                                borderColor: backgroundColor,
                                borderWidth:1,
                            }} />
                        )
                    }
                    <View style={{
                        width: INNER_RADIUS * 2,
                        height: INNER_RADIUS * 2,
                        borderRadius: INNER_RADIUS,
                        backgroundColor
                    }}
                    />
                </Box>
                <Text textAlign="center" marginTop="s" variant="header">{title}</Text>
            </Box>
        </BorderLessTap>

    );
}
export default Category;