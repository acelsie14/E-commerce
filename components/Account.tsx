import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useToken } from '@/lib/zustand/token';
import { router, useRouter } from 'expo-router';
import CustomButton from './ui/CustomButton';
import { useUserStore } from '@/lib/zustand/userStore';
import { User } from '@/type';
import Loading from './ui/Loading';
import { Image } from 'expo-image';
import AccountDetailsCard from './AccountDetailsCard';

const Account = () => {
  const token = useToken((state) => state.token);
  const user = useUserStore((state) => state.user);
  const isLoading = useUserStore((state) => state.isLoading);
  if (isLoading) return <Loading />;

  console.log(user);

  return (
    <View style={{ marginTop: 20, flex: 1 }}>
      {token ? <LoginUI user={user} /> : <NotLoggedInUI />}
    </View>
  );
};

export default Account;

const LoginUI = ({ user }: { user: User | null }) => {
  const router = useRouter();
  return (
    <View style={{ gap: 20 }}>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={{ uri: user?.image }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
          }}
          placeholder={require('@/assets/images/Iphone-spinner-2.gif')}
          contentFit="cover"
          placeholderContentFit="contain"
        />
      </View>
      <AccountDetailsCard
        title="Your Profile"
        nameOfIcon="user"
        onPress={() => router.push(`/profile`)}
      />
      <AccountDetailsCard
        title="Favorites"
        nameOfIcon="hearto"
        onPress={() => router.push('/favorite')}
      />
      <AccountDetailsCard title="Payment method" nameOfIcon="creditcard" />
      <AccountDetailsCard title="Reset Password" nameOfIcon="key" />
      <AccountDetailsCard title="Help" nameOfIcon="questioncircleo" />
      <AccountDetailsCard title="Privacy policy" nameOfIcon="lock" />
      <AccountDetailsCard title="Logout" nameOfIcon="back" />
    </View>
  );
};
const NotLoggedInUI = () => {
  const router = useRouter();
  const onPress = () => {
    router.push('/login?redirect=/account');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You are not Logged in</Text>
      <Text style={styles.title}>Login to your Profile</Text>
      <CustomButton
        buttonTitle="Login"
        color="white"
        onPress={onPress}
        style={{ width: 500 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
