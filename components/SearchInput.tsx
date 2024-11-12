import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomInputs from './form/CustomInputs';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '@/constants';

type Props = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
};

const SearchInput = ({ value, onChange, onClear }: Props) => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" color={colors.dark} size={25} />
      <CustomInputs
        value={value}
        onChangeText={onChange}
        placeholder="search by Name"
        style={{ borderWidth: 0, flex: 1 }}
      />
      {value && (
        <Pressable onPress={onClear}>
          <AntDesign name="close" color={colors.dark} size={25} />
        </Pressable>
      )}
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: colors.gray,
    borderWidth: 1,
    height: 60,
    marginTop: 20,
    paddingHorizontal: 10,
  },
});
