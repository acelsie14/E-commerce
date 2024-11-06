import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import { colors } from '@/constants';

type Props = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  label: string;
  secureTextEntery?: boolean;
};

const CustomInputs = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  label,
  secureTextEntery,
}: Props) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntery}
        />
      </View>
    </View>
  );
};

export default CustomInputs;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 10,
    padding: 10,
    height: 55,
    justifyContent: 'center',
  },
  inputStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    // fontSize: 10,
  },
  label: {
    color: colors.dark,
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
});
