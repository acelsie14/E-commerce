import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { Toaster } from 'sonner-native';

export default function RootLayout() {
  const [loaded] = useFonts({
    inter: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  if (!loaded) return null;
  return (
    //@ts-ignore
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <Toaster />
    </>
  );
}
