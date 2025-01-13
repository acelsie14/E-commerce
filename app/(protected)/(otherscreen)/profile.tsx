import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { User } from '@/type';
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import { useUserInfo } from '@/lib/tanstack/queries';
import ErrorComponent from '@/components/ui/ErrorComponent';
import Loading from '@/components/ui/Loading';
import { useToken } from '@/lib/zustand/token';
import { Divider } from '@/components/Divider';

type Props = {
  user: User;
};

const ProfileDetailsScreen = () => {
  const user = useToken((state) => state.user);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{ uri: user?.image }}
          placeholder={require('@/assets/images/Iphone-spinner-2.gif')}
          contentFit="cover"
          placeholderContentFit="contain"
        />
        <Text style={{ fontSize: 20 }}>{user.username}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'lightgreen',
            height: 40,
            width: 80,
          }}
        >
          <Text style={{ justifyContent: 'center' }}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Username:</Text>
        <Text>{user.username}</Text>
        <Divider />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,

    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default ProfileDetailsScreen;
