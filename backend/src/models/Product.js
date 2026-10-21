import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
name:{ type: String, required: true, unique: true },
slug:{ type: String, required: true, unique: true },
description:{ type: String, required: true },
price:{ type: Number, required: true },
discount:{ type: Number, min: 0 ,default: null},
category:{ type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
brand:{ type: String },
stock:{ type: Number, default: 0,min: 0 },
attributes:{ type: Map, of: String },
tags:[{ type: String }],
images:[{ type: String }],
currency:{ type: String, default: 'NGN' },
numReviews:{ type: Number, default: 0 },
ratings:{ type: Number, default: 0 },
isFeatured:{ type: Boolean, default: false },
isActive:{ type: Boolean, default: true },
},{timestamps: true})

productSchema.index({ name: 'text', description: 'text', brand: 'text', tags: 'text' });
const Product = mongoose.model('Product', productSchema);
export default Product; 