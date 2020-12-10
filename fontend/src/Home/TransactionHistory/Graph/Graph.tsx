import React, { useLayoutEffect, useRef } from 'react'
import moment from 'moment'
import { Dimensions } from 'react-native'
import { Theme } from '../../../components/Theme';
import { Box, useTheme } from '../../../components';

import Underlay, { MARGIN } from "./Underlay"
import { lerp } from './Scale';
import { Transition, Transitioning, TransitioningView } from 'react-native-reanimated';
const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;

const transition = (
    <Transition.Together>
        <Transition.In type="slide-bottom" durationMs={650} interpolation="easeInOut" />
    </Transition.Together>
)


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
    const ref = useRef<TransitioningView>(null);
    const theme = useTheme();
    const canvasWidth = wWidth - theme.spacing.m * 2;
    const canvasHeight = canvasWidth * aspectRatio;
    const width = canvasWidth - theme.spacing[MARGIN];
    const height = canvasHeight - theme.spacing[MARGIN];
    const step = width / numberOfMonths;
    const values = data.map((p) => p.value);
    const minY = Math.min(...values);
    const maxY = Math.max(...values);
    useLayoutEffect(() => {
        ref.current?.animateNextTransition();

    }, []);
    return (
        <Box
            marginTop="xl"
            paddingBottom={MARGIN}
            paddingLeft={MARGIN}
        >
            <Underlay minY={minY} maxY={maxY} step={step} startDate={startDate} numberOfMonths={numberOfMonths} />
            <Transitioning.View
                style={{ width, height, overflow: "hidden"}}
                ref={ref}
                transition={transition}
            >
                {
                    data.map(point => {
                        const i = Math.round(moment.duration(moment(point.date).diff(startDate)).asMonths())
                        return (
                            <Box
                                key={point.id}
                                position="absolute"
                                left={i * step}
                                bottom={0}
                                width={step}
                                height={lerp(0, height, point.value / maxY)}
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
                            </Box>
                        );
                    })
                }
            </Transitioning.View>
        </Box>

    );
}
export default Graph;