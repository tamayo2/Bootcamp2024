import { sequelize } from '../config/config.js';
import User from '../models/userModel.js';
export const getUsuarios = async (req, res) => {
    try {
        const [rows] = await sequelize.query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al procesar el usuario' });
    }
};
export const getUsuariosById = async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el usuario' });
    }
  };
export const deleteUsuario = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await sequelize.query(
            'DELETE FROM users WHERE id = :id',
            {
                replacements: { id },
                type: sequelize.QueryTypes.DELETE
            }
        );
        //todavía no verifica que el id no existe
        res.status(200).send({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).send('Ocurrió un error al eliminar el usuario');
    }
};

export const putUsuarios = async (req, res) => {
    const { id } = req.params;
    const { nombre, email, apellido } = req.body;

    try {
        const usuario = await User.findByPk(id);

        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        usuario.nombre = nombre;
        usuario.email = email;
        usuario.apellido = apellido
        
        await usuario.save();

        res.status(200).json(usuario);
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).json({ error: 'Ocurrió un error al actualizar el usuario' });
    }
};