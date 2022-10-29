use DetailTEC;
select * from ADMIN_SUCURSAL

INSERT INTO LAVADO VALUES('Lavado encerado', 1.1, 7000, 3500, 150)

select * from proveedor

INSERT INTO CLIENTE VALUES (1234,'Jpablo','123456789','Casa','Jose Pablo','pablonaranjo5@gmail.com',999);
INSERT INTO CLIENTE VALUES (1235,'FMonge','999999999','Casa','Fernando Monge','fermonge@gmail.com',999);
Insert into Sucursal Values ('Papa','12-12-1999',99999,'San Jose','Canton','Distrito',9);
Insert into TRABAJADOR values (99999,'12-12-99','12121ds2','Arr','Jesus','Opol','9-9-2001','Efectivo');
Insert into CLIENTE_DIRECCIONES values (1234,'San','Tarra','Marcos')

Update CLIENTE set Usuario = 'Juan' where IDcliente = 1234

select * from proveedor
select * from trabajador
Select IDcliente,Usuario,Contraseña,InfoContacto,Nombre,email,PuntosDispo from CLIENTE where IDcliente = 1234
Delete from Cliente where IDcliente = 11111
Select * from Insumo
Select * from Sucursal
select * from PROVEIDO_POR
select * from lavado
select * from cita
select * from BEBIDA_SNACK

select * from ADMIN_SUCURSAL where Sucursal = 'Cartago'

INSERT INTO LAVADO VALUES ('string',0,0,0,0)

INSERT INTO LAVADO VALUES('Lavado y aspirado', 1.4, 10000, 5000, 200)
INSERT INTO LAVADO VALUES('Lavado encerado', 1.1, 7000, 3500, 150)
INSERT INTO LAVADO VALUES('Lavado premium', 1.5, 15000, 7500, 300)

INSERT INTO SUCURSAL VALUES('Cartago', '2018-06-01', 88445566, 'Cartago', 'El Guarco', 'San Isidro', 1.5)

INSERT INTO TRABAJADOR VALUES(1, '2002-08-03', '123', 'Lavador', 'Joel','Gómez', '2020-02-02','Semanal')
INSERT INTO TRABAJADOR VALUES(2, '1995-06-04', '111', 'Lavador', 'Pablo','Naranjo', '2020-12-03','Bisemanal')
INSERT INTO TRABAJADOR VALUES(3, '1990-07-02', '222', 'Pulidor', 'Fernando','Monge', '2019-10-07','Bisemanal')
INSERT INTO TRABAJADOR VALUES(4, '1999-01-08', '333', 'Pulidor', 'Andy','Ramírez', '2018-07-04','Semanal')
INSERT INTO TRABAJADOR VALUES(5, '2000-10-07', '321', 'Lavador', 'Luis','Gonzalez', '2020-05-09','Bisemanal')

INSERT INTO CITA VALUES('1111111', '2022-11-01', 1, 'Cartago', 'Lavado y aspirado', 1234)
INSERT INTO CITA VALUES('2222222', '2022-11-02', 1, 'Cartago', 'Lavado premium', 1234)
INSERT INTO CITA VALUES('3333333', '2022-11-03', 1, 'Cartago', 'Lavado encerado', 1234)
INSERT INTO CITA VALUES('4444444', '2022-11-04', 1, 'Cartago', 'Lavado y aspirado', 1235)
INSERT INTO CITA VALUES('5555555', '2022-11-05', 1, 'Cartago', 'Lavado y aspirado', 1234)
INSERT INTO CITA VALUES('6666666', '2022-11-06', 3, 'Cartago', 'Lavado encerado', 1235)
INSERT INTO CITA VALUES('7777777', '2022-11-07', 3, 'Cartago', 'Lavado premium', 1234)
INSERT INTO CITA VALUES('8888888', '2022-11-08', 3, 'Cartago', 'Lavado encerado', 1235)
INSERT INTO CITA VALUES('9999999', '2022-11-09', 3, 'Cartago', 'Lavado premium', 1234)
INSERT INTO CITA VALUES('0000000', '2022-11-10', 3, 'Cartago', 'Lavado y aspirado', 1235)

INSERT INTO CITA VALUES('199191', 3, 'Cartago', 'Lavado y aspirado', 1235,'2022-11-10')

INSERT INTO CITA VALUES('1111511', '2022-11-01', 2, 'Cartago', 'Lavado premium', 1234)
INSERT INTO CITA VALUES('2226222', '2022-11-02', 2, 'Cartago', 'Lavado encerado', 1234)
INSERT INTO CITA VALUES('3337333', '2022-11-03', 2, 'Cartago', 'Lavado premium', 1234)
INSERT INTO CITA VALUES('4894444', '2022-11-04', 2, 'Cartago', 'Lavado y aspirado', 1235)
INSERT INTO CITA VALUES('5565555', '2022-11-05', 2, 'Cartago', 'Lavado premium', 1234)
INSERT INTO CITA VALUES('6616666', '2022-11-06', 4, 'Cartago', 'Lavado encerado', 1235)
INSERT INTO CITA VALUES('7727777', '2022-11-07', 4, 'Cartago', 'Lavado encerado', 1234)
INSERT INTO CITA VALUES('8838888', '2022-11-08', 4, 'Cartago', 'Lavado encerado', 1235)
INSERT INTO CITA VALUES('9949999', '2022-11-09', 4, 'Cartago', 'Lavado premium', 1234)
INSERT INTO CITA VALUES('0070000', '2022-11-10', 4, 'Cartago', 'Lavado encerado', 1235)

SELECT IDTrabajador, TipoPago, Nombre + ' ' + Apellidos AS NombreCompleto, Lavado, COUNT(FechaCita) 
AS NumCitas, Costo, Costo*COUNT(FechaCita) AS MontoTotal FROM ((TRABAJADOR INNER JOIN CITA 
ON IDTrabajador=IDEmpleado) INNER JOIN LAVADO ON Lavado=NombreLav) GROUP BY IDTrabajador, TipoPago, Nombre, Apellidos, Lavado, Costo ORDER BY IDTrabajador

SELECT    CLIENTE.IDCliente, Nombre, FechaCita, Lavado, Precio FROM (CLIENTE INNER JOIN CITA ON (CLIENTE.IDCliente=CITA.IDCliente AND CLIENTE.IDCliente=1234)) INNER JOIN LAVADO ON Lavado=NombreLav ORDER BY Precio DESC

