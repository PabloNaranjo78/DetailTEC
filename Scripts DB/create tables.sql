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
	PuntosOtorgar INT NOT NULL
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
	Direccion VARCHAR(20) NOT NULL,
);

CREATE TABLE SUCURSAL(
	NombreSuc VARCHAR(20) NOT NULL,
	FechaApert VARCHAR(10) NOT NULL,
	Telefono INT NOT NULL,
	Provincia VARCHAR(20) NOT NULL,
	Canton VARCHAR(20) NOT NULL,
	Distrito VARCHAR(20) NOT NULL,
	TiempoDispo FLOAT NOT NULL,
);

CREATE TABLE TRABAJADOR(
	IDTrabajador INT NOT NULL,
	Nacimiento VARCHAR(10) NOT NULL,
	Contraseņa VARCHAR(64) NOT NULL,
	Rol VARCHAR(20) NOT NULL,
	Nombre VARCHAR(20) NOT NULL,
	Apellidos VARCHAR(20) NOT NULL,
	FechaIngreso VARCHAR(10) NOT NULL,
	TipoPago VARCHAR(20) NOT NULL
);

CREATE TABLE FACTURA(
	Placa VARCHAR(7) NOT NULL,
	NumFactura INT NOT NULL,
	Monto INT NOT NULL,
);

CREATE TABLE CITA(
	Placa VARCHAR(7) NOT NULL,
	FechaCita VARCHAR(10) NOT NULL,
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
	FechaInicio VARCHAR(10) NOT NULL,
);

CREATE TABLE BEBIDAS_CONSUMIDAS(
	Factura INT NOT NULL,
	Cantidad INT NOT NULL,
	NombreB VARCHAR(20) NOT NULL,
	Placa VARCHAR(7) NOT NULL,
);

CREATE TABLE BEBIDA_SNACK(
	Nombre VARCHAR(20) NOT NULL,
	Cantidad INT NOT NULL,
	Costo INT NOT NULL,
	Tipo VARCHAR(7) NOT NULL
);

CREATE TABLE BEBIDA_SNACK_CONSUMIDOS (
	Factura INT NOT NULL,
	Cantidad INT NOT NULL,
	Nombre VARCHAR(20) NOT NULL,
	Placa VARCHAR(7) NOT NULL,
	Tipo VARCHAR(7) NOT NULL,
);

CREATE TABLE PERSONAL(
	IDTrabajador INT NOT NULL,
	Lavado VARCHAR(20) NOT NULL
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

ALTER TABLE BEBIDA_SNACK
ADD PRIMARY KEY (Nombre,Tipo);

ALTER TABLE ADMIN_SUCURSAL
ADD PRIMARY KEY (Sucursal);

ALTER TABLE PROVEIDO_POR
ADD PRIMARY KEY (NombrePro,MarcaPro,Proveedor);

ALTER TABLE PERSONAL
ADD PRIMARY KEY (IDTrabajador,Lavado);

ALTER TABLE CITA
ADD PRIMARY KEY (Placa),
FOREIGN KEY (IDEmpleado) REFERENCES TRABAJADOR(IDTrabajador),
FOREIGN KEY (Sucursal) REFERENCES SUCURSAL(NombreSuc),
FOREIGN KEY (Lavado) REFERENCES LAVADO(NombreLav),
FOREIGN KEY (IDCliente) REFERENCES CLIENTE(IDCliente);
Insert into TRABAJADOR values (0,'2000-01-01','1','C','E','C','2000-01-01','E');

ALTER TABLE FACTURA
ADD FOREIGN KEY (Placa) REFERENCES CITA(Placa), 
PRIMARY KEY (Placa,NumFactura);

ALTER TABLE CLIENTE_TELEFONOS
ADD FOREIGN KEY (IDCliente) REFERENCES CLIENTE(IDCliente), 
PRIMARY KEY (Telefono);

ALTER TABLE CLIENTE_DIRECCIONES
ADD FOREIGN KEY (IDCliente) REFERENCES CLIENTE(IDCliente), 
PRIMARY KEY (Provincia, Canton, Distrito);

ALTER TABLE PRODUCTOS_USADOS
ADD PRIMARY KEY (MarcaPro), FOREIGN KEY (Lavado) REFERENCES LAVADO(NombreLav),
FOREIGN KEY (NombrePro,MarcaPro) REFERENCES INSUMO(NombrePro,MarcaPro); 

ALTER TABLE PROVEIDO_POR
ADD FOREIGN KEY (NombrePro, MarcaPro) REFERENCES INSUMO(NombrePro, MarcaPro), 
FOREIGN KEY (Proveedor) REFERENCES PROVEEDOR(CedulaJur);

ALTER TABLE ADMIN_SUCURSAL
ADD FOREIGN KEY (IDTrabajador) REFERENCES TRABAJADOR(IDTrabajador), 
FOREIGN KEY (Sucursal) REFERENCES SUCURSAL(NombreSuc);

ALTER TABLE BEBIDA_SNACK_CONSUMIDOS
ADD FOREIGN KEY (Placa,Factura) REFERENCES FACTURA (Placa,NumFactura),
FOREIGN KEY (Nombre,Tipo) REFERENCES BEBIDA_SNACK (Nombre,Tipo);

ALTER TABLE PERSONAL
ADD FOREIGN KEY (IDTrabajador) REFERENCES TRABAJADOR(IDTrabajador),
FOREIGN KEY (Lavado) REFERENCES LAVADO(NombreLav);