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
        filter.category = categoryDoc._id;
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

        const products = await Product.find(filter).skip(skip).limit(limit).populate('category', 'name').select('-__v');

        res.status(200).json({
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
        res.status(500).json({ message: 'Internal server error' });
    }
}   

export const getProductById = async (req,res)=>{
    try {
        const productt = await Product.findById(req.params.id).populate('category', 'name').select('-__v');
        if(!productt){
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json({
            success: true,
            message: 'Product retrieved successfully',
            data: productt
        });
    } catch (error) {
        console.error('Get product by ID error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}