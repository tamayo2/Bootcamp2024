import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authenticate = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'Not authenticated' });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== 'Admin') return res.status(403).json({ message: 'Not authorized' });
  next();
};

export { authenticate, authorizeAdmin };
