import SearchInput from '@/components/SearchInput';
import Wrapper from '@/components/ui/Wrapper';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function Home() {
  const [value, setvalue] = useState('');
  const onClear = () => setvalue('');
  const onChange = (value: string) => setvalue(value);
  return (
    <Wrapper>
      <SearchInput onChange={onChange} value={value} onClear={onClear} />
    </Wrapper>
  );
}
