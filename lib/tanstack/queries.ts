import { ProductResponse, ProductType, User } from '@/type';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetAllProducts = () => {
  return useQuery<ProductType>({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios('https://dummyjson.com/products');
      return data;
    },
  });
};
export const useGetSingleProduct = (id: string) => {
  return useQuery<ProductResponse>({
    queryKey: ['product', id],
    queryFn: async () => {
      const { data } = await axios(`https://dummyjson.com/products/${id}`);
      return data;
    },
  });
};
export const useGetSimilarProducts = (category: string) => {
  return useQuery<ProductType>({
    queryKey: ['similar_products', category],
    queryFn: async () => {
      const { data } = await axios(
        `https://dummyjson.com/products/category/${category}?limit=6`
      );
      return data;
    },
  });
};
export const useUserInfo = (id: string) => {
  return useQuery<User>({
    queryKey: ['User_Info', id],
    queryFn: async () => {
      const { data } = await axios(`https://dummyjson.com/users/${id}`);
      return data;
    },
  });
};
