import React, { useState } from 'react'
import {StyleSheet} from 'react-native'
import { HomeNavigationProps } from '../../components/Navigation'
import{ Header, Box, Text } from '../../components'
import CartContainer from './CartContainer'
import { ScrollView } from 'react-native-gesture-handler'
import Item from './Item'
import Svg, { Path } from 'react-native-svg'
import { aspectRatio, useTheme } from '../../components/Theme'

const height = aspectRatio * 100
const d ="M 0 0 A 50 50 0 0 0 50 50 H 325 A 50 50 0 0 1 375 100 V 0 Z"
const defaultItems = [{id : 1}, {id : 2}, {id : 3}, {id : 4}]

const Cart = ({ navigation}:HomeNavigationProps<"Cart">) => {
    const [items, setItems] = useState(defaultItems)
    const theme = useTheme();
    return(
        <CartContainer>
            <Box >
                <Box backgroundColor="primary">

                <Header
                    dark
                    title="Shopping Cart"
                    left={{ icon: "arrow-left", onPress: () => navigation.goBack() }}
                    />
                    </Box>
                
            
            </Box>
            <Box flex={1}>
            <ScrollView
                style={{
                    
                    borderBottomRightRadius: theme.borderRadii.xl,
                    borderBottomLeftRadius: theme.borderRadii.xl,
                }}
                contentContainerStyle={{paddingVertical: 50 * aspectRatio}}
                showsVerticalScrollIndicator={false}
            >
                {items.map((item,index)=>(<Item key={item.id} onDelete={()=>{
                    items.splice(index,1)
                    setItems(items.concat())
                }}/>))}
            </ScrollView>
            <Box style={{position: "absolute", top:0,left:0,right: 0, height }}>

            <Svg style={StyleSheet.absoluteFill} viewBox="0 0 375 100">
                    <Path d={d} fill={theme.colors.primary} />
                </Svg> 
                <Text variant="title2" textAlign="center" color="background">
                    3 Items added
                </Text>
            </Box>
            </Box>
        </CartContainer>
    )
}

export default Cart