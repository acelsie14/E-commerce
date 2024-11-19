import { colors } from '@/constants';
import { useCartStore } from '@/lib/zustand/cart';
import { ProductResponse } from '@/type';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { toast } from 'sonner-native';

type Props = {
  item: ProductResponse;
  stock: number;
};
const { width } = Dimensions.get('window');

export const BottomButtons = ({ item, stock }: Props): JSX.Element => {
  const addToCart = useCartStore((state) => state.addItem);
  const removesFromCart = useCartStore((state) => state.removeItem);
  const qtyInCart =
    useCartStore((state) => state.items.find((i) => i.id === item.id))?.qty ||
    0;
  const router = useRouter();

  // ... previous code remains the same
  const onPress = () => {
    router.push('../');
  };

  // ... the rest of the component
  const onAddItem = () => {
    if (qtyInCart === stock)
      return toast.error('Product is out of stock', {
        description: 'Can not add more than available stock',
      });

    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      qty: 1,
      img: item.thumbnail,
    });
    toast.success('Cart has been updated');
  };
  const onRemoveFromCart = () => {
    if (qtyInCart === 0) return;
    removesFromCart(item.id);
    toast.success('Cart has been updated');
  };
  const renderControlButtons = qtyInCart > 0;
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.iconContainer,
          { opacity: pressed ? 0.5 : 1 },
        ]}
        onPress={onPress}
      >
        <AntDesign name="home" size={30} color={colors.yellow} />
      </Pressable>

      <View style={styles.iconContainer}>
        <AntDesign name="phone" size={30} color={colors.yellow} />
      </View>

      {renderControlButtons && (
        <View style={styles.controls}>
          <TouchableOpacity
            disabled={qtyInCart === 0}
            onPress={onRemoveFromCart}
            style={styles.iconStyle}
          >
            <AntDesign name="minus" size={30} color={colors.white} />
          </TouchableOpacity>
          <Text>{qtyInCart}</Text>
          <TouchableOpacity style={styles.iconStyle} onPress={onAddItem}>
            <AntDesign name="plus" size={30} color={colors.white} />
          </TouchableOpacity>
        </View>
      )}

      {!renderControlButtons && (
        <TouchableOpacity
          disabled={stock === 0}
          style={styles.pressable}
          onPress={onAddItem}
        >
          <AntDesign
            name="shoppingcart"
            size={30}
            color={colors.white}
            style={styles.absCart}
          />
          <Text style={styles.pressText}>Add to Cart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
    gap: 10,
  },
  iconContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.yellow,
    padding: 10,
  },
  pressable: {
    backgroundColor: colors.yellow,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  pressText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  absCart: {
    position: 'absolute',
    left: 4,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  iconStyle: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
