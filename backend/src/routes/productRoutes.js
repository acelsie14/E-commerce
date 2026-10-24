import express from 'express';
import { getAllProducts, getProductById, createProduct,updateProduct,deleteProduct } from '../controllers/productController.js';
import { protectedRoute, isAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get("/",getAllProducts);
router.get("/:id",getProductById);
router.post("/",protectedRoute,isAdmin,createProduct);
router.put("/:id",protectedRoute,isAdmin,updateProduct);
router.delete("/:id",protectedRoute,isAdmin,deleteProduct);

export default router;