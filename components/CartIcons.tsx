import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '@/constants';

const CartIcon = () => {
  const onPress = () => {
    // Navigate to the cart screen or perform any action when the cart icon is pressed
  };
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.press, { opacity: pressed ? 0.5 : 1 }]}
    >
      <AntDesign name="shoppingcart" color="white" size={23} />
      <View style={styles.abs}>
        <Text style={{ fontSize: 10, color: 'white' }}>0</Text>
      </View>
    </Pressable>
  );
};

export default CartIcon;
const styles = StyleSheet.create({
  press: {
    backgroundColor: colors.gray,
    height: 40,
    width: 40,
    padding: 5,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  abs: {
    position: 'absolute',
    top: -5,
    right: 0,
    backgroundColor: colors.yellow,
    height: 15,
    width: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
