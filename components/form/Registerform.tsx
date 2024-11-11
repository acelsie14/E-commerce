import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CustomInputs from './CustomInputs';
import CustomButton from '../ui/CustomButton';
import { validateEmail, validatePassword } from '@/utils';
import { Link } from 'expo-router';

const Registerform = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [secure, setSecure] = useState(true);

  const toggleSecure = () => setSecure((prev) => !prev);
  const handleFirstNameChange = (text: string) => {
    setFirstName(text);
  };
  const handleLastNameChange = (text: string) => {
    setLastName(text);
  };
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
    setFirstName('');
    setLastName('');
  };
  const disabled =
    email.trim() === '' ||
    password.trim() === '' ||
    firstName.trim() === '' ||
    lastName.trim() === '';

  return (
    <View style={styles.container}>
      <CustomInputs
        label="First name"
        placeholder="Enter First Name"
        keyboardType="default"
        value={firstName}
        onChangeText={handleFirstNameChange}
      />
      <CustomInputs
        label="Last name"
        placeholder="Enter Last Name"
        keyboardType="default"
        value={lastName}
        onChangeText={handleLastNameChange}
      />
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
        secureTextEntry={secure}
        toggleSecure={toggleSecure}
        password
      />
      <CustomButton
        buttonTitle="Login"
        onPress={handleSubmit}
        disabled={disabled}
      />
      <Link href="/login" asChild>
        <Text style={styles.account}>
          Do you have an account?
          <Text style={styles.RegisterText}>Login</Text>
        </Text>
      </Link>
    </View>
  );
};

export default Registerform;

const styles = StyleSheet.create({
  container: {
    gap: 15,
    marginTop: 20,
  },
  RegisterText: {
    color: 'blue',
  },
  account: {
    marginTop: 20,
    textAlign: 'center',
  },
});
