CREATE DATABASE ng_games;

USE ng_games;

CREATE TABLE game (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE game to games;

DESCRIBE game;

CREATE TABLE LogisticaTerrestre (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipoDeProducto VARCHAR(255),
    cantidadDelProducto VARCHAR(255),
    fechaDeRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fechaDeEntrega TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    bodegaDeEntrega VARCHAR(255),
    precioDeEnvio VARCHAR(255),
    placaDelVehículo VARCHAR(255),
    numeroDeGuia VARCHAR(255)
);

CREATE TABLE LogisticaMarina (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipoDeProducto VARCHAR(255),
    cantidadDelProducto VARCHAR(255),
    fechaDeRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fechaDeEntrega TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    puertoDeEntrega VARCHAR(255),
    precioDeEnvio VARCHAR(255),
    placaDelBarco VARCHAR(255),
    numeroDeGuia VARCHAR(255)
);

