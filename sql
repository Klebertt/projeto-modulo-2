CREATE TABLE IF NOT EXISTS `carros` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `marca` VARCHAR(100),
  `modelo` VARCHAR(20) UNIQUE,
  `ano` DATE,
  `cor` VARCHAR(100),
  `preco` INT
);

-- Table structure for table `alugueis`
CREATE TABLE IF NOT EXISTS `alugueis` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `carro_id` INT,
  `cliente_id` INT,
  `data_inicio` DATE,
  `data_fim` DATE,
  `valor` DECIMAL(10, 2),
  FOREIGN KEY (`carro_id`) REFERENCES `carros` (`id`),
  FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`)
);
