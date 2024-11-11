import TabsIcon from '@/components/TabsIcon';
import { colors } from '@/constants';
import { AntDesign } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: colors.dark,
        tabBarActiveTintColor: colors.yellow,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, size }) => (
            <TabsIcon name="home" size={size} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ focused, size }) => (
            <TabsIcon name="bars" size={size} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ focused, size }) => (
            <TabsIcon name="amazon" size={size} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ focused, size }) => (
            <TabsIcon name="user" size={size} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
