import React from 'react'
import { Dimensions, View } from 'react-native'
import Animated, { divide, multiply, sub } from 'react-native-reanimated';
import moment from 'moment'

import { Theme } from '../../../components/Theme';
import { Box, useTheme } from '../../../components';
import Underlay, { MARGIN } from "./Underlay"
import { lerp } from './Scale';
import { useIsFocused } from '@react-navigation/native';
import { useTiming } from 'react-native-redash';

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;
const AnimatedBox = Animated.createAnimatedComponent(Box)


export interface DataPoint {
    date: number;
    value: number;
    color: keyof Theme["colors"];
    id: number;
}

interface GraphProps {
    data: DataPoint[];
    startDate: number;
    numberOfMonths: number;

}

const Graph = ({ data, startDate, numberOfMonths }: GraphProps) => {
    const isFocused = useIsFocused();
    const transition = useTiming(isFocused, {duration: 1000});
    const theme = useTheme();
    const canvasWidth = wWidth - theme.spacing.m * 2;
    const canvasHeight = canvasWidth * aspectRatio;
    const width = canvasWidth - theme.spacing[MARGIN];
    const height = canvasHeight - theme.spacing[MARGIN];
    const step = width / numberOfMonths;
    const values = data.map((p) => p.value);
    const minY = Math.min(...values);
    const maxY = Math.max(...values);
    
    return (
        <Box
            marginTop="xl"
            paddingBottom={MARGIN}
            paddingLeft={MARGIN}
        >
            <Underlay 
                minY={minY} 
                maxY={maxY} 
                step={step} 
                startDate={startDate} 
                numberOfMonths={numberOfMonths} 
            />
            <View
                style={{ width, height, overflow: "hidden"}}
            >
                {
                    data.map(point => {
                        const i = Math.round(moment.duration(moment(point.date).diff(startDate)).asMonths())
                        const totalHeight = lerp(0, height, point.value / maxY)
                        const currentHeight = multiply(totalHeight,transition)
                        const translateY = divide(sub(totalHeight,currentHeight),2)
                        return (
                            <AnimatedBox
                                key={point.id}
                                position="absolute"
                                left={i * step}
                                bottom={0}
                                width={step}
                                height={totalHeight}
                                style={{transform:[{translateY},{scaleY:transition}]}}
                            >
                                <Box
                                    position="absolute"
                                    top={0}
                                    bottom={0}
                                    left={theme.spacing.m}
                                    right={theme.spacing.m}
                                    opacity={0.1}
                                    backgroundColor={point.color}
                                    borderTopLeftRadius="m"
                                    borderTopRightRadius="m"
                                />
                                <Box
                                    position="absolute"
                                    top={0}
                                    height={32}
                                    left={theme.spacing.m}
                                    right={theme.spacing.m}
                                    backgroundColor={point.color}
                                    borderRadius="m"
                                />
                            </AnimatedBox>
                        );
                    })
                }
            </View>
        </Box>

    );
}
export default Graph;