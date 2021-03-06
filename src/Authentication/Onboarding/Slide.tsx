
import React from 'react'
import {View,StyleSheet ,Dimensions} from 'react-native'
import {Text} from "../../components"
const {width, height} = Dimensions.get("window")
export const SLIDE_HEIGHT = 0.61 * height;
export const BORDER_RADIUS =75;
const styles = StyleSheet.create({
    container: {
        width,
        overflow: "hidden",
    },
  
    // picture:{
    //     ...StyleSheet.absoluteFillObject,
    //     width:undefined,
    //     height:undefined,
    //     borderBottomRightRadius: BORDER_RADIUS,
    //     borderBottomLeftRadius: BORDER_RADIUS,
    // },
    titleContainer:{
        height: 100,
        justifyContent:"center",
    },
    // tittle:{
    //     fontSize : 70,
    //     color: "white",
    //     textAlign: "center",
    //     lineHeight: 70,
    // },
})
interface SlideProps{
    title: string;
    right?: boolean;
    // picture: {
    //     src:ImageRequireSource;
    //     width:number;
    //     height:number;
    // };
}
const Slide = ({title, right } : SlideProps) => {
    const transform= [
        {translateY: (SLIDE_HEIGHT - 100)/2}, 
        {translateX: right ? (width / 2 -50): (-width / 2 + 50)},
        {rotate: right ? "-90deg" : "90deg"},
    ];
    return (
        <View style={styles.container}>
           
            <View style={[styles.titleContainer,{transform}]}>
                {/* <Text style={styles.tittle}>{title}</Text> */}
                <Text variant="hero">{title}</Text>
            </View>
        </View>
    )
}


export default Slide;