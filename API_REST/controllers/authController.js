import User from '../models/userModel.js';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { createAccessToken } from '../libs/jwt.register.js';

dotenv.config();

export const register = async (req, res) => {
  const { email, password, confirmPassword, nombre, apellido } = req.body;

  try {
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Las contraseñas no coinciden' });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'El email ya está registrado' });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: passwordHash,
      nombre,
      apellido,
      rol: "User"
    });

    const token = await createAccessToken({ id: newUser.id });

    res.cookie('token', token, { httpOnly: true });

    res.json({
      message: 'Usuario creado exitosamente'
    });
  } catch (err) {
    console.error('Error en el registro del usuario:', err);
    res.status(500).send('Ocurrió un error al registrar el usuario');
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ where: { email } });

    if (!userFound) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    const token = await createAccessToken({ id: userFound.id, rol: userFound.rol });

    res.cookie('token', token, { httpOnly: true });

    res.json({
      message: 'Usuario logueado exitosamente'
    });
  } catch (err) {
    console.error('Error en el proceso de login:', err);
    res.status(500).send('Ocurrió un error en el servidor');
  }
};

export const logout = (req, res) => {
  try {
    res.cookie('token', '', {
      expires: new Date(0)
    });
    res.status(200).json({
      message: 'Logout exitoso, token borrado'
    });
  } catch (err) {
    console.error('Error en el proceso de logout:', err);
    res.status(500).send('Ocurrió un error en el servidor');
  }
};

export const profile = async (req, res) => {
  try {
    const userFound = await User.findOne({ where: { id: req.user.id } });

    if (!userFound) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    res.json({
      id: userFound.id,
      nombre: userFound.nombre,
      email: userFound.email
    });
  } catch (err) {
    console.error('Error en el proceso de obtener el perfil:', err);
    res.status(500).send('Ocurrió un error en el servidor');
  }
};
