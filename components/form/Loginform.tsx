import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import CustomInputs from './CustomInputs';
import CustomButton from '../ui/CustomButton';
import { validateEmail, validatePassword } from '@/utils';
import { Href, Link, useRouter } from 'expo-router';
type Props = {
  register?: boolean;
};
export const Loginform = ({ register }: Props) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    name: '',
  });

  const [errorEmail, setErrorEmail] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const router = useRouter();

  const toggleSecure = () => setSecure((prev) => !prev);

  const handleChange = (inputName: string, text: string) => {
    setValues((prev) => ({ ...prev, [inputName]: text }));
  };
  const { email, password, name } = values;
  const handleSubmit = () => {
    if (register && name.trim() === '') {
      setErrorName('Please enter your name');
      return;
    }

    if (!validateEmail(email)) {
      setErrorEmail('Enter a valid Email Address');
      return;
    }

    if (!validatePassword(password)) {
      setErrorPassword(
        'Password must include at least one Uppercase letter, one lowercase letter,one number, and one special character.'
      );
      return;
    }
    router.replace('/');
    console.log({
      email,
      password,
      name,
    });

    setValues({
      email: '',
      password: '',
      name: '',
    });
    setErrorEmail('');
    setErrorPassword('');
  };
  const disabled = email.trim() === '' || password.trim() === '';
  const buttonTitle = register ? 'sign up' : 'sign in';
  const dontAlready = register ? 'Already' : "Don't";
  const registerLogin = register ? 'Login' : 'Register';
  const href: Href = register ? '/login' : '/register';

  return (
    <View style={styles.container}>
      {register && (
        <CustomInputs
          label="Name"
          placeholder="Enter your name"
          keyboardType="default"
          value={name}
          onChangeText={(text) => handleChange('name', text)}
          error={errorName}
        />
      )}
      <CustomInputs
        label="Email"
        placeholder="Enter your Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => handleChange('email', text)}
        error={errorEmail}
      />
      <CustomInputs
        label="Password"
        placeholder="Enter your password"
        keyboardType="default"
        value={password}
        onChangeText={(text) => handleChange('password', text)}
        error={errorPassword}
        secureTextEntry={secure}
        toggleSecure={toggleSecure}
        password
      />
      <CustomButton
        buttonTitle={buttonTitle}
        onPress={handleSubmit}
        disabled={disabled}
      />
      <Link href={href} asChild>
        <Text style={styles.account}>
          {dontAlready} have an account?
          <Text style={styles.RegisterText}>{registerLogin}</Text>
        </Text>
      </Link>
    </View>
  );
};

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
