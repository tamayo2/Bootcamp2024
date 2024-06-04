import Comentario from '../models/comentario.Model.js';

export const postComentario = async (req, res) => {
  const { id_libro, comentario, puntuacion } = req.body;
  const id_usuario = req.user.id; 
  try {
    const newComentario = await Comentario.create({
      id_usuario,
      id_libro,
      comentario,
      puntuacion,
    });

    res.status(201).json(newComentario);
  } catch (err) {
    res.status(500).json({ message: `Error: ${err}` });
  }
};

export const getComentarios = async (req, res) => {
  try {
    const comentarios = await Comentario.findAll();
    res.json(comentarios);
  } catch (err) {
    console.error('Error al obtener los comentarios:', err);
    res.status(500).json({ message: 'Ocurrió un error al obtener los comentarios' });
  }
};

export const getComentarioById = async (req, res) => {
  const { id } = req.params;

  try {
    const comentario = await Comentario.findByPk(id);

    if (!comentario) {
      return res.status(404).json({ message: 'Comentario no encontrado' });
    }

    res.json(comentario);
  } catch (err) {
    console.error('Error al obtener el comentario por ID:', err);
    res.status(500).json({ message: 'Ocurrió un error al obtener el comentario' });
  }
};

export const putComentario = async (req, res) => {
  const { id } = req.params;
  const { id_libro, comentario, puntuacion } = req.body;
  const id_usuario = req.user.id; 

  try {
    const comentarioToUpdate = await Comentario.findByPk(id);

    if (!comentarioToUpdate) {
      return res.status(404).json({ message: 'Comentario no encontrado' });
    }

    await comentarioToUpdate.update({
      id_usuario,
      id_libro,
      comentario,
      puntuacion,
    });

    res.json({ message: 'Comentario actualizado correctamente' });
  } catch (err) {
    console.error('Error al actualizar el comentario:', err);
    res.status(500).json({ message: 'Ocurrió un error al actualizar el comentario' });
  }
};

export const deleteComentario = async (req, res) => {
    const { id } = req.params;
    const id_usuario = req.user.id; 
  
    try {
      const comentarioToDelete = await Comentario.findOne({
        where: {
          id,
          id_usuario,
        },
      });
  
      if (!comentarioToDelete) {
        return res.status(404).json({ message: 'Comentario no encontrado' });
      }
  
      await comentarioToDelete.destroy();
  
      res.json({ message: 'Comentario eliminado correctamente' });
    } catch (err) {
      console.error('Error al eliminar el comentario:', err);
      res.status(500).json({ message: 'Ocurrió un error al eliminar el comentario' });
    }
  };