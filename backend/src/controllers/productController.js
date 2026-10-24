import Product from '../models/Product.js';
import Category from '../models/Category.js';

export const getAllProducts = async (req, res) => {
    try {
        const { name, category, slug,brand,tags} = req.query;
        const page = Math.max(1, parseInt(req.query.page, 10) || 1);
        const limit = Math.min(100,Math.max(1, parseInt(req.query.limit, 10) || 10)
);
        const skip = (page - 1) * limit;
        const filter = {};

          if (name?.trim()) {
      const escapedName = name.trim().replace(
        /[.*+?^${}()|[\]\\]/g,
        '\\$&'
      );

      filter.name = {
        $regex: escapedName,
        $options: 'i',
      };
    }
        if (category) {
            const escapedCategory = category.trim().replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
            const categoryDoc = await Category.findOne({name: { $regex: new RegExp(`^${escapedCategory}$`, 'i') },});
        if (categoryDoc) {
        filter.categories = categoryDoc._id;
        } else {
        return res.status(200).json({
            success: true,
            message: 'Category not found',
            count: 0,
            data: [],
});
        }
    }

        if (slug) {
            filter.slug = slug;
        }
        if (brand) {
            filter.brand = brand;
        }
    if (tags) {    
  const tagList = tags
    .split(',')
    .map(tag => tag.trim())
    .filter(Boolean);

  if (tagList.length > 0) {
    filter.tags = {
      $in: tagList.map(tag => ({
        $regex: tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
        $options: 'i',
      })),
    };
  }
}

        const totalProducts = await Product.countDocuments(filter);
        const totalPages = Math.ceil(totalProducts / limit);

        const products = await Product.find(filter).skip(skip).limit(limit).populate('categories', 'name').select('-__v');

        return res.status(200).json({
            message: 'Products retrieved successfully',
            success: true,
            count:products.length,
            data: products,
            pagination: {
            totalpages: totalPages, 
            currentPage: page,
            hasNext: page < totalPages,
            hasPrev: page > 1
        } });
    } catch (error) {
        console.error('Get all products error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}   

export const getProductById = async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id).populate('categories', 'name').select('-__v');
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        return res.status(200).json({
            success: true,
            message: 'Product retrieved successfully',
            data: product
        });
    } catch (error) {
        console.error('Get product by ID error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const createProduct = async (req,res)=>{
try {
    const { name, slug, description, price, discount, categories, brand, stock, attributes, tags, images, currency } = req.body;
if (!name || !slug || !description || price === null ||price===undefined|| !categories || categories.length === 0) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  let categoryIds = [];
    if (categories && categories.length > 0) { 
      for (const categoryName of categories) {
        const escapedCategory = categoryName
    .trim()
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const category = await Category.findOne({
    name: {
        $regex: `^${escapedCategory}$`,
        $options: 'i'
    }
});

        if (!category) {
          return res.status(400).json({
            message: `Category '${categoryName}' does not exist. Please use an existing category.`,
          });
        }
        categoryIds.push(category._id);
      }
    }

    const product = new Product({
        name,
        slug,
        description,
        price,
        discount,
        categories: categoryIds,
        brand,
        stock,
        attributes,
        tags,
        images,
        currency
    });
    await product.save();

    const populatedProduct = await Product.findById(product._id).populate('categories', 'name').select('-__v');
    return res.status(201).json({
        success: true,
        message: 'Product created successfully',
        data: populatedProduct
    });
} catch (error) {
    console.error('Create product error:', error);
    res.status(500).json({ message: 'Error creating product' });
}
}


export const updateProduct = async (req, res) => {
  try {
    const {
      name,
      slug,
      description,
      price,
      discount,
      categories,
      brand,
      stock,
      attributes,
      tags,
      images,
      currency,
    } = req.body;

    const updateData = {};

    if (name !== undefined) updateData.name = name;
    if (slug !== undefined) updateData.slug = slug;
    if (description !== undefined) updateData.description = description;
    if (price !== undefined) updateData.price = price;
    if (discount !== undefined) updateData.discount = discount;
    if (brand !== undefined) updateData.brand = brand;
    if (stock !== undefined) updateData.stock = stock;
    if (attributes !== undefined) updateData.attributes = attributes;
    if (tags !== undefined) updateData.tags = tags;
    if (images !== undefined) updateData.images = images;
    if (currency !== undefined) updateData.currency = currency;

    if (categories !== undefined) {
      if (!Array.isArray(categories) || categories.length === 0) {
        return res.status(400).json({
          success: false,
          message: 'Categories must be a non-empty array of category names',
        });
      }

      const categoryIds = [];

      for (const categoryName of categories) {
        if (typeof categoryName !== 'string' || !categoryName.trim()) {
          return res.status(400).json({
            success: false,
            message: 'Each category must be a non-empty string',
          });
        }

        const escapedCategory = categoryName.trim().replace(
          /[.*+?^${}()|[\]\\]/g,
          '\\$&'
        );

        const category = await Category.findOne({
          name: {
            $regex: `^${escapedCategory}$`,
            $options: 'i',
          },
        });

        if (!category) {
          return res.status(400).json({
            success: false,
            message: `Category '${categoryName}' does not exist`,
          });
        }

        categoryIds.push(category._id);
      }

      updateData.categories = categoryIds;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: updateData },
      {
        returnDocument: 'after',
        runValidators: true,
      }
    )
      .populate('categories', 'name')
      .select('-__v');

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: updatedProduct,
    });
  } catch (error) {
    console.error('Update product error:', error);

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'A product with that name or slug already exists',
      });
    }

    if (error.name === 'ValidationError' || error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid product data',
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};


export const deleteProduct = async (req,res)=>{
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id); 

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Product deleted successfully',
            data: deletedProduct
        });
    }
    catch (error) {
        console.error('Delete product error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}