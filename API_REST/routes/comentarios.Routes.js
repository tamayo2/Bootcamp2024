import express from 'express';
import { getComentarios, getComentarioById, putComentario, postComentario, deleteComentario } from '../controllers/comentarios.controllers.js';
import { authRequired, isAdmin } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/comentarios', authRequired, isAdmin, getComentarios);//necesita admin
router.get('/comentarios/:id', authRequired, isAdmin, getComentarioById);
router.post('/comentarios', authRequired, postComentario);//no necesita Admin
router.put('/comentarios/:id', authRequired, isAdmin, putComentario);
router.delete('/comentarios/:id', authRequired, isAdmin, deleteComentario);


export default router;