import express from 'express';
import { postLibro, getLibros, getLibroById, putLibro, deleteLibro } from '../controllers/libroController.js';
import { authRequired, isAdmin } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/libros',authRequired, isAdmin, postLibro);
router.get('/libros',authRequired, getLibros);//no necesita admin
router.get('/libros/:id',authRequired, getLibroById);
router.put('/libros/:id',authRequired, isAdmin, putLibro);
router.delete('/libros/:id',authRequired, isAdmin, deleteLibro);

export default router;