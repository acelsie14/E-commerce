import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Registerform from '@/components/form/Registerform';
import Wrapper from '@/components/ui/Wrapper';
import { Title } from '@/components/ui/Title';
import { Loginform } from '@/components/form/Loginform';

export default function register() {
  return (
    <Wrapper>
      <Title title="Welcome" />
      <Loginform register />
    </Wrapper>
  );
}
