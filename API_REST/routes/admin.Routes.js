import {getUsuarios, deleteUsuario, putUsuarios, getUsuariosById} from '../controllers/Admin.controller.js';
import Router from 'express';
import { authRequired, isAdmin } from '../middleware/authMiddleware.js';

const router = Router()


router.get('/users', authRequired, isAdmin, getUsuarios)
router.get('/users/:id', authRequired, isAdmin, getUsuariosById)
router.delete('/users/:id',authRequired, isAdmin, deleteUsuario)
router.put('/users/:id',authRequired, isAdmin, putUsuarios)

export default router;