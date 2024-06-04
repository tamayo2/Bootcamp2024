import express from 'express';
import { postReserva, getReservas, getReservaById, putReserva, deleteReserva } from '../controllers/reservas.controller.js';
import { authRequired, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/reservas',authRequired, postReserva);//si no es admin solo puede hacer esto
router.get('/reservas',authRequired,isAdmin, getReservas);
router.get('/reservas/:id',authRequired,isAdmin, getReservaById);
router.put('/reservas/:id',authRequired,isAdmin, putReserva);
router.delete('/reservas/:id',authRequired,isAdmin, deleteReserva);

export default router;