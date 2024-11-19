import { View, Text } from 'react-native';
import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { ProductResponse } from '@/type';
import { ProductCard } from './ui/ProductCard';

type Props = {
  data: ProductResponse[];
};
const Products = ({ data }: Props) => {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <FlashList
        data={data}
        estimatedItemSize={200}
        renderItem={({ item, index }) => (
          <ProductCard product={item} index={index} />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 5 }}
      />
    </View>
  );
};

export default Products;
