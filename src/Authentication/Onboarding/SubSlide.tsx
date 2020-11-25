
import React from 'react';
import {  StyleSheet, View } from 'react-native';
import {Button, Text}from "../../components"

interface SubSlidePops {
    subtitle: string;
    description: string;
    last?: boolean;
    onPress:()=>void;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 44,

    },
    subtitle: {
        // fontSize: 24,
        // lineHeight: 30,
        marginBottom: 12,
        // color: '#0C0D34',

    },
    description: {
        // fontSize: 16,
        // lineHeight: 24,
        // textAlign: 'center',
        marginBottom: 40,
        // color:'#0C0D34',
    },
});
const SubSlide = ({ subtitle, description, last, onPress }: SubSlidePops) => {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.description}>{description}</Text> */}
            <Text variant="title2"  style={styles.subtitle}>{subtitle}</Text>
            <Text variant= "body" style={styles.description}>{description}</Text>
            <Button 
                label={last ? "Let's get started" : "Next"} 
                variant={last ?"primary":"default"}   
                {...{onPress}}
            />
        </View>
    );

}


export default SubSlide;