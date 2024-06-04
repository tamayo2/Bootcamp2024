import express from 'express';
import cookieParser from 'cookie-parser';
import { syncModels } from './models/index.js';
import authRoutes from './routes/auth.Routes.js';
import adminRoutes from './routes/admin.Routes.js';
import User from './models/userModel.js'; 
import bcrypt from 'bcrypt';
import comentariosRoutes from './routes/comentarios.Routes.js';
import librosRoutes from './routes/libros.Routes.js'
import reservasRoutes from './routes/reservas.routes.js';
const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

app.use(comentariosRoutes);
app.use(authRoutes);
app.use(adminRoutes);
app.use(librosRoutes);
app.use(reservasRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: 'No se encontró el endpoint',
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Problemas con el servidor');
});

const createAdminUser = async () => {
  const email = 'admin@gmail.com';
  const password = 'adminpassword';
  try {
    const existingAdmin = await User.findOne({ where: { email, rol: 'Admin' } });
    if (existingAdmin) {
      console.log('El administrador ya está creado');
      return;
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const adminUser = await User.create({
      email,
      password: passwordHash,
      nombre: 'Tamayo',
      apellido: 'ElFullStack',
      rol: 'Admin',
    });

    console.log('Administrador creado exitosamente:', adminUser.email);
  } catch (err) {
    console.error('Error al crear el administrador:', err);
  }
};

syncModels()
  .then(async () => {
    await createAdminUser(); 

    app.listen(port, () => {
      console.log(`El server escucha en el puerto: ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error al sincronizar modelos:', err);
  });
