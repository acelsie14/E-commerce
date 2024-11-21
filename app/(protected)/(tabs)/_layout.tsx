import CartIcon from '@/components/CartIcons';
import TabsIcon from '@/components/TabsIcon';
import { colors } from '@/constants';
import { Tabs } from 'expo-router';
import { StatusBar } from 'react-native';

export default function TabsLayout() {
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
          name="menu"
          options={{
            title: '',
            tabBarLabel: 'Menu',
            tabBarIcon: ({ focused, size }) => (
              <TabsIcon name="bars" size={size} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            title: '',
            tabBarLabel: 'More',
            tabBarIcon: ({ focused, size }) => (
              <TabsIcon name="amazon" size={size} focused={focused} />
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
          }}
        />
      </Tabs>
    </>
  );
}
