USE DetailTEC;

CREATE TABLE CLIENTE(
	IDCliente INT NOT NULL,
	Usuario VARCHAR(20) NOT NULL,
	Contraseņa VARCHAR(64) NOT NULL,
	InfoContacto VARCHAR(100) NOT NULL,
	Nombre VARCHAR(40) NOT NULL,
	email VARCHAR(30) NOT NULL,
	PuntosDispo INT NOT NULL
);

CREATE TABLE LAVADO (
	NombreLav VARCHAR(20) NOT NULL,
	Duracion INT NOT NULL,
	Precio INT NOT NULL,
	Costo INT NOT NULL,
	Puntos INT NOT NULL,
);

CREATE TABLE INSUMO (
	NombrePro VARCHAR(20) NOT NULL,
	MarcaPro VARCHAR(20) NOT NULL,
	Costo INT NOT NULL,
);

CREATE TABLE PROVEEDOR(
	CedulaJur INT NOT NULL,
	Nombre VARCHAR(20) NOT NULL,
	Email VARCHAR(30) NOT NULL,
	Contacto VARCHAR(100) NOT NULL,
	Provincia VARCHAR(20) NOT NULL,
	Canton VARCHAR(20) NOT NULL,
	Distrito VARCHAR(20) NOT NULL
);

CREATE TABLE SUCURSAL(
	NombreSuc VARCHAR(20) NOT NULL,
	FechaApert DATE NOT NULL,
	Telefono INT NOT NULL,
	Provincia VARCHAR(20) NOT NULL,
	Canton VARCHAR(20) NOT NULL,
	Distrito VARCHAR(20) NOT NULL,
	TiempoDispo FLOAT NOT NULL,
);

CREATE TABLE TRABAJADOR(
	IDTrabajador INT NOT NULL,
	Nacimiento DATE NOT NULL,
	Contraseņa VARCHAR(64) NOT NULL,
	Rol VARCHAR(20) NOT NULL,
	Nombre VARCHAR(20) NOT NULL,
	Apellidos VARCHAR(20) NOT NULL,
	FechaIngreso DATE NOT NULL,
	TipoPago VARCHAR(20) NOT NULL
);

CREATE TABLE FACTURA(
	Placa VARCHAR(7) NOT NULL,
	NumFactura INT NOT NULL,
	Monto INT NOT NULL,
);

CREATE TABLE CITA(
	Placa VARCHAR(7) NOT NULL,
	FechaCita DATE NOT NULL,
	IDEmpleado INT NOT NULL,
	Sucursal VARCHAR(20) NOT NULL,
	Lavado VARCHAR(20) NOT NULL,
	IDCliente INT NOT NULL,
);

CREATE TABLE CLIENTE_TELEFONOS(
	IDCliente INT NOT NULL,
	Telefono INT NOT NULL,
);

CREATE TABLE CLIENTE_DIRECCIONES(
	IDCliente INT NOT NULL,
	Provincia VARCHAR(20) NOT NULL,
	Canton VARCHAR(20) NOT NULL,
	Distrito VARCHAR(20) NOT NULL,
);

CREATE TABLE PRODUCTOS_USADOS(
	NombrePro VARCHAR(20) NOT NULL,
	MarcaPro VARCHAR(20) NOT NULL,
	Lavado VARCHAR(20) NOT NULL
);

CREATE TABLE PROVEIDO_POR(
	NombrePro VARCHAR(20) NOT NULL,
	MarcaPro VARCHAR(20) NOT NULL,
	Proveedor INT NOT NULL,
);

CREATE TABLE ADMIN_SUCURSAL(
	IDTrabajador INT NOT NULL,
	Sucursal VARCHAR(20) NOT NULL,
	FechaInicio DATE NOT NULL,
);

CREATE TABLE BEBIDAS_CONSUMIDAS(
	Factura INT NOT NULL,
	Cantidad INT NOT NULL,
	NombreB VARCHAR(20) NOT NULL,
);

CREATE TABLE BEBIDA(
	NombreB VARCHAR(20) NOT NULL,
	Cantidad INT NOT NULL,
	Costo INT NOT NULL,
);

CREATE TABLE SNACKS_CONSUMIDOS (
	Factura INT NOT NULL,
	Cantidad INT NOT NULL,
	NombreS VARCHAR(20) NOT NULL
);

CREATE TABLE SNACK(
	NombreS VARCHAR(20) NOT NULL,
	Cantidad INT NOT NULL,
	Costo INT NOT NULL
);

ALTER TABLE CLIENTE
ADD PRIMARY KEY (IDCliente);

ALTER TABLE LAVADO 
ADD PRIMARY KEY (NombreLav);

ALTER TABLE INSUMO
ADD PRIMARY KEY (NombrePro, MarcaPro);

ALTER TABLE PROVEEDOR
ADD PRIMARY KEY (CedulaJur);

ALTER TABLE SUCURSAL
ADD PRIMARY KEY (NombreSuc);

ALTER TABLE TRABAJADOR
ADD PRIMARY KEY (IDTrabajador);

ALTER TABLE CITA
ADD PRIMARY KEY (Placa);

ALTER TABLE FACTURA
ADD FOREIGN KEY (Placa) REFERENCES CITA(Placa), PRIMARY KEY (NumFactura);

ALTER TABLE CLIENTE_TELEFONOS
ADD FOREIGN KEY (IDCliente) REFERENCES CLIENTE(IDCliente), PRIMARY KEY (Telefono);

ALTER TABLE CLIENTE_DIRECCIONES
ADD FOREIGN KEY (IDCliente) REFERENCES CLIENTE(IDCliente), PRIMARY KEY (Provincia, Canton, Distrito);

ALTER TABLE PRODUCTOS_USADOS
ADD PRIMARY KEY (MarcaPro), FOREIGN KEY (Lavado) REFERENCES LAVADO(NombreLav), FOREIGN KEY (NombrePro,MarcaPro) REFERENCES INSUMO(NombrePro,MarcaPro); 

ALTER TABLE PROVEIDO_POR
ADD FOREIGN KEY (NombrePro, MarcaPro) REFERENCES INSUMO(NombrePro, MarcaPro), FOREIGN KEY (Proveedor) REFERENCES PROVEEDOR(CedulaJur);

ALTER TABLE ADMIN_SUCURSAL
ADD FOREIGN KEY (IDTrabajador) REFERENCES TRABAJADOR(IDTrabajador), FOREIGN KEY (Sucursal) REFERENCES SUCURSAL(NombreSuc);

--Faltan las relaciones de productos extra y revisar las relaciones de factura y cita

Select * from CLIENTE