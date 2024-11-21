import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { CartItem as CartItemType, ProductResponse } from '@/type';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { UpdateButtons } from './ui/UpdateButtons';
import { useCartStore } from '@/lib/zustand/cart';
import { colors } from '@/constants';
import { toast } from 'sonner-native';
type Props = {
  item: CartItemType;
};

const CartItem = ({ item }: Props) => {
  const router = useRouter();
  const onPress = () => {
    router.push(`/product/${item.id}`);
  };
  return (
    <Pressable onPress={onPress}>
      <View style={styles.outerContainer}>
        <View style={styles.conatiner}>
          <View style={styles.left}>
            <Image
              style={{ width: 100, height: 100 }}
              source={item.img}
              contentFit="cover"
              placeholder={require('@/assets/images/Iphone-spinner-2.gif')}
              placeholderContentFit="cover"
            />
          </View>
          <View style={styles.right}>
            <Text>{item.title}</Text>
            <Text>₦{item.price}</Text>
            <Text>Brand: {item.brand}</Text>
            <Text>{item.stock} in stock</Text>
          </View>
        </View>
        <Controls item={item} />
      </View>
    </Pressable>
  );
};

export default CartItem;
const Controls = ({ item }: { item: CartItemType }) => {
  const increase = useCartStore((state) => state.addItem);
  const decrease = useCartStore((state) => state.removeItem);
  const deleteFromCart = useCartStore((state) => state.deleteFromCart);
  const onIncrease = () => {
    increase(item);
  };
  const onDecrease = () => {
    decrease(item.id);
  };
  const disableIncrease = item.qty === item.stock;
  const disableDecrease = item.qty === 1;
  return (
    <View style={styles.controls}>
      <TouchableOpacity onPress={() => deleteFromCart(item.id)}>
        <Text style={styles.remove}>Remove</Text>
      </TouchableOpacity>
      <UpdateButtons
        qtyInCart={item.qty}
        disableIncrease={disableIncrease}
        disableDecrease={disableDecrease}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        small
      />
    </View>
  );
};

const styles = StyleSheet.create({
  left: { padding: 3 },
  right: { gap: 10 },
  conatiner: {
    flexDirection: 'row',
    gap: 10,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  remove: {
    color: colors.yellow,
  },
  outerContainer: {
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
});
