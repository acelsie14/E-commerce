import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useToken } from '@/lib/zustand/token';
import { useUserStore } from '@/lib/zustand/userStore';

const PotectedScreenLayou = () => {
  const token = useToken((state) => state.token);
  const setUser = useUserStore((state) => state.getUser);
  const setIsLoading = useUserStore((state) => state.setLoading);
  useEffect(() => {
    if (!token) return;
    const fetchUser = async () => {
      try {
        /* providing accessToken in bearer */
        const res = await fetch('https://dummyjson.com/auth/me', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
          },
          credentials: 'include', // Include cookies (e.g., accessToken) in the request
        });
        const response = await res.json();

        setUser(response);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, [token]);
  return <Stack screenOptions={{ headerShown: false }} />;
};

export default PotectedScreenLayou;
