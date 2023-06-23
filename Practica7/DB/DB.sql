USE DBTEST;

CREATE TABLE CLIENTE(
    IdCliente INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL
);


 Insert into CLIENTE (Nombre, Apellido) 
 values ('Edi','Tomas'),
		('Rudy','Tomas'),
		('Jenifer','Tomas'),
		('Eduar','Tomas');

select * from CLIENTE


