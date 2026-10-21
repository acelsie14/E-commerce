import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  name: String,           // snapshot
  image: String,          // snapshot
  price: Number,          // snapshot at purchase time
  quantity: { type: Number, required: true, min: 1 },
});

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderNumber: { type: String, unique: true, required: true },
  items: [orderItemSchema],
  shippingAddress: {
    street: String, city: String, state: String, zip: String, country: String,
  },
  paymentMethod: { type: String, enum: ['card', 'paypal', 'cod'], required: true },
  paymentResult: {
    id: String, status: String, updateTime: String, email: String,
  },
  itemsPrice: { type: Number, required: true },
  shippingPrice: { type: Number, default: 0 },
  taxPrice: { type: Number, default: 0 },
  totalPrice: { type: Number, required: true },
  isPaid: { type: Boolean, default: false },
  paidAt: Date,
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending',
  },
  deliveredAt: Date,
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;