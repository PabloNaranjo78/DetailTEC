use DetailTEC;

INSERT INTO CLIENTE VALUES (1234,'Jpablo','123456789','Casa','Jose Pablo','pablonaranjo5@gmail.com',999);
INSERT INTO CLIENTE VALUES (1235,'FMonge','999999999','Casa','Fernando Monge','fermonge@gmail.com',999);

Update CLIENTE set Usuario = 'Juan' where IDcliente = 1234

select * from Cliente
Select IDcliente,Usuario,Contraseña,InfoContacto,Nombre,email,PuntosDispo from CLIENTE where IDcliente = 1234
Delete from Cliente where IDcliente = 11111
Delete from Cliente