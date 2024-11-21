import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Wrapper } from '@/components/ui/Wrapper';
import { useFavStore } from '@/lib/zustand/favorite';

import Favorite from '@/components/ui/Favorite';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { Divider } from '@/components/Divider';

type Props = {};

const favorite = ({}: Props) => {
  const favorite = useFavStore((state) => state.favorite);
  const router = useRouter();
  return (
    <Wrapper>
      <Text style={styles.header}>Favorites</Text>
      <Divider />

      {favorite.length === 0 ? (
        <View style={styles.noFavoriteConatiner}>
          <Text style={styles.noFavorite}> No favorites added</Text>
        </View>
      ) : (
        <FlatList
          data={favorite}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => router.push(`/product/${item.id}`)}
            >
              <View>
                <Image
                  source={{ uri: item.images }}
                  style={{ width: 100, height: 100 }}
                  placeholder={require('@/assets/images/Iphone-spinner-2.gif')}
                  contentFit="cover"
                  placeholderContentFit="contain"
                />
                <Text>{item.title}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text>{item.price}</Text>
                  <Favorite
                    favProducts={{
                      id: item.id,
                      images: item.images,
                      price: item.price,
                      title: item.title,
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </Wrapper>
  );
};

export default favorite;

const styles = StyleSheet.create({
  header: { fontSize: 30, fontWeight: 'bold' },
  noFavoriteConatiner: {
    flex: 1, // Takes up the full screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  noFavorite: {
    fontSize: 40,
    fontWeight: '400',
    paddingHorizontal: 10,
  },
});
