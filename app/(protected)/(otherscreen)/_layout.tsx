import CartIcon from '@/components/CartIcons';
import { AntDesign } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StatusBar } from 'react-native';

const OtherScreenLayout = () => {
  const router = useRouter();
  const onPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack
        screenOptions={{
          headerLeft: () => (
            <Pressable
              onPress={onPress}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                padding: 5,
              })}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
          ),
          headerRight: () => <CartIcon />,
        }}
      >
        <Stack.Screen
          name="product/[id]"
          options={{ title: 'Product Detail' }}
        />
      </Stack>
    </>
  );
};

export default OtherScreenLayout;
