import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type Product = {
  images: string[];
  id: number;
  title: string;
  price: number;
};
interface favProductState {
  favorite: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: number) => void;
  //   isFavorite: (productId: number) => boolean;
}

export const useFavStore = create<favProductState>()(
  persist(
    (set) => ({
      favorite: [],
      addFavorite: (product) => {
        set((state) => ({ favorite: [...state.favorite, product] }));
      },
      removeFavorite: (productId) => {
        set((state) => ({
          favorite: state.favorite.filter(
            (product) => product.id !== productId
          ),
        }));
      },
    }),
    {
      name: 'favorite',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
