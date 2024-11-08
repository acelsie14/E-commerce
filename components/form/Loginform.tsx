import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import CustomInputs from './CustomInputs';
import CustomButton from '../ui/CustomButton';
import { validateEmail, validatePassword } from '@/utils';

export const Loginform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [secure, setSecure] = useState(true);

  const toggleSecure = () => setSecure((prev) => !prev);
  const handleEmailChange = (text: string) => {
    setEmail(text);
  };
  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };
  const handleSubmit = () => {
    console.log(password);

    if (!validateEmail(email)) {
      setErrorEmail('Enter a valid Email Address');
      return;
    }
    console.log(validatePassword(password));
    if (!validatePassword(password)) {
      setErrorPassword(
        'Password must include at least one Uppercase letter, one lowercase letter,one number, and one special character.'
      );
      return;
    }
    console.log(email, password);
    setEmail('');
    setPassword('');
    setErrorEmail('');
    setErrorPassword('');
  };
  const disabled = email.trim() === '' || password.trim() === '';

  return (
    <View style={styles.container}>
      <CustomInputs
        label="Email"
        placeholder="Enter your Email"
        keyboardType="email-address"
        value={email}
        onChangeText={handleEmailChange}
        error={errorEmail}
      />
      <CustomInputs
        label="Password"
        placeholder="Enter your password"
        keyboardType="default"
        value={password}
        onChangeText={handlePasswordChange}
        error={errorPassword}
        secureTextEntery={secure}
        toggleSecure={toggleSecure}
        password
      />
      <CustomButton
        buttonTitle="Sign in"
        onPress={handleSubmit}
        disabled={disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
    marginTop: 20,
  },
});
