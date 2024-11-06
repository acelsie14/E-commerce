import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import CustomInputs from './CustomInputs';
import CustomButton from '../ui/CustomButton';

export const Loginform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (text: string) => {
    setEmail(text);
  };
  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };
  const handleSubmit = () => {
    console.log(email, password);
  };

  return (
    <View style={styles.container}>
      <CustomInputs
        label="Email"
        placeholder="Enter your Email"
        keyboardType="email-address"
        value={email}
        onChangeText={handleEmailChange}
      />
      <CustomInputs
        label="Password"
        placeholder="Enter your password"
        keyboardType="default"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntery
      />
      <CustomButton buttonTitle="Sign in" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
    marginTop: 20,
  },
});
