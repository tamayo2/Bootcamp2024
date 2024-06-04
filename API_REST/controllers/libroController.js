import Libro from '../models/libroModel.js';

export const postLibro = async (req, res) => {
    try {
        const { titulo, autor, genero, ano_publicacion, isbn } = req.body;
        const libro = await Libro.create({ titulo, autor, genero, ano_publicacion, isbn });
        res.status(201).json(libro);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export const getLibros = async (req, res) => {
    try {
        const libros = await Libro.findAll();
        res.status(200).json(libros);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getLibroById = async (req, res) => {
    try {
        const { id } = req.params;
        const libro = await Libro.findByPk(id);
        if (!libro) {
            return res.status(404).json({ error: 'Libro no encontrado' });
        }
        res.status(200).json(libro);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const putLibro = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, autor, genero, ano_publicacion, isbn } = req.body;
        const libro = await Libro.findByPk(id);
        if (!libro) {
            return res.status(404).json({ error: 'Libro no encontrado' });
        }
        libro.titulo = titulo;
        libro.autor = autor;
        libro.genero = genero;
        libro.ano_publicacion = ano_publicacion;
        libro.isbn = isbn;
        await libro.save();
        res.status(200).json(libro);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteLibro = async (req, res) => {
    try {
        const { id } = req.params;
        const libro = await Libro.findByPk(id);
        if (!libro) {
            return res.status(404).json({ error: 'Libro no encontrado' });
        }
        await libro.destroy();
        res.status(200).json({
            message:"Libro borrado"
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
