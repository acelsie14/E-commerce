import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { User } from '@/type';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '@/constants';

type Props = {
  user?: User;
  title: string;
  nameOfIcon: keyof typeof AntDesign.glyphMap;
  onPress?: () => void;
};

const AccountDetailsCard = ({ user, title, nameOfIcon, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardcontainer}>
        <AntDesign name={nameOfIcon as any} size={30} color={colors.yellow} />
        <Text style={{ paddingTop: 2, fontSize: 20 }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AccountDetailsCard;

const styles = StyleSheet.create({
  cardcontainer: {
    flexDirection: 'row',
    gap: 30,
    backgroundColor: '#edeef0',
    height: 60,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
});
