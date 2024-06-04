import Reserva from '../models/reservaModel.js';

export const postReserva = async (req, res) => {
    try {
        const { id_usuario, id_libro, fecha_reserva, fecha_devolucion, estado } = req.body;
        if (estado !== "activa" && estado !== "cancelada" && estado !== "completada") {
            return res.status(400).json({ message: "En los valores de estado solo se permite: activa, cancelada y completada" });
        }
        const reserva = await Reserva.create({ id_usuario, id_libro, fecha_reserva, fecha_devolucion, estado });
        res.status(201).json(reserva);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export const getReservas = async (req, res) => {
    try {
        const reservas = await Reserva.findAll();
        res.status(200).json(reservas);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getReservaById = async (req, res) => {
    try {
        const { id } = req.params;
        const reserva = await Reserva.findByPk(id);
        if (!reserva) {
            return res.status(404).json({ error: 'Reserva no encontrada' });
        }
        res.status(200).json(reserva);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const putReserva = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_usuario, id_libro, fecha_reserva, fecha_devolucion, estado } = req.body;
        const reserva = await Reserva.findByPk(id);
        if (!reserva) {
            return res.status(404).json({ error: 'Reserva no encontrada' });
        }
        reserva.id_usuario = id_usuario;
        reserva.id_libro = id_libro;
        reserva.fecha_reserva = fecha_reserva;
        reserva.fecha_devolucion = fecha_devolucion;
        reserva.estado = estado;
        await reserva.save();
        res.status(200).json(reserva);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteReserva = async (req, res) => {
    try {
        const { id } = req.params;
        const reserva = await Reserva.findByPk(id);
        if (!reserva) {
            return res.status(404).json({ error: 'Reserva no encontrada' });
        }
        await reserva.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};