import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createJSONStorage, persist } from 'zustand/middleware';

type store = {
  token: string;
  user: any;
  remove: () => void;
  setToken: (token: string) => void;
  setUser: (user: any) => void;
};

export const useToken = create<store>()(
  persist(
    (set) => ({
      token: '',
      user: '',
      remove: () => {
        set({ token: '' });
      },
      setToken: (token: string) => {
        set({ token });
      },
      setUser: (user: any) => {
        set({ user });
      },
    }),
    {
      name: 'token',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
