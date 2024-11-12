import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios('https://api.escuelajs.co/api/v1/products');
      return data;
    },
  });
};
