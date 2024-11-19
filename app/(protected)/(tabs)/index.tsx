import Products from '@/components/Products';
import SearchInput from '@/components/SearchInput';
import ErrorComponent from '@/components/ui/ErrorComponent';
import Loading from '@/components/ui/Loading';
import { Wrapper } from '@/components/ui/Wrapper';

import { useGetAllProducts } from '@/lib/tanstack/queries';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function Home() {
  const [value, setvalue] = useState('');
  const { data, isPending, isError, refetch, error } = useGetAllProducts();
  console.log(error);

  const onClear = () => setvalue('');
  const onChange = (value: string) => setvalue(value);
  if (isError) {
    return <ErrorComponent onRefetch={refetch} />;
  }
  if (isPending) return <Loading />;

  return (
    <Wrapper>
      <SearchInput onChange={onChange} value={value} onClear={onClear} />
      <Products data={data.products} />
    </Wrapper>
  );
}
