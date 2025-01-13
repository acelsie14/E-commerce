import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Redirect, router, Stack, useLocalSearchParams } from 'expo-router';
import { useToken } from '@/lib/zustand/token';

const UnprotectedLayout = () => {
  const onPress = () => {
    router.back();
  };
  const token = useToken((state) => state.token);
  const { redirect } = useLocalSearchParams<{ redirect: string }>();
  console.log(redirect);
  if (token) return <Redirect href={redirect as any} />;
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

export default UnprotectedLayout;
