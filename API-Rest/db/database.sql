CREATE DATABASE IF NOT EXISTS LIBRERIA;

USE LIBRERIA;

CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol ENUM('Admin', 'User') NOT NULL,
    nombre VARCHAR(255),
    apellido VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Libros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    genero VARCHAR(100),
    ano_publicacion INT,
    isbn VARCHAR(20) UNIQUE
);

CREATE TABLE IF NOT EXISTS Reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_libro INT,
    fecha_reserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_devolucion TIMESTAMP,
    estado ENUM('activa', 'cancelada', 'completada') DEFAULT 'activa',
    FOREIGN KEY (id_usuario) REFERENCES Users(id),
    FOREIGN KEY (id_libro) REFERENCES Libros(id),
    INDEX (id_usuario),
    INDEX (id_libro)
);

CREATE TABLE IF NOT EXISTS Comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_libro INT,
    comentario TEXT,
    puntuacion INT CHECK (puntuacion BETWEEN 1 AND 5),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Users(id),
    FOREIGN KEY (id_libro) REFERENCES Libros(id),
    INDEX (id_usuario),
    INDEX (id_libro)
);

-- Insertar datos en la tabla Users
INSERT INTO Users (email, password, rol, nombre, apellido) VALUES
('admin@example.com', 'adminpassword', 'Admin', 'John', 'Doe'),
('user1@example.com', 'user1password', 'User', 'Jane', 'Smith'),
('user2@example.com', 'user2password', 'User', 'Alice', 'Johnson');

-- Insertar datos en la tabla Libros
INSERT INTO Libros (titulo, autor, genero, ano_publicacion, isbn) VALUES
('Cien Años de Soledad', 'Gabriel Garcia Marquez', 'Novela', 1967, '978-0307474728'),
('Don Quijote de la Mancha', 'Miguel de Cervantes', 'Novela', 1605, '978-0060934347'),
('La Sombra del Viento', 'Carlos Ruiz Zafón', 'Novela', 2001, '978-0143126393');

-- Insertar datos en la tabla Reservas
INSERT INTO Reservas (id_usuario, id_libro, fecha_reserva, fecha_devolucion, estado) VALUES
(1, 1, '2024-05-01 10:00:00', '2024-06-01 10:00:00', 'activa'),
(2, 2, '2024-05-15 15:00:00', '2024-06-15 15:00:00', 'activa'),
(3, 3, '2024-05-20 20:00:00', '2024-06-20 20:00:00', 'activa');

-- Insertar datos en la tabla Comentarios
INSERT INTO Comentarios (id_usuario, id_libro, comentario, puntuacion, fecha_creacion) VALUES
(1, 1, 'Excelente libro, muy recomendado.', 5, '2024-05-10 12:00:00'),
(2, 2, 'Un clásico que todos deberían leer.', 4, '2024-05-18 18:00:00'),
(3, 3, 'Me encantó la trama y los personajes.', 5, '2024-05-25 22:00:00');
