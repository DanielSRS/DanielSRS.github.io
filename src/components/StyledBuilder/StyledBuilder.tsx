import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import type {
  StyleProp,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewProps,
  ViewStyle,
} from 'react-native';

export const createStyledView =
  (defaultStyles: StyleProp<ViewStyle>) => (props: ViewProps) =>
    <View {...props} style={[defaultStyles, props.style]} />;

export const createStyledText =
  (defaultStyles: StyleProp<TextStyle>) => (props: TextProps) =>
    <Text {...props} style={[defaultStyles, props.style]} />;

export const createStyledTouchableOpacity =
  (defaultStyles: StyleProp<ViewStyle>) => (props: TouchableOpacityProps) =>
    <TouchableOpacity {...props} style={[defaultStyles, props.style]} />;
