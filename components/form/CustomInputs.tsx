import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { colors } from '@/constants';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

type Props = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  label: string;
  secureTextEntery?: boolean;
  error: string;
  password?: boolean;
  toggleSecure?: () => void;
};

const CustomInputs = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  label,
  secureTextEntery,
  error,
  password,
  toggleSecure,
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
        {password && (
          <TouchableOpacity onPress={toggleSecure}>
            {secureTextEntery ? (
              <AntDesign name="eye" size={20} />
            ) : (
              <FontAwesome name="eye-slash" size={20} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
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
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    fontSize: 20,
    flex: 1,
  },
  label: {
    color: colors.dark,
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'bold',
  },
});
