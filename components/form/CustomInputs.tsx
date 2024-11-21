import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { colors } from '@/constants';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

type Props = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  label?: string;
  secureTextEntry?: boolean;
  error?: string;
  password?: boolean;
  toggleSecure?: () => void;
  style?: StyleProp<ViewStyle>;
};

const CustomInputs = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  label,
  secureTextEntry,
  error,
  password,
  toggleSecure,
  style,
}: Props) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.container, style]}>
        <TextInput
          style={styles.inputStyle}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
        />
        {password && (
          <TouchableOpacity onPress={toggleSecure}>
            {secureTextEntry ? (
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
