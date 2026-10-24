import express from 'express';
import { getUserProfile } from '../controllers/userController.js';
import { protectedRoute } from '../middleware/auth.js';
import { updateUserProfile } from '../controllers/userController.js';
import { updateUserPassword } from '../controllers/userController.js';
import { deleteUserProfile } from '../controllers/userController.js';


const router = express.Router();

router.get("/profile",protectedRoute,getUserProfile);
router.put("/profile",protectedRoute,updateUserProfile);
router.put("/profile/password",protectedRoute,updateUserPassword);
router.delete("/profile",protectedRoute,deleteUserProfile);

export default router;