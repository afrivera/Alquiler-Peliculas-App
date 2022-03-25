-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema grupo_asistencia
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema grupo_asistencia
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `grupo_asistencia` DEFAULT CHARACTER SET utf8 ;
USE `grupo_asistencia` ;

-- -----------------------------------------------------
-- Table `grupo_asistencia`.`actores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `grupo_asistencia`.`actores` (
  `id_actor` INT NOT NULL,
  `nombre` VARCHAR(80) NOT NULL,
  `nacionalidad` VARCHAR(50) NULL,
  `sexo` VARCHAR(30) NOT NULL,
  `tipo_actor` ENUM('Principales', 'Extras') NOT NULL,
  PRIMARY KEY (`id_actor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `grupo_asistencia`.`directores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `grupo_asistencia`.`directores` (
  `id_director` INT NOT NULL AUTO_INCREMENT,
  `identificacion` VARCHAR(50) NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `nacionalidad` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_director`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `grupo_asistencia`.`peliculas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `grupo_asistencia`.`peliculas` (
  `id_pelicula` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(150) NOT NULL,
  `nacionalidad` VARCHAR(50) NOT NULL,
  `productora` VARCHAR(20) NOT NULL,
  `fecha` DATE NOT NULL,
  `actor_id` INT NULL,
  `director_id` INT NULL,
  PRIMARY KEY (`id_pelicula`),
  INDEX `actor_id_idx` (`actor_id` ASC) VISIBLE,
  INDEX `director_id_idx` (`director_id` ASC) VISIBLE,
  CONSTRAINT `actor_id`
    FOREIGN KEY (`actor_id`)
    REFERENCES `grupo_asistencia`.`actores` (`id_actor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `director_id`
    FOREIGN KEY (`director_id`)
    REFERENCES `grupo_asistencia`.`directores` (`id_director`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `grupo_asistencia`.`ejemplares`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `grupo_asistencia`.`ejemplares` (
  `id_ejemplar` INT NOT NULL AUTO_INCREMENT,
  `pelicula_id` INT NULL,
  PRIMARY KEY (`id_ejemplar`),
  INDEX `pelicula_id_idx` (`pelicula_id` ASC) VISIBLE,
  CONSTRAINT `pelicula_id`
    FOREIGN KEY (`pelicula_id`)
    REFERENCES `grupo_asistencia`.`peliculas` (`id_pelicula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `grupo_asistencia`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `grupo_asistencia`.`clientes` (
  `id_cliente` INT NOT NULL AUTO_INCREMENT,
  `identificacion` VARCHAR(50) NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `direccion` VARCHAR(150) NOT NULL,
  `telefono` VARCHAR(20) NOT NULL,
  `correo` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_cliente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `grupo_asistencia`.`alquilar_peliculas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `grupo_asistencia`.`alquilar_peliculas` (
  `id_alquiler` INT NOT NULL AUTO_INCREMENT,
  `fecha_alquiler` DATE NOT NULL,
  `fecha_devolucion` DATE NOT NULL,
  `ejemplar_id` INT NULL,
  `cliente_id` INT NULL,
  PRIMARY KEY (`id_alquiler`),
  INDEX `ejemplar_id_idx` (`ejemplar_id` ASC) VISIBLE,
  INDEX `cliente_id_idx` (`cliente_id` ASC) VISIBLE,
  CONSTRAINT `ejemplar_id`
    FOREIGN KEY (`ejemplar_id`)
    REFERENCES `grupo_asistencia`.`ejemplares` (`id_ejemplar`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cliente_id`
    FOREIGN KEY (`cliente_id`)
    REFERENCES `grupo_asistencia`.`clientes` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `grupo_asistencia`.`actores`
-- -----------------------------------------------------
START TRANSACTION;
USE `grupo_asistencia`;
INSERT INTO `grupo_asistencia`.`actores` (`id_actor`, `nombre`, `nacionalidad`, `sexo`, `tipo_actor`) VALUES (1, 'Robert Taylor', 'Estados Unidos', 'Masculino', 'Principales');

COMMIT;


-- -----------------------------------------------------
-- Data for table `grupo_asistencia`.`directores`
-- -----------------------------------------------------
START TRANSACTION;
USE `grupo_asistencia`;
INSERT INTO `grupo_asistencia`.`directores` (`id_director`, `identificacion`, `nombre`, `nacionalidad`) VALUES (1, '12345', 'Mervyn LeRoy', 'Estados Unidos');

COMMIT;


-- -----------------------------------------------------
-- Data for table `grupo_asistencia`.`peliculas`
-- -----------------------------------------------------
START TRANSACTION;
USE `grupo_asistencia`;
INSERT INTO `grupo_asistencia`.`peliculas` (`id_pelicula`, `titulo`, `nacionalidad`, `productora`, `fecha`, `actor_id`, `director_id`) VALUES (1, 'Quo Vadis', 'Estados Unidos', 'M.G.M', '1955-01-01', 1, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `grupo_asistencia`.`ejemplares`
-- -----------------------------------------------------
START TRANSACTION;
USE `grupo_asistencia`;
INSERT INTO `grupo_asistencia`.`ejemplares` (`id_ejemplar`, `pelicula_id`) VALUES (1, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `grupo_asistencia`.`clientes`
-- -----------------------------------------------------
START TRANSACTION;
USE `grupo_asistencia`;
INSERT INTO `grupo_asistencia`.`clientes` (`id_cliente`, `identificacion`, `nombre`, `direccion`, `telefono`, `correo`) VALUES (1, '9876', 'Andres Rivera', 'calle falsa 123', '9595959', 'andres@correo.com');

COMMIT;


-- -----------------------------------------------------
-- Data for table `grupo_asistencia`.`alquilar_peliculas`
-- -----------------------------------------------------
START TRANSACTION;
USE `grupo_asistencia`;
INSERT INTO `grupo_asistencia`.`alquilar_peliculas` (`id_alquiler`, `fecha_alquiler`, `fecha_devolucion`, `ejemplar_id`, `cliente_id`) VALUES (1, '2022-01-05', '2022-01-09', 1, 1);

COMMIT;

