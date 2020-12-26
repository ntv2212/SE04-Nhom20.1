import React, { ReactNode, useCallback, useRef } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { aspectRatio } from '../../components/Theme';
import { useTheme, Box, RoundedIconButton, Text } from '../../components';
import { snapPoint } from 'react-native-redash';
import LinearGradient from 'react-native-linear-gradient';

interface SwipeableRowProps {
    children: ReactNode,
    onDelete: () => void;
    height: number;
}
const { width } = Dimensions.get("window")
const editWidth = 85 * aspectRatio
const finalDestination = width
const snapPoints = [-editWidth, 0, finalDestination]

const SwipeableRow = ({ children, onDelete, height: defaultHeight }: SwipeableRowProps) => {
    const height = useSharedValue(defaultHeight);
    const deleteItem = useCallback(() => {
        onDelete();
    }, [onDelete])
    const theme = useTheme();
    const translateX = useSharedValue(0)
    const onGestureEvent = useAnimatedGestureHandler<{ x: number }>({
        onStart: (_, ctx) => {
            ctx.x = translateX.value;
        },
        onActive: ({ translationX }, ctx) => {
            translateX.value = ctx.x + translationX
        },
        onEnd: ({ velocityX }) => {
            const dest = snapPoint(translateX.value, velocityX, snapPoints)
            translateX.value = withSpring(
                dest, { overshootClamping: true },
                () => {
                    if (dest === finalDestination) {
                        height.value = withTiming(0, { duration: 250 }, () => deleteItem())

                    }
                }
            )
        }
    })
    const style = useAnimatedStyle(() => ({
        height: height.value,
        transform: [{ translateX: translateX.value }],
        backgroundColor: theme.colors.background
    }))
    const deleteStyle = useAnimatedStyle(() => ({
        opacity: translateX.value > 0 ? 1 : 0,
    }))
    const editStyle = useAnimatedStyle(() => ({
        opacity: translateX.value < 0 ? 1 : 0,
    }))
    return (
        <View>
            <Animated.View style={[StyleSheet.absoluteFill, deleteStyle]}>
                <LinearGradient
                    style={StyleSheet.absoluteFill}
                    colors={[theme.colors.danger, theme.colors.background]}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                />
                <Box justifyContent="space-evenly" width={editWidth} flex={1} alignItems="center">
                    <Text color="background" variant="header">Delete</Text>
                </Box>
            </Animated.View>
            <Animated.View style={[StyleSheet.absoluteFill, editStyle]}>
                <LinearGradient
                    style={StyleSheet.absoluteFill}
                    colors={[theme.colors.edit, theme.colors.background]}
                    start={{ x: 1, y: 0.5 }}
                    end={{ x: 0.7, y: 0.5 }}
                />
                <Box justifyContent="space-evenly" width={editWidth} alignSelf="flex-end" flex={1} alignItems="center">
                    <RoundedIconButton onPress={() => alert("Hello")} name="plus" size={24} color="background" backgroundColor="primary" />
                    <RoundedIconButton onPress={() => alert("Hello")} name="minus" size={24} color="background" backgroundColor="danger" />
                </Box>
            </Animated.View>


            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View style={style}>
                    {children}
                </Animated.View>
            </PanGestureHandler>
        </View>
    )
}

export default SwipeableRow
