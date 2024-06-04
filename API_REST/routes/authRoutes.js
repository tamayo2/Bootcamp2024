import express from 'express';
import { register, login, logout } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);



import User from '../models/userModel.js'; // Importa tu modelo de usuario



// Ruta para crear un nuevo usuario
router.post('/users', async (req, res) => {
  try {
    const newUser = await User.create(req.body); // Crea un nuevo usuario con los datos del cuerpo de la solicitud
    res.status(201).json(newUser); // Devuelve el nuevo usuario creado
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


export default router;
