import express from 'express';
import { getUserProfile } from '../controllers/userController.js';
import { protectedRoute } from '../middleware/auth.js';


const router = express.Router();

router.get("/profile",protectedRoute,getUserProfile);

export default router;