import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ProductType } from '@/type';

type Props = {
  product: ProductType;
  index: number;
};

const ProductCard = ({ index, product }: Props) => {
  return (
    <View style={styles.card}>
      <Text>ProductCard</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    flex: 1,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
    height: 200,
  },
});
