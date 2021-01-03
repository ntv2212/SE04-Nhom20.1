
import React, { useState } from 'react';

import { HomeNavigationProps } from 'src/components/Navigation';
import { Box, Header } from '../../components';
import Background from './Background';
import Categories from './Categories';
import Card from './Card'
import { useTiming } from 'react-native-redash';


let image1 = { uri : 'https://firebasestorage.googleapis.com/v0/b/fir-demo-a3e0d.appspot.com/o/Homepage%2Faococ.png?alt=media&token=0c54f102-fb6b-4e2f-9366-35c560bc5eee'};
let image2 = { uri : 'https://firebasestorage.googleapis.com/v0/b/fir-demo-a3e0d.appspot.com/o/Homepage%2Faolen.png?alt=media&token=752cad91-5d2b-4652-8cd7-89618da61fa5'};
let image3 = { uri : 'https://firebasestorage.googleapis.com/v0/b/fir-demo-a3e0d.appspot.com/o/Homepage%2Fconverse.png?alt=media&token=218d5a74-c7d8-4cb7-9491-52a47fd6aa8c'};
let image4 = { uri : 'https://firebasestorage.googleapis.com/v0/b/fir-demo-a3e0d.appspot.com/o/Homepage%2Fgucci.png?alt=media&token=037ce7bc-ec48-4f4e-9156-a83952083951'};
let image5 = { uri : 'https://firebasestorage.googleapis.com/v0/b/fir-demo-a3e0d.appspot.com/o/Homepage%2Fhoddie.png?alt=media&token=cc2cf55f-d813-430b-92ef-81d91a0abab9'};
let image6 = { uri : 'https://firebasestorage.googleapis.com/v0/b/fir-demo-a3e0d.appspot.com/o/Homepage%2Fkhoactrangg.png?alt=media&token=21f18f93-2651-40c7-a6b6-de5a7c63ffa9'};
let image7 = { uri : 'https://firebasestorage.googleapis.com/v0/b/fir-demo-a3e0d.appspot.com/o/Homepage%2Fkinh.png?alt=media&token=a03a5f69-6651-47f8-9ecb-66150fdef55b'};
let image8 = { uri : 'https://firebasestorage.googleapis.com/v0/b/fir-demo-a3e0d.appspot.com/o/Homepage%2Fmulen.png?alt=media&token=3aaaa40f-ffff-4233-aee1-465cb4ecd79d'};
let image9 = { uri : 'https://firebasestorage.googleapis.com/v0/b/fir-demo-a3e0d.appspot.com/o/Homepage%2Fswe.png?alt=media&token=36fb8086-f68b-4c97-9fe0-0cffcb60a3cd'};
let image10 = { uri : 'https://firebasestorage.googleapis.com/v0/b/fir-demo-a3e0d.appspot.com/o/Homepage%2Ftuixach.png?alt=media&token=a8ebece4-a6bd-4a88-bd09-11c918946833'};

const cards = [
    {
        index :10,
        source: image10
    },
    {
        index :9,
        source: image9
    },

    {
        index: 8,
        source: image8
    },
        
    {
        index: 7,
        source: image7
    },

    {
        index: 6,
        source: image6
    },

    {
        index: 5,
        source: image5
    },

    {
        index: 4,
        source: image4
    },

    {
        index: 3,
        source: image3
    },
    {
        index: 2,
        source:image2
    },
    {
        index: 1,
        source: image1
    },
    {
        index: 0,
        source: require('./assets/aolen1.png')
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
                right={{ icon: "shopping-bag", onPress: () =>  navigation.navigate("Cart")}}
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