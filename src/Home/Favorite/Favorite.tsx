import React, { useState, useRef } from 'react'
import { ScrollView, Dimensions } from 'react-native'
import { Transitioning, Transition, TransitioningView } from 'react-native-reanimated';
import { HomeNavigationProps } from 'src/components/Navigation';
import { Box, Header, useTheme } from '../../components';
import Outfit from './Outfit';
import Footer from './Footer';
import TopCurve from './TopCurve';

const { width: wWidth } = Dimensions.get("window");

let img1 = { uri : 'https://firebasestorage.googleapis.com/v0/b/fir-demo-a3e0d.appspot.com/o/Favorite%2Faobo.png?alt=media&token=53118646-d60c-47a8-bcf0-162a385aaaad'};
let img2 = { uri : 'https://firebasestorage.googleapis.com/v0/b/fir-demo-a3e0d.appspot.com/o/Favorite%2Faokhoac.png?alt=media&token=cb103578-4b75-4b71-95b0-465ae4b0a4c1'};


const defauOutfits = [
    {
        id: 1,
        aspectRatio: 1,
        selected: false,
        source: require('../HomePage/assets/aolen1.png')
    },
    {
        id: 2,
        aspectRatio: 1,
        selected: false,
        source:require('../HomePage/assets/2.png'),
    },
    {
        id: 3,
        aspectRatio: 1,
        selected: false,
        source:img1,
    },
    {
        id: 4,
        aspectRatio: 1,
        selected: false,
        source:img2,
    },
    // {
    //     id: 5,
    //     aspectRatio: 1,
    //     selected: false,
    //     source:img2,
    // },
    // {
    //     id: 6,
    //     aspectRatio: 1,
    //     selected: false,
    //     source:img2,
    // },
    // {
    //     id: 7,
    //     aspectRatio: 1,
    //     selected: false,
    //     source:img2,
    // },
    // {
    //     id: 8,
    //     aspectRatio: 1,
    //     selected: false,
    //     source:img2,
    // },
    // {
    //     id: 9,
    //     aspectRatio: 1,
    //     selected: false,
    //     source:img2,
    // },
    // {
    //     id: 10,
    //     aspectRatio: 1,
    //     selected: false,
    //     source:img2,
    // },

]
const Favorites = ({ navigation }: HomeNavigationProps<"Favorite">) => {
    const transition =
        <Transition.Together>
            <Transition.Out type="fade"/>
            <Transition.In type="fade" />
        </Transition.Together>;
    const [outfits, setOutfit] = useState(defauOutfits);
    const list = useRef<TransitioningView>(null);
    const theme = useTheme();
    const width = (wWidth - theme.spacing.m * 3) / 2;
    const [footerHeight, setFooterHeight] = useState(0);
    return (
        <Box flex={1} backgroundColor="background">
            <Header title="Favorite" 
                left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
                right={{ icon: "shopping-bag", onPress: () =>  navigation.navigate("Cart")}}
            />
            <Box flex={1}>
                <ScrollView contentContainerStyle={{
                    paddingHorizontal: theme.spacing.m,
                    paddingBottom: footerHeight
                }}
                ><Transitioning.View ref={list} transition={transition}>
                        <Box flexDirection="row" >
                            <Box marginRight="m">
                                {outfits.filter((_,i) => i % 2 !== 0).map(
                                    (outfit) => <Outfit
                                        key={outfit.id}
                                        outfit={outfit}
                                        width={width}
                                    />
                                )}
                            </Box>
                            <Box>
                                {outfits.filter((_,i) => i % 2 === 0).map(
                                    (outfit) => <Outfit
                                        key={outfit.id}
                                        outfit={outfit}
                                        width={width}
                                    />
                                )}
                            </Box>
                        </Box>
                    </Transitioning.View>
                </ScrollView>
                <TopCurve footerHeight={footerHeight}/>
                <Box position="absolute" bottom={0} left={0} right={0}
                    onLayout={({
                        nativeEvent: {
                            layout: { height },
                        },
                    }) => setFooterHeight(height)}
                >
                    <Footer
                        label="Add to cart"
                        onPress={() => {
                            list.current?.animateNextTransition();
                            setOutfit(outfits.filter((outfit) => !outfit.selected));
                        }} />
                </Box>
            </Box>
        </Box>


    );
}

export default Favorites;