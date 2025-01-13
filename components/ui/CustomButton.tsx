import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { colors } from '@/constants';

type Props = {
  buttonTitle: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  color?: string;
  isLoading?: boolean;
};

const CustomButton = ({
  buttonTitle,
  onPress,
  disabled,
  style,
  color,
  isLoading,
}: Props) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.pressable,
        { opacity: pressed || disabled ? 0.5 : 1 },
      ]}
    >
      {isLoading ? (
        <ActivityIndicator size={20} color={colors.yellow} />
      ) : (
        <Text style={[styles.title, { color }]}>{buttonTitle}</Text>
      )}
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  pressable: {
    height: 55,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.yellow,
  },
  title: {
    color: colors.dark,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
