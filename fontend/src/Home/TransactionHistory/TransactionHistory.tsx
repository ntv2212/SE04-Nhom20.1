import React from 'react'
import { HomeNavigationProps } from 'src/components/Navigation';
import Graph, { DataPoint } from "./Graph";
import { Box, Header, Text } from '../../components';
import { ScrollView } from 'react-native';
import Transaction from './Transaction';
const startDate = new Date("2020-09-01").getTime();
const numberOfMonths = 6;

const data: DataPoint[] = [
    {
        date: new Date("2020-10-01").getTime(),
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
    return (
        <Box flex={1} backgroundColor="white">
            <Header title="Transaction History"
                left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
                right={{ icon: "share", onPress: () => true }}
            />
            <Box padding="m" flex={1}>
                <Box flexDirection="row" justifyContent="space-between" alignItems="flex-end">
                    <Box>
                        <Text variant="header" color="secondary" opacity={0.3}>TOTAL SPEND</Text>
                        <Text variant="title1" >$69,69</Text>
                    </Box>
                    <Box backgroundColor="primaryLight" borderRadius="m" padding="s">
                        <Text color="primary">All Time</Text>
                    </Box>
                </Box>
                <Graph data={data} startDate={startDate} numberOfMonths={numberOfMonths}/>
                <ScrollView>
                    {data.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))}
                </ScrollView>
            </Box>
        </Box>
    );
}
export default TransactionHistory;