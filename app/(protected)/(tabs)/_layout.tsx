import CartIcon from '@/components/CartIcons';
import TabsIcon from '@/components/TabsIcon';
import { colors } from '@/constants';
import { AntDesign } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import { Pressable, StatusBar, Text } from 'react-native';

export default function TabsLayout() {
  const router = useRouter();
  const onPress = () => {
    router.navigate('/account');
  };
  return (
    //@ts-ignore
    <>
      <StatusBar barStyle="light-content" />
      <Tabs
        screenOptions={{
          tabBarInactiveTintColor: colors.dark,
          tabBarActiveTintColor: colors.yellow,
          headerTintColor: colors.yellow,
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerRight: () => <CartIcon />,
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: '',
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused, size }) => (
              <TabsIcon name="home" size={size} focused={focused} />
            ),
          }}
        />

        <Tabs.Screen
          name="account"
          options={{
            title: '',
            tabBarLabel: 'Account',
            tabBarIcon: ({ focused, size }) => (
              <TabsIcon name="user" size={size} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="favorite"
          options={{
            title: '',
            tabBarLabel: 'Favorite',
            tabBarIcon: ({ focused, size }) => (
              <TabsIcon name="hearto" size={size} focused={focused} />
            ),
            headerLeft: () => (
              <Pressable
                onPress={onPress}
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.5 : 1,
                  },
                  { paddingLeft: 10 },
                ]}
              >
                <AntDesign name="arrowleft" size={30} color={'white'} />
              </Pressable>
            ),
          }}
        />
      </Tabs>
    </>
  );
}
