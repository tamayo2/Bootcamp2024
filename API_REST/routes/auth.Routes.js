import express from 'express';
import { register, login, logout, profile} from '../controllers/authController.js';
import { authRequired } from '../middleware/authMiddleware.js';
import {validateSchema} from '../middleware/validator.middleware.js';
import {registerSchema, loginSchema} from '../schemas/auth.schema.js';
const router = express.Router();

router.post('/register',validateSchema(registerSchema), register);
router.post('/login',validateSchema(loginSchema), login);
router.post('/logout', logout);
router.get('/profile', authRequired, profile);//el perfil actual


export default router;
