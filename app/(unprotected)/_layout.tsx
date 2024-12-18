import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';

const _layout = () => {
  const onPress = () => {
    router.back();
  };
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        title: 'Amazon.sg',
        headerTitleAlign: 'center',
        headerLeft: () => (
          <Pressable
            onPress={onPress}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <Text>Cancel</Text>
          </Pressable>
        ),
      }}
    />
  );
};

export default _layout;
