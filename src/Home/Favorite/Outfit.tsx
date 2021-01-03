import React, { useState } from 'react';
import { Image, ImageBackground, ImageRequireSource } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { Box, RoundedIcon } from '../../components';


//const { width: wWidth } = Dimensions.get("window");

interface OutfitProps {
    outfit: {
        //color: string;
        aspectRatio: number;
        id: number;
        selected: boolean;
        source: ImageRequireSource;
    }
    width: number;

};

const Outfit = ({
    outfit,
    width,
}: OutfitProps) => {
    const [selected, setSelected] = useState(false);
    return (
        <BorderlessButton onPress={() => {
            setSelected((prev) => !prev);
            outfit.selected = !outfit.selected;
        }}>
            <Box
                style={{
                    //backgroundColor: outfit.color,
                    width,
                    height: width * outfit.aspectRatio,
                }}
                borderRadius="m"
                marginBottom="m"
                marginTop="m"
                padding="m"
                justifyContent='center'
                alignItems='center'
            >
            <ImageBackground source={outfit.source}
                style={{
                    width,
                    height: width * outfit.aspectRatio,

                }}
            >

                {selected && (
                    <RoundedIcon
                        name="check"
                        backgroundColor="primary"
                        color="background"
                        size={24}
                    />
                )}
            </ImageBackground>
            </Box>
        </BorderlessButton >
    );
}
export default Outfit;
