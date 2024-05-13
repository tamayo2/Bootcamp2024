CREATE DATABASE TiendaOnline;

USE TiendaOnline;

-- ESTA SERA LA TABLA PARA LOS CLIENTES
CREATE TABLE Clientes (
    ClienteID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100),
    Apellido VARCHAR(100),
    Email VARCHAR(100) UNIQUE,
    Telefono VARCHAR(15)
);

-- ESTA SERA MI TABLA PARA LOS PRODUCTOS
CREATE TABLE Productos (
    ProductoID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100),
    Descripcion TEXT,
    Precio DECIMAL(10, 2),
    Stock INT,
    ProveedorID INT,
    FOREIGN KEY (ProveedorID) REFERENCES Proveedores(ProveedorID)
);

-- TABLA PARA LOS PROVEEDORES
CREATE TABLE Proveedores (
    ProveedorID INT PRIMARY KEY AUTO_INCREMENT,
    NombreEmpresa VARCHAR(100),
    Contacto VARCHAR(100),
    Telefono VARCHAR(15),
    Email VARCHAR(100) UNIQUE
);

-- TABLA PARA LAS VENTAS
CREATE TABLE Ventas (
    VentaID INT PRIMARY KEY AUTO_INCREMENT,
    ClienteID INT,
    ProductoID INT,
    FechaVenta DATE,
    Cantidad INT,
    PrecioTotal DECIMAL(10, 2),
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID),
    FOREIGN KEY (ProductoID) REFERENCES Productos(ProductoID)
);

-- VOY HACER UNA INSERCION DE REGISTROS EN LA TABLA CLIENTES
-- AÑADIENDOLO A LOS DIFERENTES CUERPOS DE LA TABLA NOMBRE,APELLIDO,EMAIL,TELEFONO
INSERT INTO Clientes (Nombre, Apellido, Email, Telefono)
VALUES
    ('Juan', 'Perez', 'juan@example.com', '1234567890'),
    ('Maria', 'Gomez', 'maria@example.com', '0987654321'),
    ('Carlos', 'Lopez', 'carlos@example.com', '5555555555'),
    ('Ana', 'Martinez', 'ana@example.com', '6666666666'),
    ('Pedro', 'Sanchez', 'pedro@example.com', '7777777777'),
    ('Laura', 'Diaz', 'laura@example.com', '8888888888'),
    ('Sofia', 'Fernandez', 'sofia@example.com', '9999999999'),
    ('Diego', 'Rodriguez', 'diego@example.com', '1111111111'),
    ('Lucia', 'Garcia', 'lucia@example.com', '2222222222'),
    ('Pablo', 'Hernandez', 'pablo@example.com', '3333333333');

-- VOY HACER UNA INSERCION DE REGISTROS EN LA TABLA PROVEEDORES
-- AÑADIENDOLO A LOS DIFERENTES CUERPOS DE LA TABLA NOMBRE EMPRESA,CONTACTO,EMAIL,TELEFONO
INSERT INTO Proveedores (NombreEmpresa, Contacto, Telefono, Email)
VALUES
    ('Proveedor A', 'Juan Perez', '1234567890', 'proveedora@example.com'),
    ('Proveedor B', 'Maria Gomez', '0987654321', 'proveedorb@example.com'),
    ('Proveedor C', 'Carlos Lopez', '5555555555', 'proveedorc@example.com');

-- VOY HACER UNA INSERCION DE REGISTROS EN LA TABLA PRODUCTOS
-- AÑADIENDOLO A LOS DIFERENTES CUERPOS DE LA TABLA NOMBRE,DESCRIPCION,PRECIO,STOCK,PROVEEDORID
INSERT INTO Productos (Nombre, Descripcion, Precio, Stock, ProveedorID)
VALUES
    ('Producto 1', 'Descripción del Producto 1', 19.99, 50, 1),
    ('Producto 2', 'Descripción del Producto 2', 29.99, 30, 2),
    ('Producto 3', 'Descripción del Producto 3', 39.99, 20, 3),
    ('Producto 4', 'Descripción del Producto 4', 49.99, 40, 1),
    ('Producto 5', 'Descripción del Producto 5', 59.99, 60, 2),
    ('Producto 6', 'Descripción del Producto 6', 69.99, 10, 3),
    ('Producto 7', 'Descripción del Producto 7', 79.99, 25, 1),
    ('Producto 8', 'Descripción del Producto 8', 89.99, 35, 2),
    ('Producto 9', 'Descripción del Producto 9', 99.99, 15, 3),
    ('Producto 10', 'Descripción del Producto 10', 109.99, 5, 1);

-- VOY HACER UNA INSERCION DE REGISTROS EN LA TABLA VENTAS
-- AÑADIENDOLO A LOS DIFERENTES CUERPOS DE LA TABLA CLIENTEID,PRODUCTID,FECHAVENTA,CANTIDAD,PRECIOTOTAL (ESTA ES LA SIMULACION DE COMPRAS)
INSERT INTO Ventas (ClienteID, ProductoID, FechaVenta, Cantidad, PrecioTotal)
VALUES
    (1, 1, '2024-05-13', 2, 39.98),
    (2, 3, '2024-05-13', 1, 39.99),
    (3, 5, '2024-05-13', 3, 179.97);
    
-- CONSULTAS DE VENTA CON DETALLES DE CLIENTE Y PRODUCTO
SELECT v.VentaID, c.Nombre AS NombreCliente, c.Apellido AS ApellidoCliente,
       p.Nombre AS NombreProducto, v.Cantidad, v.PrecioTotal
FROM Ventas v
JOIN Clientes c ON v.ClienteID = c.ClienteID
JOIN Productos p ON v.ProductoID = p.ProductoID
WHERE v.VentaID = 1;

-- SIMULACION DE COMPRA PARA UN CLIENTE (AQUI AGREGO UNA NUEVA VENTA)
INSERT INTO Ventas (ClienteID, ProductoID, FechaVenta, Cantidad, PrecioTotal)
VALUES
    (4, 2, '2024-05-13', 2, 59.98);

-- ACA SE ACTUALIZA EL STOCK DESPUES DE CADA VENTA
UPDATE Productos
SET Stock = Stock - 2
WHERE ProductoID = 2;

-- VERIFICAR EL ESTADO DEL INVENTARIO Y LA CANTIDAD DISPONIBLE DE UN PRODUCTO EN PARTICULAR
SELECT ProductoID, Nombre, Stock
FROM Productos;

-- ESTA ES UNA CONSULTA PARA VERIFICAR LA CANTIDAD DISPONIBLE DE UN PRODUCTO ESPECIFICO (Producto 2)
SELECT Stock
FROM Productos
WHERE ProductoID = 2;

-- ESTA ES UNA CONSULTA PARA AGREGAR UN NUEVO CLIENTE
INSERT INTO Clientes (Nombre, Apellido, Email, Telefono)
VALUES ('Nuevo', 'Cliente', 'nuevo@example.com', '4444444444');

-- ESTA ES UNA CONSULTA PARA ACTUALIZAR LOS DETALLES DE UN CLIENTE
UPDATE Clientes
SET Telefono = '5555555555'
WHERE ClienteID = 11;

-- ESTE ES UNA CONSULTA PARA ELIMINAR UN CLIENTE
DELETE FROM Clientes
WHERE ClienteID = 11;

-- ESTA ES UNA CONSULTA PARA BUSCAR CLIENTES POR NOMBRE
SELECT *
FROM Clientes
WHERE Nombre LIKE '%Juan%';

-- ESTA ES UNA CONSULTA PARA BUSCAR PROVEEDORES POR EMAIL
SELECT *
FROM Proveedores
WHERE Email LIKE '%example.com%';

-- ESTAS SON LAS VENTAS TOTALES DEL ULTIMO DIA
SELECT SUM(PrecioTotal) AS VentasTotales
FROM Ventas
WHERE FechaVenta = CURDATE();

-- ESTAS SON LAS VENTAS TOTALES DE LA ULTIMA SEMANA
SELECT SUM(PrecioTotal) AS VentasTotales
FROM Ventas
WHERE FechaVenta >= CURDATE() - INTERVAL 1 WEEK;

-- ESTAS SON LAS VENTAS TOTALES DEL ULTIMO MES
SELECT SUM(PrecioTotal) AS VentasTotales
FROM Ventas
WHERE FechaVenta >= CURDATE() - INTERVAL 1 MONTH;

-- ESTOS SON LOS INGRESOS TOTALES
SELECT SUM(PrecioTotal) AS IngresosTotales
FROM Ventas;

-- PRODUCTOS MAS VENDIDOS
SELECT p.Nombre AS NombreProducto, SUM(v.Cantidad) AS TotalVendido
FROM Ventas v
JOIN Productos p ON v.ProductoID = p.ProductoID
GROUP BY p.Nombre
ORDER BY TotalVendido DESC
LIMIT 5;

-- LOS CLIENTES MAS FRECUENTES
SELECT c.Nombre, c.Apellido, COUNT(*) AS TotalCompras
FROM Ventas v
JOIN Clientes c ON v.ClienteID = c.ClienteID
GROUP BY v.ClienteID
ORDER BY TotalCompras DESC
LIMIT 5;