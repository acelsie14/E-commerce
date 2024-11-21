import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useFavStore } from '@/lib/zustand/favorite';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '@/constants';

type favProductProps = {
  favProducts: {
    images: string[];
    id: number;
    title: string;
    price: number;
  };
};
const Favorite = ({ favProducts }: favProductProps) => {
  const { addFavorite, removeFavorite, favorite } = useFavStore();
  const isFavorite = favorite.find((item) => item.id === favProducts.id);
  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(favProducts.id);
    } else {
      addFavorite(favProducts);
    }
  };
  return (
    <Pressable onPress={toggleFavorite} style={{ paddingRight: 10 }}>
      <AntDesign
        name={isFavorite ? 'heart' : 'hearto'}
        color={colors.yellow}
        size={30}
      />
    </Pressable>
  );
};

export default Favorite;
