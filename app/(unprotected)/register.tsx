import React from 'react';

import { Title } from '@/components/ui/Title';
import { Loginform } from '@/components/form/Loginform';
import { Wrapper } from '@/components/ui/Wrapper';

export default function register() {
  return (
    <Wrapper>
      <Title title="Welcome" />
      <Loginform register />
    </Wrapper>
  );
}
