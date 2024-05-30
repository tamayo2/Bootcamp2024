import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const register = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) return res.status(400).json({ message: 'Passwords do not match' });

  const userExists = await User.findOne({ where: { email } });
  if (userExists) return res.status(400).json({ message: 'Email already registered' });

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashedPassword });

  res.status(201).json({ message: 'User registered successfully' });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) return res.status(404).json({ message: 'User not found' });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).json({ message: 'Incorrect password' });

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.SECRET_KEY, { expiresIn: '1h' });
  res.cookie('token', token, { httpOnly: true });

  res.status(200).json({ message: 'Login successful' });
};

const logout = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Logout successful' });
};



export { register, login, logout };
