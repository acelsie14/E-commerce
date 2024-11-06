import { Text } from 'react-native';
import React from 'react';
import Wrapper from '@/components/ui/Wrapper';
import { Title } from '@/components/ui/Title';
import { Loginform } from '@/components/form/Loginform';

export default function login() {
  return (
    <Wrapper>
      <Title title="Welcome" />
      <Loginform />
    </Wrapper>
  );
}
