use DetailTEC;

INSERT INTO CLIENTE VALUES (1234,'Jpablo','123456789','Casa','Jose Pablo','pablonaranjo5@gmail.com',999);
INSERT INTO CLIENTE VALUES (1235,'FMonge','999999999','Casa','Fernando Monge','fermonge@gmail.com',999);
Insert into Sucursal Values ('Papa','12-12-1999',99999,'San Jose','Canton','Distrito',9);
Insert into TRABAJADOR values (99999,'12-12-99','12121ds2','Arr','Jesus','Opol','9-9-2001','Efectivo');

Update CLIENTE set Usuario = 'Juan' where IDcliente = 1234
select * from Cliente
select * from Lavado
select * from proveedor
select * from trabajador
Select IDcliente,Usuario,Contraseña,InfoContacto,Nombre,email,PuntosDispo from CLIENTE where IDcliente = 1234
Delete from Cliente where IDcliente = 11111
Select * from Insumo
Delete from Cliente
delete from Lavado
Select * from Sucursal
select * from lavado
INSERT INTO LAVADO VALUES ('string',0,0,0,0)