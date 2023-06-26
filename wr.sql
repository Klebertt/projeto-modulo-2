DROP TABLE IF EXISTS `carros`;
CREATE TABLE `carros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `marca` varchar(100) NOT NULL,
  `modelo` varchar(20) NOT NULL,
  `ano` date NOT NULL,
  `cor` varchar(100) NOT NULL,
  `preco` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `modelo` (`modelo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `carros` VALUES
  (1,'Chevrolet','Onix','2020-01-01','Prata',50000),
  (2,'Ford','Mustang','2019-06-15','Vermelho',80000),
  (3,'Volkswagen','Golf','2021-03-10','Preto',60000),
  (4,'Toyota','Corolla','2022-02-20','Branco',70000);


DROP TABLE IF EXISTS `alugueis`;
CREATE TABLE `alugueis` (
  `id` int NOT NULL AUTO_INCREMENT,
  `carro_id` int NOT NULL,
  `cliente_id` int NOT NULL,
  `data_inicio` date NOT NULL,
  `data_fim` date NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `carro_id` (`carro_id`),
  KEY `cliente_id` (`cliente_id`),
  CONSTRAINT `alugueis_ibfk_1` FOREIGN KEY (`carro_id`) REFERENCES `carros` (`id`),
  CONSTRAINT `alugueis_ibfk_2` FOREIGN KEY (`cliente_id`) REFERENCES `perfil` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
