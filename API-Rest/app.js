import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { syncModels } from './models/index.js';
import authRoutes from './routes/authRoutes.js';
// Importa otras rutas aquí

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // Asegúrate de que este puerto no es 3306

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes);
// Usa otras rutas aquí

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

syncModels().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
