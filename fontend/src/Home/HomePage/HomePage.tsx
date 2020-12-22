
import React, { useState } from 'react';

import { HomeNavigationProps } from 'src/components/Navigation';
import { Box, Header } from '../../components';
import Background from './Background';
import Categories from './Categories';
import Card from './Card'
import { useTiming } from 'react-native-redash';

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
    const aIndex = useTiming(currentIndex)
    return (
        <Box flex={1} backgroundColor="background">
            <Header title="Home Page"
                left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
                right={{ icon: "shopping-bag", onPress: () => true }}
            />
            <Categories />
            <Box flex={1}>
                <Background />

                {cards.map((
                    { index, source },) =>
                    currentIndex < index * step + step && (
                        <Card
                            key={index}
                            index={index}
                            aIndex={aIndex}
                            step={step}
                            onSwipe={() => setCurrentIndex((prev) => prev + step)}
                            {...{ source }}
                        />
                    ))
                }
            </Box>
        </Box>


    );
};
export default HomePage;