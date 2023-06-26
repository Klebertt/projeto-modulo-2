CREATE TABLE carros (
 id integer auto_increment primary key,
 marca varchar(100),
 modelo varchar(20) unique,
 ano date,
 cor varchar(100)
 preço integer
);

CREATE TABLE alugueis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    carro_id integer,
    cliente_id integer,
    data_inicio date,
    data_fim DATE,
    valor DECIMAL(10, 2),
    FOREIGN KEY (carro_id) REFERENCES carros(id),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);


INSERT INTO carros (marca, modelo, ano, cor, preço)
VALUES ('Chevrolet', 'Onix', '2020-01-01', 'Prata', 50000),
       ('Ford', 'Mustang', '2019-06-15', 'Vermelho', 80000),
       ('Volkswagen', 'Golf', '2021-03-10', 'Preto', 60000),
       ('Toyota', 'Corolla', '2022-02-20', 'Branco', 70000);

