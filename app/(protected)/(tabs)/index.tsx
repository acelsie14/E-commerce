import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Home() {
  const router = useRouter();
  const onPress = () => {
    router.push('/login');
  };
  return (
    <View>
      <Button title="Navigate" onPress={onPress} />
      <Text>Home</Text>
    </View>
  );
}
