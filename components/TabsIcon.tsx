import { View, Text } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '@/constants';

type Props = {
  focused: boolean;
  name: React.ComponentProps<typeof AntDesign>['name'];
  size: number;
};

const TabsIcon = ({ focused, name, size }: Props) => {
  return (
    <AntDesign
      name={name}
      size={size}
      color={focused ? colors.yellow : colors.dark}
    />
  );
};

export default TabsIcon;
