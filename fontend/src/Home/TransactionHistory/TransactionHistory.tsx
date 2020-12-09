import React from 'react'
import { HomeNavigationProps } from 'src/components/Navigation';
import Graph, { DataPoint } from "./Graph";
import { Box, Header, makeStyles, Text } from '../../components';
import { Dimensions, ScrollView, Image, StyleSheet, PixelRatio } from 'react-native';
import Transaction from './Transaction';
import { Theme, theme } from 'src/components/Theme';
import TopCurve from './TopCurve';

const footerHeight = Dimensions.get("window").width / 3;    

const useStyles = makeStyles((theme : Theme)=>({
    footer: {
        ...StyleSheet.absoluteFillObject,
        width:undefined,
        height: undefined,
        borderTopLeftRadius: theme.borderRadii.xl,
    },
    scrollView: {
        paddingBottom: footerHeight,

    }
}));
const aspectRatio = 10
const {width} = Dimensions.get("window")
const startDate = new Date("2020-09-01").getTime();
const numberOfMonths = 6;

const data: DataPoint[] = [
    {
        date: new Date("2020-10-02").getTime(),
        value: 139.42,
        color: "pink",
        id: 245672,
    },
    {
        date: new Date("2020-11-01").getTime(),
        value: 281.23,
        color: "secondary",
        id: 245673,
    },
    {
        date: new Date("2021-02-01").getTime(),
        value: 198.54,
        color: "yellow",
        id: 245674,
    },
]
const TransactionHistory = ({ navigation }: HomeNavigationProps<"TransactionHistory">) => {
    const styles = useStyles();
    return (
        <Box flex={1} backgroundColor="background">
            <Header 
                title="Transaction History"
                left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
                right={{ icon: "share", onPress: () => true }}
            />
            <Box 
                padding="m" 
                flex={1}
            >
                <Box 
                    flexDirection="row" 
                    justifyContent="space-between" 
                    alignItems="flex-end"
                >
                    <Box>
                        <Text 
                            variant="header" 
                            color="secondary" 
                            opacity={0.3}
                        >
                            TOTAL SPEND
                        </Text>
                        <Text 
                            variant="title1" 
                        >
                            $69,69
                        </Text>
                    </Box>
                    <Box 
                        backgroundColor="primaryLight" 
                        borderRadius="m" 
                        padding="s"
                    >
                        <Text 
                            color="primary"
                        >
                            All Time
                        </Text>
                    </Box>
                </Box>
                <Graph 
                    data={data} 
                    startDate={startDate} 
                    numberOfMonths={numberOfMonths}
                />
                <ScrollView 
                    contentContainerStyle={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                >
                    {data.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))}
                </ScrollView>
            </Box>
            <TopCurve {...{footerHeight}}/>
            <Box 
                position="absolute" 
                right={0} 
                left={0} 
                bottom={0}
                height={footerHeight} 
            >
            <Image style={styles.footer} source={require('../../components/assets/patterns/3.png')}/>
            </Box>
        </Box>
    );
}
export default TransactionHistory;