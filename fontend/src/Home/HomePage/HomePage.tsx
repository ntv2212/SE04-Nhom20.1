
import React, { useState } from 'react';
import { interpolate, sub } from 'react-native-reanimated';

import { useTransition } from 'react-native-redash';
import { HomeNavigationProps } from 'src/components/Navigation';
import { Box, Header } from '../../components';
import Background from './Background';
import Categories from './Categories';
import Card from './Card'

const cards = [
    {
        index: 3,
        source: require('../../Authentication/assets/4.png')
    },
    {
        index: 2,
        source: require('../../Authentication/assets/3.png')
    },
    {
        index: 1,
        source: require('../../Authentication/assets/2.png')
    },
    {
        index: 0,
        source: require('../../Authentication/assets/1.png')
    }
];
const step = 1 / (cards.length - 1);

const HomePage = ({ navigation }: HomeNavigationProps<"HomePage">) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const aIndex = useTransition(currentIndex)
    return (
        <Box flex={1} backgroundColor="white">
            <Header title="Home Page"
                left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
                right={{ icon: "shopping-bag", onPress: () => true }}
            />
             <Categories/>
            <Box flex={1}>
                <Background />
               
                {cards.map((
                    { index ,source },) =>
                    currentIndex < index * step + step && (
                        <Card
                            key={index}
                            position={sub(index * step, aIndex)}
                            onSwipe={() => setCurrentIndex((prev) => prev + step)}
                            {...{source,step}}
                        />
                    ))
                }
            </Box>
        </Box>


    );
};
export default HomePage;