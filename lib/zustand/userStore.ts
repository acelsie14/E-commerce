import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createJSONStorage, persist } from 'zustand/middleware';
import { User } from '@/type';

type store = {
  user: User | null;
  getUser: (user: User) => void;
  clearUser: () => void;
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
};

export const useUserStore = create<store>()(
  persist(
    (set) => ({
      user: null,
      clearUser: () => {
        set({ user: null, isLoading: false });
      },

      getUser: (user: User) => {
        set((state) => ({ ...state, user }));
      },
      isLoading: false,
      setLoading: (isLoading: boolean) => {
        set((state) => ({ ...state, isLoading }));
      },
    }),
    {
      name: 'userStore',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
